import BackgroundImage from '@/images/background_2.webp';
import LogoWhiteAlternativeImage from '@/images/logo/logo-white-small-alternative.png';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative mt-[-5rem] min-h-screen w-full">
            <Image
                priority
                src={BackgroundImage}
                alt="background"
                fill
                className="z-[-10]"
                style={{ objectFit: 'cover' }}
            />
            <div className={`flex min-h-screen w-full items-center justify-center `}>
                <Image
                    priority
                    src={LogoWhiteAlternativeImage}
                    alt="logo"
                    width={700}
                    height={500}
                />
            </div>
        </section>
    );
}
