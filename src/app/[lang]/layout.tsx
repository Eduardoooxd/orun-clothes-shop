import Footer from '@/components/Footer';
import { Navbar } from '@/components/Layout/Navbar';
import { Locale } from '@/config/i18nConfig';
import { siteConfig } from '@/config/site';
import { getDictionary } from '@/lib/getDictionary';
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

    return (
        <html lang={lang}>
            <body>
                <main className="flex min-h-screen w-full flex-col items-center justify-between">
                    <Navbar dictionary={dictionary} />
                    {children}
                    <Footer dictionary={dictionary} />
                </main>
                <Analytics />
            </body>
        </html>
    );
}
