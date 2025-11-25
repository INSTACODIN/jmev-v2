"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, locales } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  // Remove current locale from pathname and clean up any undefined segments
  let pathnameWithoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/';
  // Remove any undefined segments
  pathnameWithoutLocale = pathnameWithoutLocale.replace(/\/undefined/g, '');
  
  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale}`}
          className={`px-3 py-1 rounded transition-colors font-medium ${
            currentLocale === locale
              ? "bg-primary text-white"
              : "text-white hover:text-primary"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

