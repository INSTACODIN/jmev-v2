"use client";

import { motion } from "framer-motion";
import React from "react";
import { type Locale, getTranslations, isValidLocale, defaultLocale } from "@/lib/i18n";

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = React.use(params);
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const t = getTranslations(locale);
  
  const contactInfo = [
    {
      title: locale === 'fr' ? 'Email' : 'Email',
      content: "info@jmev.com",
      link: "mailto:info@jmev.com",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: locale === 'fr' ? 'Téléphone' : 'Phone',
      content: "+1 (234) 567-8900",
      link: "tel:+12345678900",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: locale === 'fr' ? 'Adresse' : 'Address',
      content: "MA Enterprise LTD.",
      link: null,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-light to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              {t.nav.contactUs}
            </h1>
            <p className="text-lg text-gray-medium leading-relaxed">
              {locale === 'fr'
                ? 'Contactez-nous pour toute question ou demande d\'information.'
                : 'Get in touch with us for any questions or information requests.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-gray-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center ${
                  item.link ? 'hover:scale-105 transition-transform cursor-pointer' : ''
                }`}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    className="block group"
                  >
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-medium text-lg group-hover:text-primary transition-colors">
                      {item.content}
                    </p>
                  </a>
                ) : (
                  <>
                    <div className="text-primary mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-medium text-lg">
                      {item.content}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

