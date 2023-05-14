export const i18nConfig = {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

export const includesLocale = (localeToTest: string) => {
    const { locales } = i18nConfig;
    return locales.includes(localeToTest as Locale);
};

export const getLocale = (localeToTest: string) => {
    const { locales } = i18nConfig;
    if (includesLocale(localeToTest)) {
        return localeToTest as (typeof locales)[number];
    }

    return null;
};
