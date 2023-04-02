import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Separator from '@/components/Separator';
import TopPicks from '@/components/TopPicks';
import { getProducts } from '@/lib/fetchProducts';

export default async function Page() {
    const products = await getProducts();

    return (
        <main className="min-h-screen w-full">
            <Navbar />
            <Hero />
            <AboutUs />
            <Separator />
            <TopPicks products={products} />
            <Separator />
            <Footer />
        </main>
    );
}
