import { futuraPTLight } from '@/lib/fontLoader';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full">
            <Image
                priority
                src="/../public/assets/images/background_2.jpg"
                alt="background"
                fill
                className="z-[-10]"
                style={{ objectFit: 'cover' }}
            />
            <div
                className={`flex min-h-screen w-full items-center justify-center text-5xl font-bold sm:text-8xl ${futuraPTLight.variable} font-futuraPTLight`}
            >
                <h2>MADE IN EARTH</h2>
            </div>
        </section>
    );
}
