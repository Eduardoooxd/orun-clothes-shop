import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import Separator from '@/components/Separator';
import TopPicks from '@/components/TopPicks';
import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import { i18nConfig } from '@/config/i18nConfig';
import { builder } from '@builder.io/sdk';

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((locale) => {
        return { lang: locale };
    });
}

builder.init(BUILDER_IO_API_KEY);

export default async function Page() {
    return (
        <>
            {/* @ts-expect-error */}
            <Hero />
            <Separator />
            {/* @ts-expect-error */}
            <TopPicks />
            <AboutUs />
        </>
    );
}
