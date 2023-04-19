import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import Separator from '@/components/Separator';
import TopPicks from '@/components/TopPicks';
import { i18nConfig } from '@/config/i18nConfig';

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((locale) => {
        return { lang: locale };
    });
}

export default async function Page() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Separator />
            {/* @ts-ignore */}
            <TopPicks />
        </>
    );
}
