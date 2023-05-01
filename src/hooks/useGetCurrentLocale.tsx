import { getLocale, i18nConfig, includesLocale } from '@/config/i18nConfig';
import { usePathname } from 'next/navigation';

const useGetCurrentLocale = () => {
    const pathName = usePathname();
    const { defaultLocale } = i18nConfig;

    if (!pathName) {
        return defaultLocale;
    }

    const currentLocale = pathName.split('/')[1];

    if (includesLocale(currentLocale)) {
        return getLocale(currentLocale);
    }

    return defaultLocale;
};

export default useGetCurrentLocale;
