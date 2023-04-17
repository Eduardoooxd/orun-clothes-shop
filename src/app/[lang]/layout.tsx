import Footer from '@/components/Footer';
import { Navbar } from '@/components/Layout/Navbar';
import CategoriesDropdownItem from '@/components/Layout/Navbar/CategoriesDropdownItem';
import { Locale } from '@/config/i18nConfig';
import { siteConfig } from '@/config/site';
import { getCategories } from '@/lib/fetchProducts';
import { getDictionary } from '@/lib/getDictionary';
import { store } from '@/store';
import { setDictionary } from '@/store/dictionarySlice';
import Preloader from '@/store/Preloader';
import Providers from '@/store/Provider';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | Orun`,
    },
    description: siteConfig.description,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
};

interface PageLayoutProps {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
}

export default async function PageLayout({ children, params }: PageLayoutProps) {
    const { lang } = params;
    const dictionary = await getDictionary(lang);
    store.dispatch(setDictionary(dictionary));

    const categories = await getCategories();

    const categoriesToRender = categories.map((category) => (
        <CategoriesDropdownItem key={category} category={category} />
    ));

    return (
        <html lang={lang}>
            <Preloader dictonary={dictionary} />
            <Providers>
                <body>
                    <main className="flex min-h-screen w-full flex-col items-center justify-between">
                        <Navbar categories={categoriesToRender} />
                        {children}
                        <Footer />
                    </main>
                    <Analytics />
                </body>
            </Providers>
        </html>
    );
}
