"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { type Locale, getTranslations, isValidLocale, defaultLocale } from "@/lib/i18n";

export default function EWINDDetail({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = React.use(params);
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const t = getTranslations(locale);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/carousel/car1.jpg"
            alt="EWIND Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                {t.common.comingSoon}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">{t.ewind.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t.ewind.subtitle}
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                disabled
                className="px-8 py-3 bg-white/50 text-white cursor-not-allowed rounded-full font-medium opacity-75"
              >
                {t.common.viewConfiguration}
              </button>
              <button 
                disabled
                className="px-8 py-3 border-2 border-white/50 text-white cursor-not-allowed rounded-full font-medium opacity-75"
              >
                {t.common.watchVideo}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Info Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              {t.ewind.comingSoonTitle}
            </h2>
            <p className="text-xl text-gray-medium mb-8">
              {t.ewind.comingSoonDesc}
            </p>
            <p className="text-lg text-gray-medium mb-12">
              {locale === 'fr' 
                ? 'Inscrivez-vous pour être notifié lorsque l\'EWIND sera disponible. Soyez parmi les premiers à découvrir l\'avenir de la mobilité électrique.'
                : 'Sign up to be notified when the EWIND becomes available. Be among the first to experience the future of electric mobility.'}
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.ewind.stayUpdated}
              </h3>
              <p className="text-gray-medium mb-6">
                {locale === 'fr'
                  ? 'Soyez notifié dès que l\'EWIND sera disponible pour la précommande.'
                  : 'Get notified as soon as the EWIND is available for pre-order.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={locale === 'fr' ? 'Entrez votre email' : 'Enter your email'}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
                  {t.ewind.notifyMe}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-12 text-center">
              {t.ewind.whatToExpect}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2">
                  {t.ewind.advancedTechnology}
                </h3>
                <p className="text-gray-medium">
                  {t.ewind.advancedTechnologyDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2">
                  {t.ewind.ecoFriendly}
                </h3>
                <p className="text-gray-medium">
                  {t.ewind.ecoFriendlyDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2">
                  {t.ewind.premiumQuality}
                </h3>
                <p className="text-gray-medium">
                  {t.ewind.premiumQualityDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

