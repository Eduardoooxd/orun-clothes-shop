import { i18nConfig, Locale } from '@/config/i18nConfig';
import { Dictionary } from '@/dictionaries/dictionaries';
import { dictionary as en } from '@/dictionaries/en';
import { dictionary as pt } from '@/dictionaries/pt';
import 'server-only';

const dictionaries = {
    en,
    pt,
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    const { defaultLocale } = i18nConfig;

    if (!(locale in dictionaries)) {
        return dictionaries[defaultLocale];
    }

    return dictionaries[locale];
};
