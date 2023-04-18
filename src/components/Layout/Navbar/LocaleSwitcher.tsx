'use client';

import { i18nConfig } from '@/config/i18nConfig';
import useGetCurrentLocale from '@/hooks/useGetCurrentLocale';
import { commutersSans } from '@/lib/fontLoader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    const { locales } = i18nConfig;
    const activeLocale = useGetCurrentLocale();

    return (
        <ul className="flex  flex-row gap-2">
            {locales.map((locale) => {
                return (
                    <li key={locale}>
                        <Link
                            className={`${
                                commutersSans.variable
                            } flex font-commutersSans font-extralight uppercase transition  ${
                                activeLocale === locale ? 'underline' : 'hover:underline'
                            }`}
                            href={redirectedPathName(locale)}
                        >
                            {locale}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
