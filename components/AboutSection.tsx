"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
            JMEV Group New Energy
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto mb-4">
            JMEV Group New Energy Vehicles builds energy factories to help develop China&apos;s new energy vehicle industry
          </p>
          <p className="text-lg text-gray-medium max-w-3xl mx-auto">
            JMEV Group New Energy Vehicles was established in 2015 in Nanchang, Jiangxi. Within two years of its establishment, it was the first to obtain dual qualifications for new energy vehicle manufacturing. Since its inception, cumulative sales of electric vehicles have exceeded 100,000 units.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
