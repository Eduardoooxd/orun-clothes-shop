import { i18nConfig } from '@/config/i18nConfig';
import { getDictionary } from '@/lib/getDictionary';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

export default async function sitemap() {
    const { locales } = i18nConfig;

    const localeRoutes = locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date().toISOString(),
    }));

    const dictionaries = await Promise.all(locales.map((locale) => getDictionary(locale)));
    const navRoutes = dictionaries.map((dictionary) => {
        const { NAVBAR_LINKS } = dictionary.navBar;
        return (Object.keys(NAVBAR_LINKS) as Array<keyof typeof NAVBAR_LINKS>).map(
            (key: keyof typeof NAVBAR_LINKS) => {
                const { href } = NAVBAR_LINKS[key];
                return {
                    url: `${baseUrl}/${dictionary.language}/${href}`,
                    lastModified: new Date().toISOString(),
                };
            }
        );
    });

    // TODO Insert Product and Footer routes

    return [...localeRoutes, ...navRoutes.flat()];
}
