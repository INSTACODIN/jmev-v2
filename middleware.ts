import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname doesn't have a locale, redirect to default locale
  if (!pathnameHasLocale) {
    const locale = defaultLocale;
    
    // Get the pathname without leading slash
    const pathnameWithoutLocale = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    
    // Redirect to /fr/... or /en/...
    return NextResponse.redirect(
      new URL(`/${locale}/${pathnameWithoutLocale}`, request.url)
    );
  }

  // Extract locale from pathname
  const pathnameSegments = pathname.split('/').filter(Boolean);
  const locale = pathnameSegments[0];

  // Validate locale
  if (!isValidLocale(locale)) {
    // If invalid locale, redirect to default locale
    const pathnameWithoutLocale = pathnameSegments.slice(1).join('/');
    return NextResponse.redirect(
      new URL(`/${defaultLocale}/${pathnameWithoutLocale}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except:
    // - api routes
    // - _next (Next.js internals)
    // - static files (images, etc.)
    '/((?!api|_next|.*\\..*).*)',
  ],
};

