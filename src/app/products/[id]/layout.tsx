import '@/app/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const dynamicParams = false;

export const metadata = {
    title: 'Orun',
    description:
        'Orun is an online shopping destination for individuals who are passionate about environmental sustainability, organic living, and spiritual awareness. Our carefully curated collection of clothing features unique designs made from ethically sourced and eco-friendly materials, ensuring that our customers not only look great but feel good about their impact on the planet.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
            <body>
                <main className="min-h-screen w-full">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}