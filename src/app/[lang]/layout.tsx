import Cart from '@/components/Cart';
import CookiesConsent from '@/components/CookiesConsent';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Layout/Navbar';
import { Toaster } from '@/components/ui/toaster';
import BodyConfiguration from '@/config/bodyConfiguration';
import { GoogleAnalyticsScripts } from '@/config/googleAnalyticsConfig';
import { Locale } from '@/config/i18nConfig';
import { siteConfig } from '@/config/site';
import { getDictionary } from '@/lib/getDictionary';
import { getShopifyCategories, getShopifyProducts } from '@/lib/shopify';
import { convertToShopifyLanguage } from '@/lib/shopify/converters';
import { store } from '@/store';
import { setDictionary, setLocale } from '@/store/dictionarySlice';
import Preloader from '@/store/Preloader';
import { setCategories } from '@/store/productsSlice';
import Providers from '@/store/Provider';
import { setProducts } from '@/store/searchSlice';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
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

    const [dictionary, categories, products] = await Promise.all([
        getDictionary(lang),
        getShopifyCategories({ language: convertToShopifyLanguage(lang) }),
        getShopifyProducts({ language: convertToShopifyLanguage(lang) }),
    ]);

    store.dispatch(setLocale(lang));
    store.dispatch(setDictionary(dictionary));
    store.dispatch(setCategories(categories));
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
                            {/* @ts-expect-error */}
                            <Navbar cart={<Cart />} />
                            {children}
                            <Footer />
                        </main>
                        <Toaster />
                        <CookiesConsent />
                        <Analytics />
                    </body>
                </BodyConfiguration>
            </Providers>
        </html>
    );
}
