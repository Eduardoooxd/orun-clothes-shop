export type ShopifySupportedLanguages = 'PT' | 'EN';

export type Maybe<T> = T | null;

export type Edge<T> = {
    node: T;
};

export type Connection<T> = {
    edges: Array<Edge<T>>;
};

export type Money = {
    amount: string;
    currencyCode: string;
};

export type SEO = {
    title: string;
    description: string;
};

export type Metafield = {
    key: string;
    value: string;
};

export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
};

export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    price: Money;
    size?: string;
    color?: string;
};

export type ShopifyProduct = {
    id: string;
    handle: string;
    availableForSale: boolean;
    title: string;
    description: string;
    descriptionHtml: string;
    productType: string;
    metafields: Metafield[];
    priceRange: {
        maxVariantPrice: Money;
        minVariantPrice: Money;
    };
    variants: Connection<ProductVariant>;
    featuredImage: Image;
    images: Connection<Image>;
    seo: SEO;
    tags: string[];
    updatedAt: string;
};

export type ShopifyProductOperation = {
    data: { product: ShopifyProduct };
    variables: {
        handle: string;
    };
};

export type ShopifyProductsOperation = {
    data: {
        products: Connection<ShopifyProduct>;
    };
    variables: {
        query?: string;
        reverse?: boolean;
        sortKey?: string;
    };
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
    variants: ProductVariant[];
    images: Image[];
    sizes: string[];
    colors: string[];
    category: string;
};

export type Cart = Omit<ShopifyCart, 'lines'> & {
    lines: CartItem[];
};

export type ShopifyCart = {
    id: string;
    checkoutUrl: string;
    cost: {
        subtotalAmount: Money;
        totalAmount: Money;
        totalTaxAmount: Money;
    };
    lines: Connection<CartItem>;
    totalQuantity: number;
};

export type CartItem = {
    id: string;
    quantity: number;
    cost: {
        totalAmount: Money;
    };
    merchandise: {
        id: string;
        title: string;
        selectedOptions: {
            name: string;
            value: string;
        }[];
        product: Product;
    };
};

export type ShopifyCartOperation = {
    data: {
        cart: ShopifyCart;
    };
    variables: {
        cartId: string;
    };
};

export type ShopifyCreateCartOperation = {
    data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
    data: {
        cartLinesAdd: {
            cart: ShopifyCart;
        };
    };
    variables: {
        cartId: string;
        lines: {
            merchandiseId: string;
            quantity: number;
        }[];
    };
};

export type ShopifyRemoveFromCartOperation = {
    data: {
        cartLinesRemove: {
            cart: ShopifyCart;
        };
    };
    variables: {
        cartId: string;
        lineIds: string[];
    };
};

export type ShopifyUpdateCartOperation = {
    data: {
        cartLinesUpdate: {
            cart: ShopifyCart;
        };
    };
    variables: {
        cartId: string;
        lines: {
            id: string;
            merchandiseId: string;
            quantity: number;
        }[];
    };
};
