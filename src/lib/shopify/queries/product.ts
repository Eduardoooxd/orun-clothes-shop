import { DEFAULT_SHOPIFY_LANGUAGE } from '@/config/shopifyConfig';
import productFragment from '../fragments/product';

export const getProductQuery = (language = DEFAULT_SHOPIFY_LANGUAGE) =>
    `query getProduct ($handle: String!) @inContext(language: ${language}) {
        product(handle: $handle) {
            ...product 
        }
    }
    ${productFragment}
`;

export const getProductsQuery = (language = DEFAULT_SHOPIFY_LANGUAGE) =>
    `query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) @inContext(language: ${language}) {
        products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
            edges {
                node {
                    ...product 
                }
            }
        }
    }
    ${productFragment}
`;
