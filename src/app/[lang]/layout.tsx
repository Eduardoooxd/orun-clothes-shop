import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { siteConfig } from '@/config/site';
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
        lang: string;
    };
}

export default function PageLayout({ children, params }: PageLayoutProps) {
    const { lang } = params;
    return (
        <html lang={lang}>
            <body>
                <main className="flex min-h-screen w-full flex-col items-center justify-between">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
                <Analytics />
            </body>
        </html>
    );
}
