"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import React from "react";
import { type Locale, getTranslations } from "@/lib/i18n";

export default function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = React.use(params);
  const t = getTranslations(locale);
  
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
                ? 'Des questions ? Nous sommes là pour vous aider. Contactez-nous et nous répondrons dans les plus brefs délais.'
                : 'Have questions? We\'re here to help. Get in touch with us and we\'ll respond as soon as possible.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: locale === 'fr' ? 'Email' : 'Email',
                content: "info@jmev.com",
                icon: "📧",
              },
              {
                title: locale === 'fr' ? 'Téléphone' : 'Phone',
                content: "+1 (234) 567-8900",
                icon: "📞",
              },
              {
                title: locale === 'fr' ? 'Adresse' : 'Address',
                content: "MA Enterprise LTD.",
                icon: "📍",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-medium">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

