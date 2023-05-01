import { i18nConfig } from '@/config/i18nConfig';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { locales } = i18nConfig;

    let pathName = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const localeToRedirect = getLocale(request);

        locales.forEach((locale) => {
            pathName = pathName.replace(`/${locale}/`, '/');
        });

        return NextResponse.redirect(new URL(`/${localeToRedirect}/${pathName}`, request.url));
    }
}

const getLocale = (request: NextRequest) => {
    const { locales, defaultLocale } = i18nConfig;
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const requestedLanguages = new Negotiator({ headers: negotiatorHeaders }).languages();
    // @ts-ignore locales are readonly
    const appLocales: string[] = locales;
    return matchLocale(requestedLanguages, appLocales, defaultLocale);
};

// Stop Middleware running on static files
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
