import { ShopifySupportedLanguages } from '@/lib/shopify/types';

export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';

export const DEFAULT_SHOPIFY_LANGUAGE: ShopifySupportedLanguages = 'PT';

export const SHOPIFY_REVALIDATE_TAG = 'shopify';

export const TAGS = {
    products: 'products',
};

export type SortFilterItem = {
    title: string;
    slug: string | null;
    sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE' | 'TITLE';
    reverse: boolean;
};

export const defaultSort: SortFilterItem = {
    title: 'Title',
    slug: null,
    sortKey: 'RELEVANCE',
    reverse: false,
};

export const sorting: SortFilterItem[] = [
    defaultSort,
    { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
    { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
    { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
    { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true },
];
