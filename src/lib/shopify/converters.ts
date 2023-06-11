import { DEFAULT_SHOPIFY_LANGUAGE } from '@/config/shopifyConfig';
import { Cart, Connection, Product, ProductVariant, ShopifyCart, ShopifyProduct } from './types';

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

const reshapeVariants = (product: ShopifyProduct): ProductVariant[] => {
    const variants = removeEdgesAndNodes(product.variants);

    const reshapedVariants = variants.map((variant) => {
        const { selectedOptions } = variant;
        let size = undefined;
        let color = undefined;

        if (!selectedOptions && !Array.isArray(selectedOptions)) return variant;

        selectedOptions.forEach((option: { name: string; value: string }) => {
            if ((option.name === 'Size' || option.name === 'Tamanho') && option.value) {
                size = option.value;
            }
            if ((option.name === 'Color' || option.name === 'Cor') && option.value) {
                color = option.value;
            }
        });

        return {
            ...variant,
            size,
            color,
        };
    });

    return reshapedVariants;
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

    const { images, ...rest } = product;
    const variantsReshaped = reshapeVariants(product);

    const sizes: string[] = [];
    const colors: string[] = [];
    const category =
        product.metafields.find((metafield) => metafield?.key === 'category')?.value || '';

    variantsReshaped.forEach((variant) => {
        const { size, color } = variant;

        if (size) {
            !sizes.includes(size) && sizes.push(size);
        }

        if (color) {
            !colors.includes(color) && colors.push(color);
        }
    });

    return {
        ...rest,
        images: removeEdgesAndNodes(images),
        variants: variantsReshaped,
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
