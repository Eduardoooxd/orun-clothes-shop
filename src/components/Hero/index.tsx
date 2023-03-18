import { futuraPTLight } from '@/lib/fontLoader';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen">
            <Image
                priority
                src="/../public/assets/images/background_2.jpg"
                alt="background"
                fill
                className="z-[-10]"
                style={{ objectFit: 'cover' }}
            />
            <div
                className={`flex w-full min-h-screen justify-center items-center text-8xl ${futuraPTLight.variable} font-futuraPTLight`}
            >
                <h2>MADE IN EARTH</h2>
            </div>
        </section>
    );
}
