import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import Separator from '@/components/Separator';
import TopPicks from '@/components/TopPicks';
import { getProducts } from '@/lib/fetchProducts';

export default async function Page() {
    const products = await getProducts();

    return (
        <>
            <Hero />
            <AboutUs />
            <Separator />
            <TopPicks products={products} />
        </>
    );
}
