import {
    DEFAULT_SHOPIFY_LANGUAGE,
    SHOPIFY_GRAPHQL_API_ENDPOINT,
    TAGS,
} from '@/config/shopifyConfig';
import { isShopifyError } from '../type-guards';
import {
    removeEdgesAndNodes,
    reshapeCart,
    reshapeCategories,
    reshapeProduct,
    reshapeProducts,
} from './converters';
import {
    addToCartMutation,
    createCartMutation,
    editCartItemsMutation,
    removeFromCartMutation,
} from './mutations/cart';
import { getCartQuery } from './queries/cart';
import { getProductQuery, getProductsQuery } from './queries/product';
import {
    Cart,
    Product,
    ShopifyAddToCartOperation,
    ShopifyCartOperation,
    ShopifyCreateCartOperation,
    ShopifyProductOperation,
    ShopifyProductsOperation,
    ShopifyRemoveFromCartOperation,
    ShopifySupportedLanguages,
    ShopifyUpdateCartOperation,
} from './types';

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
    query,
    variables,
    headers,
    tags,
    toRevalidate = false,
    revalidate,
    cache = 'force-cache',
}: {
    query: string;
    variables?: ExtractVariables<T>;
    headers?: HeadersInit;
    tags?: string[];
    toRevalidate?: boolean;
    revalidate?: number;
    cache?: RequestCache;
}): Promise<{ status: number; body: T } | never> {
    if (!endpoint || !key) throw new Error('Missing Shopify credentials.');

    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key,
                ...headers,
            },
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables }),
            }),
            cache,
            ...(tags && { next: { tags } }),
            ...(toRevalidate && { next: { revalidate } }),
        });

        const body = await result.json();

        if (body.errors) {
            throw body.errors[0];
        }

        return {
            status: result.status,
            body,
        };
    } catch (error) {
        if (isShopifyError(error)) {
            throw {
                status: error.status || 500,
                message: error.message,
                query,
            };
        }

        throw {
            error,
            query,
        };
    }
}

export async function getShopifyProducts({
    query,
    reverse,
    sortKey,
    category,
    language = DEFAULT_SHOPIFY_LANGUAGE,
}: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
    category?: string;
    language?: ShopifySupportedLanguages;
}): Promise<Product[]> {
    const res = await shopifyFetch<ShopifyProductsOperation>({
        query: getProductsQuery(language),
        tags: [TAGS.products],
        toRevalidate: true,
        revalidate: 60 * 15,
        variables: {
            query,
            reverse,
            sortKey,
        },
    });

    const products = reshapeProducts(removeEdgesAndNodes(res.body.data.products));

    if (category) {
        return products.filter(
            (product) => product.category.toLowerCase() === category.toLowerCase()
        );
    }

    return products;
}

export async function getShopifyProduct({
    handle,
    language = DEFAULT_SHOPIFY_LANGUAGE,
}: {
    handle: string;
    language?: ShopifySupportedLanguages;
}): Promise<Product | undefined> {
    const res = await shopifyFetch<ShopifyProductOperation>({
        query: getProductQuery(language),
        tags: [TAGS.products],
        toRevalidate: true,
        revalidate: 60 * 15,
        variables: {
            handle,
        },
    });

    return reshapeProduct(res.body.data.product);
}

export async function getShopifyCategories({
    language = DEFAULT_SHOPIFY_LANGUAGE,
}: {
    language?: ShopifySupportedLanguages;
}): Promise<string[]> {
    const products = await getShopifyProducts({
        language,
    });

    return reshapeCategories(products);
}

export async function createCart(): Promise<Cart> {
    const res = await shopifyFetch<ShopifyCreateCartOperation>({
        query: createCartMutation,
        cache: 'no-store',
    });

    return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(
    cartId: string,
    lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    const res = await shopifyFetch<ShopifyAddToCartOperation>({
        query: addToCartMutation,
        variables: {
            cartId,
            lines,
        },
        cache: 'no-store',
    });
    return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
    const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
        query: removeFromCartMutation,
        variables: {
            cartId,
            lineIds,
        },
        cache: 'no-store',
    });

    return reshapeCart(res.body.data.cartLinesRemove.cart);
}

export async function updateCart(
    cartId: string,
    lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    const res = await shopifyFetch<ShopifyUpdateCartOperation>({
        query: editCartItemsMutation,
        variables: {
            cartId,
            lines,
        },
        cache: 'no-store',
    });

    return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function getCart(
    cartId: string,
    language = DEFAULT_SHOPIFY_LANGUAGE
): Promise<Cart | null> {
    const res = await shopifyFetch<ShopifyCartOperation>({
        query: getCartQuery(language),
        variables: { cartId },
        cache: 'no-store',
    });

    if (!res.body.data.cart) {
        return null;
    }

    return reshapeCart(res.body.data.cart);
}
