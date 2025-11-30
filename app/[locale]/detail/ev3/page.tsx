"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { type Locale, getTranslations, isValidLocale, defaultLocale } from "@/lib/i18n";

const colorOptions = [
  { name: "Blue", color: "bg-blue-600", image: "car-radio-1.png" },
  { name: "Cyan", color: "bg-cyan-500", image: "car-radio-2.png" },
  { name: "Green", color: "bg-green-500", image: "car-radio-3.png" },
  { name: "White", color: "bg-white border-2 border-gray-300", image: "car-radio-4.png" },
];

export default function EV3Detail({ params }: { params: Promise<{ locale: string }> }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const { locale: localeParam } = React.use(params);
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/ev3/banner-1.png"
            alt="EV3 Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">{t.ev3.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              {t.ev3.subtitle}
            </p>
          </motion.div>
        </div>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80 z-10">
          * Specific parameters are subject to the actual vehicles.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative w-full h-96 mb-12">
              <Image
                src="/images/ev3/introduce.jpg"
                alt="EV3 Introduction"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl mb-12">
              <div className="relative w-full h-96">
                <Image
                  src={`/images/ev3/${colorOptions[selectedColor].image}`}
                  alt={`EV3 ${colorOptions[selectedColor].name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-16 h-16 rounded-full ${color.color} transition-all ${
                    selectedColor === index ? "ring-4 ring-primary ring-offset-2" : ""
                  }`}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
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
              {t.ev3.configuration}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev3/configure-1.png"
                  alt="Configuration 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev3/configure-2.png"
                  alt="Configuration 2"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev3/configure-3.png"
                  alt="Configuration 3"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section 2 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/ev3/banner-2.png"
          alt="EV3 Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* Car Type Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-12 text-center">
              {t.ev3.carType}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev3/cartype-cover1.png"
                  alt="Car Type 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev3/cartype-cover2.png"
                  alt="Car Type 2"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev3/cartype-cover3.png"
                  alt="Car Type 3"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev3/cartype-cover4.png"
                  alt="Car Type 4"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section 3 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/ev3/banner-3.png"
          alt="EV3 AI Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* AI Section */}
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
              {t.ev3.intelligentFeatures}
            </h2>
            
            <div className="relative w-full h-96 mb-8">
              <Image
                src="/images/ev3/ai-cover1.png"
                alt="AI Features"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

