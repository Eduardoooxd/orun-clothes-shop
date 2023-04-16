import { i18nConfig } from '@/config/i18nConfig';
import { usePathname } from 'next/navigation';

const useGetCurrentLocale = () => {
    const pathName = usePathname();
    const { defaultLocale } = i18nConfig;

    if (!pathName) {
        return defaultLocale;
    }

    return pathName?.split('/')[1];
};

export default useGetCurrentLocale;
