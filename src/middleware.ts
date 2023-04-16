import { i18nConfig } from '@/config/i18nConfig';
import { match } from '@formatjs/intl-localematcher';
import { parse } from 'accept-language-parser';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { locales } = i18nConfig;

    const pathName = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const localeToRedirect = getLocale(request);

        return NextResponse.redirect(new URL(`/${localeToRedirect}/${pathName}`, request.url));
    }

    return NextResponse.next();
}

const getLocale = (request: NextRequest) => {
    const { locales, defaultLocale } = i18nConfig;
    const acceptLanguage = request.headers.get('Accept-Language') || '';

    const requestedLanguages = parse(acceptLanguage).map((lang) => {
        const { code, region } = lang;
        if (region) {
            return `${code}-${region}`;
        }
        return code;
    });

    return match(requestedLanguages, locales, defaultLocale);
};

// Stop Middleware running on static files
export const config = { matcher: '/((?!_next/image|_next/static|favicon.ico).*)' };
