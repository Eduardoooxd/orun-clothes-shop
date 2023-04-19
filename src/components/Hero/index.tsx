'use client';
import useIsMobile from '@/hooks/useIsMobile';
import LogoWhiteAlternativeImage from '@/images/logo/logo-white-small-alternative.png';
import LogoWhiteImage from '@/images/logo/logo-white.png';

import BackgroundImage from '@/images/main_background.webp';
import BackgroundImageMobile from '@/images/main_background_mobile.webp';

import Image from 'next/image';

export default function Hero() {
    const isMobile = useIsMobile();

    return (
        <section className="relative mt-[-5rem] min-h-screen w-full">
            <Image
                priority
                src={isMobile ? BackgroundImageMobile : BackgroundImage}
                alt="background"
                fill
                quality={100}
                className="z-[-10]"
                style={{ objectFit: 'cover', objectPosition: '20%' }}
            />

            <div className={`flex min-h-screen w-full items-center justify-center`}>
                <Image
                    priority
                    src={isMobile ? LogoWhiteImage : LogoWhiteAlternativeImage}
                    alt="logo"
                    width={900}
                    height={900}
                />
            </div>
        </section>
    );
}
