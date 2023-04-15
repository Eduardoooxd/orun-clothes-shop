import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { siteConfig } from '@/config/site';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
            <ClerkProvider>
                <body>
                    <main className="flex min-h-screen w-full flex-col items-center justify-between">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                    <Analytics />
                </body>
            </ClerkProvider>
        </html>
    );
}
