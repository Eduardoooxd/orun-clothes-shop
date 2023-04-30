import Footer from '@/components/Footer';
import { Navbar } from '@/components/Layout/Navbar';
import BodyConfiguration from '@/config/bodyConfiguration';
import { GoogleAnalyticsScripts } from '@/config/googleAnalyticsConfig';
import { Locale } from '@/config/i18nConfig';
import { siteConfig } from '@/config/site';
import { getCategories, getProducts } from '@/lib/fetchProducts';
import { getDictionary } from '@/lib/getDictionary';
import { store } from '@/store';
import { setDictionary, setLocale } from '@/store/dictionarySlice';
import Preloader from '@/store/Preloader';
import { setCategories } from '@/store/productsSlice';
import Providers from '@/store/Provider';
import { setProducts } from '@/store/searchSlice';
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
    store.dispatch(setLocale(lang));

    const dictionary = await getDictionary(lang);
    store.dispatch(setDictionary(dictionary));

    const categories = await getCategories(lang);
    store.dispatch(setCategories(categories));

    const products = await getProducts(lang);
    store.dispatch(setProducts(products));

    return (
        <html lang={lang}>
            <GoogleAnalyticsScripts />
            <Preloader
                dictionary={dictionary}
                locale={lang}
                categories={categories}
                products={products}
            />
            <Providers>
                <BodyConfiguration>
                    <body>
                        <main className="flex min-h-screen w-full flex-col items-center justify-between">
                            <Navbar />
                            {children}
                            <Footer />
                        </main>
                        <Analytics />
                    </body>
                </BodyConfiguration>
            </Providers>
        </html>
    );
}
