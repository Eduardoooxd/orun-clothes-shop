import Grid from '@/components/Grid';
import ProductPreview from '@/components/ProductPreview';
import { Locale } from '@/config/i18nConfig';
import { defaultSort, sorting } from '@/config/shopifyConfig';
import { getShopifyProducts } from '@/lib/shopify';
import { convertToShopifyLanguage } from '@/lib/shopify/converters';
import { store } from '@/store';

interface SearchPageProps {
    params: {
        lang: Locale;
    };
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
    const { lang } = params;

    const dictionary = store.getState().dictionary.dictionary;
    const { multipleResultsText, singleResultText, noResultsText, forText, showingText } =
        dictionary.searchPageContent;

    const { sort, query: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

    const products = await getShopifyProducts({
        language: convertToShopifyLanguage(lang),
        sortKey,
        reverse,
        query: searchValue,
    });

    const resultsText = products.length > 1 ? multipleResultsText : singleResultText;

    return (
        <>
            {searchValue ? (
                <p>
                    {products.length === 0
                        ? noResultsText
                        : `${showingText} ${products.length} ${resultsText} ${forText}`}
                    <span className="font-bold">&quot;{searchValue}&quot;</span>
                </p>
            ) : null}
            {products.length > 0 ? (
                <Grid className="grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductPreview key={product.id} product={product} />
                    ))}
                </Grid>
            ) : null}
        </>
    );
}
