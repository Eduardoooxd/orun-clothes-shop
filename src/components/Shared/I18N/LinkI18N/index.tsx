'use client';

import { includesLocale } from '@/config/i18nConfig';
import useGetCurrentLocale from '@/hooks/useGetCurrentLocale';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface LinkI18NProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    onClick?: () => void;
}

const LinkI18N: FunctionComponent<LinkI18NProps> = ({
    children,
    href,
    className,
    onClick,
}: LinkI18NProps) => {
    const currentLocale = useGetCurrentLocale();

    const redirectedWithLocale = (url: string) => {
        const [localeToTest] = url.split('/').filter(Boolean);

        if (includesLocale(localeToTest)) {
            return url;
        }

        return `/${currentLocale}/${url}`;
    };

    return (
        <Link className={className} onClick={onClick} href={redirectedWithLocale(href)}>
            {children}
        </Link>
    );
};

export default LinkI18N;
