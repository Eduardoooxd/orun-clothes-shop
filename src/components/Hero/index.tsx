import LogoWhiteAlternativeImage from '@/images/logo/logo-white-small-alternative.png';
import BackgroundImage from '@/images/main_background.webp';

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
                style={{ objectFit: 'cover', objectPosition: '25%' }}
            />
            <div className={`flex min-h-screen w-full items-center justify-center`}>
                <Image
                    priority
                    src={LogoWhiteAlternativeImage}
                    alt="logo"
                    width={900}
                    height={900}
                />
            </div>
        </section>
    );
}
