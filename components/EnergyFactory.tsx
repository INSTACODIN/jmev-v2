"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EnergyFactory() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/energy-factory.jpg"
              alt="Energy Factory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
              Energy Factory / Usine d&apos;énergie
            </h2>
            <p className="text-lg text-gray-medium mb-8 leading-relaxed">
              JMEV Group New Energy Vehicles builds energy factories to help develop China&apos;s new energy vehicle industry. Through innovative technology and sustainable development concepts, we are creating a new chapter for future mobility.
            </p>
            <Link
              href="#watch-video"
              className="inline-block px-8 py-3 bg-primary text-white hover:bg-primary-dark transition-colors rounded-full font-medium"
            >
              Watch Full Video / Voir la vidéo complète
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
