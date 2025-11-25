"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { type Locale, isValidLocale } from "@/lib/i18n";

export default function LocaleHtml({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Extract locale from pathname
    const pathSegments = pathname.split("/").filter(Boolean);
    const pathLocale = pathSegments[0];
    const currentLocale = isValidLocale(pathLocale) ? pathLocale : locale;
    
    // Set lang attribute on html element
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLocale;
    }
  }, [pathname, locale]);
  
  return null;
}

