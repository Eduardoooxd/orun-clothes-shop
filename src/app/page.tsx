import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Separator from '@/components/Separator';
import TopPicks from '@/components/TopPicks';

export default function Home() {
    return (
        <main className="min-h-screen w-full">
            <Navbar />
            <Hero />
            <AboutUs />
            <Separator />
            <TopPicks />
            <Separator />
            <Footer />
        </main>
    );
}
