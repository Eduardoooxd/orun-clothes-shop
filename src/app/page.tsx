import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            <Navbar />
            <Hero />
            <AboutUs />
            <Footer />
        </main>
    );
}
