import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleHtml from "@/components/LocaleHtml";
import { getTranslations, type Locale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmev.com';
  
  return {
    title: locale === 'fr' 
      ? "JMEV - Véhicules Électriques" 
      : "JMEV - Electric Vehicles",
    description: locale === 'fr'
      ? "Découvrez les véhicules électriques JMEV. EV3, ELIGHT et bientôt EWIND."
      : "Discover JMEV electric vehicles. EV3, ELIGHT and coming soon EWIND.",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'fr': `${baseUrl}/fr`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/fr`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <LocaleHtml locale={locale} />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}

