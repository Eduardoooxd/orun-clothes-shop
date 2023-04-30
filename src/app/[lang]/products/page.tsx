import { i18nConfig, Locale } from '@/config/i18nConfig';
import { getCategories, getProducts } from '@/lib/fetchProducts';
import ProductsFilter from './productsFilter';

interface ProductsPageProps {
    params: {
        lang: Locale;
    };
    searchParams?: {
        [key: string]: string | string[] | undefined;
    };
}

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((lang) => ({ lang }));
}

export default async function Products({ params, searchParams }: ProductsPageProps) {
    const { lang } = params;
    const { category } = searchParams || {};

    const [products, categories] = await Promise.all([getProducts(lang), getCategories(lang)]);

    const selectedCategories = new Map<string, boolean>();
    categories.forEach((category) => selectedCategories.set(category, false));
    if (!!category) {
        [category].flat().forEach((category) => selectedCategories.set(category, true));
    }

    return (
        <div className="flex flex-col justify-between md:flex-row">
            <ProductsFilter
                predefinedCategories={category}
                allCategories={categories}
                allProducts={products}
            />
        </div>
    );
}
