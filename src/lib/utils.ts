import { ClassValue, clsx } from 'clsx';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

    return `${pathname}${queryString}`;
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
