export const i18nConfig = {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
