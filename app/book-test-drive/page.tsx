"use client";

import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

export default function BookTestDrive() {
  return (
    <div className="min-h-screen bg-white">
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
              Book Test Drive / Réserver un essai
            </h1>
            <p className="text-lg text-gray-medium leading-relaxed">
              Experience the charm of future electric mobility. Book your test drive now and feel the exceptional performance of JMEV electric vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book-test-drive" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}

