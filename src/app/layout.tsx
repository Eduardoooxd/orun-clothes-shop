import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
    title: 'Orun',
    description:
        'Orun is an online shopping destination for individuals who are passionate about environmental sustainability, organic living, and spiritual awareness. Our carefully curated collection of clothing features unique designs made from ethically sourced and eco-friendly materials, ensuring that our customers not only look great but feel good about their impact on the planet.',
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
