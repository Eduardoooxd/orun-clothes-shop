import { DEFAULT_SHOPIFY_LANGUAGE, SHOPIFY_GRAPHQL_API_ENDPOINT } from '@/config/shopifyConfig';
import { isShopifyError } from '../type-guards';
import { removeEdgesAndNodes, reshapeProduct, reshapeProducts } from './converters';
import { getProductQuery, getProductsQuery } from './queries/product';
import {
    Product,
    ShopifyProductOperation,
    ShopifyProductsOperation,
    ShopifySupportedLanguages,
} from './types';

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
    query,
    variables,
    headers,
    cache = 'force-cache',
}: {
    query: string;
    variables?: ExtractVariables<T>;
    headers?: HeadersInit;
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
            next: { revalidate: 900 }, // 15 minutes
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

export async function getProducts({
    query,
    reverse,
    sortKey,
    language = DEFAULT_SHOPIFY_LANGUAGE,
}: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
    language?: ShopifySupportedLanguages;
}): Promise<Product[]> {
    const res = await shopifyFetch<ShopifyProductsOperation>({
        query: getProductsQuery(language),
        variables: {
            query,
            reverse,
            sortKey,
        },
    });

    return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

export async function getProduct({
    handle,
    language = DEFAULT_SHOPIFY_LANGUAGE,
}: {
    handle: string;
    language?: ShopifySupportedLanguages;
}): Promise<Product | undefined> {
    const res = await shopifyFetch<ShopifyProductOperation>({
        query: getProductQuery(language),
        variables: {
            handle,
        },
    });

    return reshapeProduct(res.body.data.product);
}
