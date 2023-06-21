import { ShopifySupportedLanguages } from '@/lib/shopify/types';
import { Locale } from './i18nConfig';

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
    title: 'Name',
    slug: null,
    sortKey: 'TITLE',
    reverse: false,
};

export const sorting: SortFilterItem[] = [
    defaultSort,
    { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
    { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
    { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
    { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true },
];

export const localeSorting = (locale: Locale) => {
    const sorting: SortFilterItem[] = [
        {
            title: locale === 'en' ? 'Name' : 'Nome',
            slug: null,
            sortKey: 'TITLE',
            reverse: false,
        },
        {
            title: locale === 'en' ? 'Trending' : 'Em destaque',
            slug: 'trending-desc',
            sortKey: 'BEST_SELLING',
            reverse: false,
        }, // asc
        {
            title: locale === 'en' ? 'Latest arrivals' : 'Ultimos lançamentos',
            slug: 'latest-desc',
            sortKey: 'CREATED_AT',
            reverse: true,
        },
        {
            title: locale === 'en' ? 'Price: ascending' : 'Preço: ascendente',
            slug: 'price-asc',
            sortKey: 'PRICE',
            reverse: false,
        }, // asc
        {
            title: locale === 'en' ? 'Price: descending' : 'Preço: descendente',
            slug: 'price-desc',
            sortKey: 'PRICE',
            reverse: true,
        },
    ];

    return sorting;
};
