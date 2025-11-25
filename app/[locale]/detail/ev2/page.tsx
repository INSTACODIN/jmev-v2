"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { type Locale, getTranslations } from "@/lib/i18n";

const colorOptions = [
  { name: "Blue", color: "bg-blue-600", image: "car-radio-1.png" },
  { name: "Cyan", color: "bg-cyan-500", image: "car-radio-2.png" },
  { name: "Green", color: "bg-green-500", image: "car-radio-3.png" },
  { name: "White", color: "bg-white border-2 border-gray-300", image: "car-radio-4.png" },
];

export default function EV2Detail({ params }: { params: Promise<{ locale: Locale }> }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const { locale } = React.use(params);
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/ev2/banner-0.png"
            alt="EV2 Hero"
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">{t.ev2.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              {t.ev2.subtitle}
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary hover:bg-gray-light transition-colors rounded-full font-medium">
                {t.common.viewConfiguration}
              </button>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors rounded-full font-medium">
                {t.common.watchVideo}
              </button>
            </div>
          </motion.div>
        </div>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80 z-10">
          * Specific parameters are subject to the actual vehicles.
        </p>
      </section>

      {/* Spacious and Versatile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              {t.ev2.spaciousVersatile}
            </h2>
            <p className="text-xl text-gray-medium mb-12">
              {t.ev2.spaciousVersatileDesc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="/images/ev2/section-a-1.png"
                    alt="2340mm Ultra-long Wheelbase"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  2340mm Ultra-long Wheelbase
                </h3>
                <p className="text-gray-medium">
                  Half a body longer than the ordinary A00 model, for extra fun.
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="/images/ev2/section-a-2.png"
                    alt="Up to 100°"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  Up to 100°
                </h3>
                <p className="text-gray-medium">
                  Extra large tail gate for easy access and storage capability.
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="/images/ev2/section-a-3.png"
                    alt="14 Storage Spaces"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  14 Storage Spaces
                </h3>
                <p className="text-gray-medium">
                  Exploration play.
                </p>
              </div>
            </div>
            
            <div className="relative w-full h-96">
              <Image
                src="/images/ev2/section-a-4.png"
                alt="Spacious and Versatile"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Banner Section 1 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/ev2/banner-1.jpg"
          alt="EV2 Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* Color Options */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl mb-12">
              <div className="relative w-full h-96">
                <Image
                  src={`/images/ev2/${colorOptions[selectedColor].image}`}
                  alt={`EV2 ${colorOptions[selectedColor].name}`}
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

      {/* Exquisite Appearance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              {t.ev2.exquisiteAppearance}
            </h2>
            <p className="text-xl text-gray-medium mb-12">
              {t.ev2.exquisiteAppearanceDesc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src="/images/ev2/section-b-1.png"
                    alt="Crescent-arc Double-arch Roof"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  Crescent-arc Double-arch Roof
                </h3>
                <p className="text-gray-medium">
                  Exquisite and flexible texture.
                </p>
              </div>
              <div>
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src="/images/ev2/section-b-2.png"
                    alt="14inch Aluminum Alloy Blade Wheels"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  14inch Aluminum Alloy Blade Wheels
                </h3>
                <p className="text-gray-medium">
                  Sporty feel and riding experience.
                </p>
              </div>
            </div>
            
            <div className="relative w-full h-96">
              <Image
                src="/images/ev2/section-b-4.png"
                alt="Exquisite Appearance"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Banner Section 2 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/ev2/banner-2.jpg"
          alt="EV2 Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* Smooth and Stable Driving Experience Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              {t.ev2.smoothStable}
            </h2>
            <p className="text-xl text-gray-medium mb-12">
              {t.ev2.smoothStableDesc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev2/section-c-1.png"
                  alt="Quick Start and Powerful Acceleration"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev2/section-c-2.png"
                  alt="Motor/Battery/Electric Control"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev2/section-c-3.png"
                  alt="World Class Motor & Battery"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev2/section-c-4.png"
                  alt="High Endurance"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="relative w-full h-96 mb-8">
              <Image
                src="/images/ev2/section-c-5.png"
                alt="Smooth and Stable Driving Experience"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  Quick Start and Powerful Acceleration
                </h3>
                <p className="text-gray-medium">
                  High-quality motor with the maximum torque of 84N·m, which is more powerful than most 1.2L naturally aspirated fuel vehicle.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  Motor/Battery/Electric Control & Triple Protection
                </h3>
                <p className="text-gray-medium">
                  Flat chassis, with high standard of dustproofing and waterproofing, to ensure the safety of motor/battery/electric control.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  World Class Motor & Battery
                </h3>
                <p className="text-gray-medium">
                  High quality permanent magnet synchronous motor, with the maximum power of 26KW; Sunwoda lithium iron phosphate battery, with well-known brand to ensure the safety of power appliances.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary/10 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.ev2.highEndurance}
              </h3>
              <p className="text-gray-medium">
                {t.ev2.highEnduranceDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Banner Section 3 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/ev2/banner-3.jpg"
          alt="EV2 Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* Five-star Safety Body Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              {t.ev2.fiveStarSafety}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src="/images/ev2/section-d-1.png"
                    alt="High-strength Steel-aluminum Hybrid Body"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  High-strength Steel-aluminum Hybrid Body
                </h3>
                <p className="text-gray-medium">
                  Lightweight and safe. The high-strength steel accounts for 46% of the body, which is rare in the same level of models.
                </p>
              </div>
              <div>
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src="/images/ev2/section-d-2.png"
                    alt="AC+DC Charging"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  AC+DC Charging
                </h3>
                <p className="text-gray-medium">
                  The AC charging and DC charging is changed by cutting, and the charging efficiency is increased by 50%.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev2/section-d-3.png"
                  alt="Sino-Euro Standards"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ev2/section-d-4.png"
                  alt="4.0 Energy Factory"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  Sino-Euro Standards, the world's Leading Level
                </h3>
                <p className="text-gray-medium">
                  75 years of Jiangling's car building history, to produce the unique joint-venture pure EV models at a level that can meet the Sino-Euro standards.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  4.0 Energy Factory
                </h3>
                <p className="text-gray-medium">
                  A new generation of intelligent energy factory, similar level to German automotive industry.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  Integrated Stamping Doors
                </h3>
                <p className="text-gray-medium">
                  Whole stamping process, to provide higher strength and meet the safety standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

