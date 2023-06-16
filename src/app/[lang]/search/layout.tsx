import Container from '@/components/Container';
import FilterList from '@/components/Layout/Search/filter';
import { SearchBar } from '@/components/Layout/Search/searchBar';
import { Locale } from '@/config/i18nConfig';
import { localeSorting } from '@/config/shopifyConfig';
import { Suspense } from 'react';

interface SearchLayoutProps {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
}

export default async function ProductsLayout({ children, params }: SearchLayoutProps) {
    const { lang } = params;
    /*


    const categories = await getShopifyCategories({
        language: convertToShopifyLanguage(dictionary.language),
    });*/

    const sortingList = localeSorting(lang);
    const titleLocale = lang === 'en' ? 'Sort by' : 'Ordenar por';

    return (
        <Suspense>
            <Container>
                <SearchBar className="mx-auto mb-4 sm:max-w-xl" />

                <div className="flex flex-col md:flex-row ">
                    {/* 
                    
                                        <div className="flex-none order-first md:w-1/6">
                        <CategoryFilter title={title} categories={categories} />
                    </div>
                    */}

                    <div className="order-last min-h-screen w-full md:order-none">{children}</div>
                    <div className="order-none md:order-last md:w-1/6 md:flex-none">
                        <FilterList list={sortingList} title={titleLocale} />
                    </div>
                </div>
            </Container>
        </Suspense>
    );
}
