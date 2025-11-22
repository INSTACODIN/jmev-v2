"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SpecsCard from "./SpecsCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-light to-white overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 to-accent/10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Specifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark mb-6"
            >
              Introducing the JMEV EV3: The Future of Electric Mobility
            </motion.h1>

            {/* Specifications Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 my-12">
              <SpecsCard value="550 km" label="CLTC JMEV" delay={0.3} />
              <SpecsCard value="5.8 s" label="CLTC JMEV" delay={0.4} />
              <SpecsCard value="L2.5" label="mileage" delay={0.5} />
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="https://en.jmev.com/configuration/?id=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-white hover:bg-primary-dark transition-colors rounded-full font-medium text-center"
              >
                View Configuration
              </Link>
              <Link
                href="#watch-video"
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full font-medium text-center"
              >
                Watch the Video
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Car Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚗</div>
                <p className="text-gray-medium">Car Image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

