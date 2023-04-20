import { i18nConfig } from '@/config/i18nConfig';
import AboutUsContent from './aboutUsContent';

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((lang) => ({ lang }));
}

export default async function Page() {
    return (
        <>
            <AboutUsContent />
        </>
    );
}
