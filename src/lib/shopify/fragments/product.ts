import imageFragment from './image';
import seoFragment from './seo';

const productFragment =
    /* GraphQL */
    `
        fragment product on Product {
            id
            handle
            availableForSale
            title
            description
            descriptionHtml
            productType
            priceRange {
                maxVariantPrice {
                    amount
                    currencyCode
                }
                minVariantPrice {
                    amount
                    currencyCode
                }
            }
            metafields(identifiers: [{ namespace: "custom", key: "category" }]) {
                key
                value
            }
            variants(first: 250) {
                edges {
                    node {
                        id
                        title
                        availableForSale
                        selectedOptions {
                            name
                            value
                        }
                        price {
                            amount
                            currencyCode
                        }
                    }
                }
            }
            featuredImage {
                ...image
            }
            images(first: 20) {
                edges {
                    node {
                        ...image
                    }
                }
            }
            seo {
                ...seo
            }
            tags
            updatedAt
        }
        ${imageFragment}
        ${seoFragment}
    `;

export default productFragment;
