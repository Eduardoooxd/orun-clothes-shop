import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import { builder } from '@builder.io/sdk';

import { RenderBuilderContent } from '../builder';

import LogoWhiteAlternativeImage from '@/images/logo/logo-white-small-alternative.png';
import LogoWhiteImage from '@/images/logo/logo-white.png';

import BackgroundImage from '@/images/main_background.webp';
import BackgroundImageMobile from '@/images/main_background_mobile.webp';

import { isDevEnv } from '@/lib/utils';
import Image from 'next/image';

builder.init(BUILDER_IO_API_KEY);

export default async function Hero() {
    const HERO_MODEL = 'hero';

    const hero = isDevEnv()
        ? null
        : await builder
              .get(HERO_MODEL, {
                  prerender: false,
              })
              .toPromise();

    return (
        <section className="relative mt-[-5rem] min-h-screen w-full overflow-x-hidden">
            {isDevEnv() ? (
                <LocalHero />
            ) : (
                <RenderBuilderContent model={HERO_MODEL} content={hero} />
            )}
        </section>
    );
}

const LocalHero = () => {
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
};
