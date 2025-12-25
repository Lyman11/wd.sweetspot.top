import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "ja", "zh"];
const defaultLocale = "ja";

function getLocale(request: NextRequest): string {
    // 1. Check for Country headers (Vercel / Cloudflare)
    const country = request.headers.get('x-vercel-ip-country') ||
        request.headers.get('cf-ipcountry');

    if (country) {
        if (country === 'CN') return 'zh';
        if (country === 'JP') return 'ja';
        // For all other countries, default to English as the international language
        return 'en';
    }

    // 2. Fallback: Check Accept-Language header
    const headers = { "accept-language": request.headers.get("accept-language") || "" };
    const languages = new Negotiator({ headers }).languages();

    try {
        return match(languages, locales, defaultLocale);
    } catch (e) {
        return defaultLocale;
    }
}

export default function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;

    // Skip public files (images, standard icons)
    if (
        pathname.startsWith('/images/') ||
        pathname.startsWith('/logo.png') ||
        pathname.startsWith('/next.svg') ||
        pathname.startsWith('/vercel.svg')
    ) {
        return;
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    // Preserve query parameters
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip internal paths and specific files
        '/((?!_next|api|favicon.ico).*)',
    ],
};
