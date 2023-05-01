import { DEFAULT_SHOPIFY_LANGUAGE } from '@/config/shopifyConfig';
import { Connection, ShopifyProduct } from './types';

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

    return {
        ...rest,
        images: removeEdgesAndNodes(images),
        variants: removeEdgesAndNodes(variants),
    };
};
