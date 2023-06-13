import { includesLocale } from '@/config/i18nConfig';
import { ClassValue, clsx } from 'clsx';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const redirectedWithLocale = (url: string, currentLocale: string | null) => {
    const [localeToTest] = url.split('/').filter(Boolean);

    if (includesLocale(localeToTest)) {
        return url;
    }

    return `/${currentLocale}/${url}`;
};

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

    return `${pathname}${queryString}`;
};

export const isDevEnv = (): boolean => {
    return process.env.NODE_ENV === 'development';
};

export const createApiUrl = (relativePath: string): string => {
    return `${createRootUrl()}${relativePath}`;
};

export const createRootUrl = (): string => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    }
    return process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
};

export function formatErrorMessage(err: Error): string {
    return JSON.stringify(err, Object.getOwnPropertyNames(err));
}

export const timeout = (delay: number): Promise<void> => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, delay);
    });
};
