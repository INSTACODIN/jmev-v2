"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { type Locale, getTranslations } from "@/lib/i18n";

const colorOptions = [
  { name: "White", color: "bg-white border-2 border-gray-300", image: "/images/elight/car-radio-1.png" },
  { name: "Black", color: "bg-gray-900", image: "/images/elight/car-radio-2.png" },
  { name: "Purple", color: "bg-purple-600", image: "/images/elight/car-radio-3.png" },
  { name: "Green", color: "bg-green-500", image: "/images/elight/car-radio-4.png" },
  { name: "Blue", color: "bg-blue-600", image: "/images/elight/car-radio-5.png" },
];

export default function ELIGHTDetail({ params }: { params: Promise<{ locale: Locale }> }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [driveType, setDriveType] = useState<'right' | 'left'>('right');
  const { locale } = React.use(params);
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/elight/elight-banner.jpg"
            alt="ELIGHT Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white w-full max-w-4xl"
          >
            {/* Drive Type Selection */}
            <div className="flex gap-4 justify-center mb-6">
              <button
                onClick={() => setDriveType('right')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  driveType === 'right'
                    ? 'bg-white text-primary'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {t.elight.rightHandDrive}
              </button>
              <button
                onClick={() => setDriveType('left')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  driveType === 'left'
                    ? 'bg-white text-primary'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {t.elight.leftHandDrive}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center mb-6">
              <button className="px-8 py-3 bg-white text-primary hover:bg-gray-light transition-colors rounded-full font-medium">
                {t.elight.viewConfiguration}
              </button>
            </div>

            {/* Color Options */}
            <div className="flex gap-4 justify-center mb-4">
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-12 h-12 rounded-full ${color.color} transition-all ${
                    selectedColor === index ? "ring-4 ring-white ring-offset-2" : ""
                  }`}
                  aria-label={color.name}
                />
              ))}
            </div>

            {/* Watch Video Button */}
            <div className="flex justify-center mt-4">
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors rounded-full font-medium">
                {t.elight.watchVideo}
              </button>
            </div>
          </motion.div>
        </div>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80 z-10">
          * Specific parameters are subject to the actual vehicles.
        </p>
      </section>

      {/* Car Image Display Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl mb-12">
              <div className="relative w-full h-96">
                <Image
                  src={colorOptions[selectedColor].image}
                  alt={`ELIGHT ${colorOptions[selectedColor].name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METICULOUSLY DESIGNED Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6 text-center">
              {t.elight.meticulouslyDesigned}
            </h2>
            <p className="text-xl text-gray-medium mb-12 text-center leading-relaxed">
              {t.elight.meticulouslyDesignedDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Banner Section 1 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/elight/car-detail-elight-1.jpg"
          alt="ELIGHT Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* Features Section - Dazzling Silver-hook LED Headlamp */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/images/elight/section-a-1.png"
                  alt="Dazzling Silver-hook LED Headlamp"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-dark mb-4">
                  {t.elight.silverHookHeadlamp}
                </h3>
                <p className="text-lg text-gray-medium leading-relaxed">
                  {t.elight.silverHookHeadlampDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Smart Home Space */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-gray-dark mb-4">
                  {t.elight.smartHomeSpace}
                </h3>
                <p className="text-lg text-gray-medium leading-relaxed">
                  {t.elight.smartHomeSpaceDesc}
                </p>
              </div>
              <div className="relative w-full h-[500px] order-1 md:order-2">
                <Image
                  src="/images/elight/section-b-1.png"
                  alt="Smart Home Space"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Additional Smart Home Space Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="relative w-full h-64">
                <Image
                  src="/images/elight/section-b-2.png"
                  alt="Smart Home Space Feature 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/elight/section-b-3.png"
                  alt="Smart Home Space Feature 2"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/elight/section-b-1.png"
                  alt="Smart Home Space Feature 3"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - Multiple Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-light p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.elight.powerSeat}
              </h3>
              <p className="text-gray-medium">
                {t.elight.powerSeatDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-light p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.elight.thermalManagement}
              </h3>
              <p className="text-gray-medium">
                {t.elight.thermalManagementDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-light p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.elight.dualScreen}
              </h3>
              <p className="text-gray-medium">
                {t.elight.dualScreenDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-light p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.elight.powerSupply}
              </h3>
              <p className="text-gray-medium">
                {t.elight.powerSupplyDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-light p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.elight.ota}
              </h3>
              <p className="text-gray-medium">
                {t.elight.otaDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-light p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.elight.bodyStructure}
              </h3>
              <p className="text-gray-medium">
                {t.elight.bodyStructureDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-light p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {t.elight.suspension}
              </h3>
              <p className="text-gray-medium">
                {t.elight.suspensionDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Section 2 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/elight/car-detail-elight-2.jpg"
          alt="ELIGHT Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* 3 Driving Modes Section */}
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
              {t.elight.drivingModes}
            </h2>
            <p className="text-xl text-gray-medium mb-8 text-center">
              Three driving modes deal with the challenges of all road conditions in real time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-light p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.economicMode}
                </h3>
                <p className="text-gray-medium">
                  {t.elight.economicModeDesc}
                </p>
              </div>
              <div className="bg-gray-light p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.standardMode}
                </h3>
                <p className="text-gray-medium">
                  {t.elight.standardModeDesc}
                </p>
              </div>
              <div className="bg-gray-light p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.motionMode}
                </h3>
                <p className="text-gray-medium">
                  {t.elight.motionModeDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section 3 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/elight/mobile-detail-elight-vbj-1.jpg"
          alt="ELIGHT Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* Safety Section - METICULOUSLY DESIGNED */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-8 text-center">
              {t.elight.safetyTitle}
            </h2>
            <p className="text-xl text-gray-medium mb-12 text-center">
              Build a multi-dimensional security guarantee of cares and experiences with strong internal achievements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.qualityManagement}
                </h3>
                <p className="text-gray-medium">
                  {t.elight.qualityManagementDesc}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.sinoEuroStandards}
                </h3>
                <p className="text-gray-medium">
                  {t.elight.sinoEuroStandardsDesc}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.fiveSecurityGuarantees}
                </h3>
                <p className="text-gray-medium">
                  Thermoformed steel-aluminum hybrid body structure, comprehensive airbag protection, EHB/WCBS line control brake system, AIDS function, exclusive battery doctor and battery pack, and other functions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.batteryProtection}
                </h3>
                <p className="text-gray-medium">
                  {t.elight.batteryProtectionDesc}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {t.elight.batteryProduction}
                </h3>
                <p className="text-gray-medium">
                  {t.elight.batteryProductionDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section 4 */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/elight/last-banner-img.jpg"
          alt="ELIGHT Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* From Design to Production Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              {t.elight.designToProduction}
            </h2>
            <p className="text-xl text-gray-medium">
              {t.elight.designToProductionDesc}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
