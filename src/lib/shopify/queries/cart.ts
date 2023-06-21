import { DEFAULT_SHOPIFY_LANGUAGE } from '@/config/shopifyConfig';
import cartFragment from '../fragments/cart';

export const getCartQuery = (language = DEFAULT_SHOPIFY_LANGUAGE) => `
    query getCart($cartId: ID!) @inContext(language: ${language}) {
        cart(id: $cartId) {
            ...cart
        }
    }
    ${cartFragment}
`;
