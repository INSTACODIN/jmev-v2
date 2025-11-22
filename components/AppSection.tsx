"use client";

import { motion } from "framer-motion";

export default function AppSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              JMEV New Energy APP
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download now for a more convenient and intelligent vehicle experience
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-center mb-4">
                  <p className="text-sm mb-2">Scan QR Code to Download App / Scannez le code QR pour télécharger l&apos;application</p>
                  <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mx-auto">
                    <div className="text-gray-dark text-sm text-center p-4">
                      <div className="w-32 h-32 border-2 border-gray-medium border-dashed rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <span className="text-xs">QR Code</span>
                      </div>
                      <p className="text-xs">Scan to download</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-96 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-sm opacity-90">JMEV App</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
