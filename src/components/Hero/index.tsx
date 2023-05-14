import LogoWhiteAlternativeImage from '@/images/logo/logo-white-small-alternative.png';
import LogoWhiteImage from '@/images/logo/logo-white.png';

import BackgroundImage from '@/images/main_background.webp';
import BackgroundImageMobile from '@/images/main_background_mobile.webp';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative mt-[-5rem] min-h-screen w-full">
            <Image
                priority
                src={BackgroundImageMobile}
                alt="background"
                fill
                quality={100}
                className="z-[-10] block lg:hidden"
                style={{ objectFit: 'cover' }}
            />

            <Image
                priority
                src={BackgroundImage}
                alt="background"
                fill
                quality={100}
                className="z-[-10] hidden lg:block"
                style={{ objectFit: 'cover' }}
            />

            <div className={`flex min-h-screen w-full items-center justify-center`}>
                <Image
                    priority
                    src={LogoWhiteImage}
                    alt="logo"
                    width={400}
                    height={400}
                    className="block lg:hidden"
                />
                <Image
                    priority
                    src={LogoWhiteAlternativeImage}
                    alt="logo"
                    width={900}
                    height={900}
                    className="hidden lg:block"
                />
            </div>
        </section>
    );
}
