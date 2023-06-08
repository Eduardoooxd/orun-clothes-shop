import { DEFAULT_SHOPIFY_LANGUAGE } from '@/config/shopifyConfig';
import { Cart, Connection, Product, ShopifyCart, ShopifyProduct } from './types';

export const convertToShopifyLanguage = (language: string) => {
    switch (language) {
        case 'en':
            return 'EN';
        case 'pt':
            return 'PT';
        default:
            return DEFAULT_SHOPIFY_LANGUAGE;
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeEdgesAndNodes = (array: Connection<any>) => {
    return array.edges.map((edge) => edge?.node);
};

export const reshapeProducts = (products: ShopifyProduct[]) => {
    const reshapedProducts = [];

    for (const product of products) {
        if (product) {
            const reshapedProduct = reshapeProduct(product);

            if (reshapedProduct) {
                reshapedProducts.push(reshapedProduct);
            }
        }
    }

    return reshapedProducts;
};

export const reshapeProduct = (product: ShopifyProduct) => {
    if (!product) {
        return undefined;
    }

    const { images, variants, ...rest } = product;

    const sizes: string[] = [];
    const colors: string[] = [];
    const category =
        product.metafields.find((metafield) => metafield?.key === 'category')?.value || '';

    variants.edges.forEach((variant) => {
        const { selectedOptions } = variant.node;
        selectedOptions.forEach((option) => {
            if (
                (option.name === 'Size' || option.name === 'Tamanho') &&
                option.value &&
                !sizes.includes(option.value)
            ) {
                sizes.push(option.value);
            }
            if (
                (option.name === 'Color' || option.name === 'Cor') &&
                option.value &&
                !colors.includes(option.value)
            ) {
                colors.push(option.value);
            }
        });
    });

    return {
        ...rest,
        images: removeEdgesAndNodes(images),
        variants: removeEdgesAndNodes(variants),
        sizes,
        colors,
        category,
    };
};

export const reshapeCategories = (products: Product[]) => {
    const categories: string[] = [];

    products.forEach((product) => {
        const { category } = product;
        if (category && !categories.includes(category)) {
            categories.push(category);
        }
    });

    return categories;
};

export const reshapeCart = (cart: ShopifyCart): Cart => {
    if (!cart.cost?.totalTaxAmount) {
        cart.cost.totalTaxAmount = {
            amount: '0.0',
            currencyCode: 'EUR',
        };
    }

    return {
        ...cart,
        lines: removeEdgesAndNodes(cart.lines),
    };
};
