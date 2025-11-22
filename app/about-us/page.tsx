"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
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
              About JMEV
            </h1>
            <p className="text-lg text-gray-medium leading-relaxed">
              Leading the electric vehicle revolution with innovation, quality, and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                Jiangling Group New Energy
              </h2>
              <p className="text-lg text-gray-medium mb-4 leading-relaxed">
                Jiangling Group New Energy Vehicles was established in 2015 in Nanchang, Jiangxi. 
                Within two years of its establishment, it was the first to obtain the dual qualifications 
                for new energy vehicle manufacturing.
              </p>
              <p className="text-lg text-gray-medium mb-4 leading-relaxed">
                Since its inception, the cumulative sales of electric vehicles have exceeded 100,000 units. 
                We are committed to building an energy factory to help the development of China&apos;s 
                new energy vehicle industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-light rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Energy Factory</h3>
                <p className="text-gray-medium">
                  Building the future of sustainable transportation through innovation and excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Quality & Safety Standards
            </h2>
            <p className="text-lg text-gray-medium max-w-3xl mx-auto">
              We adhere to the highest international standards to ensure quality and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Nissan-Mitsubishi Alliance Quality System",
                description:
                  "ASES and AVES quality assurance system integrates world-class quality control systems and production technologies.",
                icon: "⭐",
              },
              {
                title: "Sino-Euro Standards",
                description:
                  "The first EV model jointly built according to Sino-Euro standards and passed European vehicle safety standards acceptance.",
                icon: "🌍",
              },
              {
                title: "E-NCAP Certification",
                description:
                  "Completed EU homologation and regulation certification, winning four stars in E-NCAP test with five-star level in active safety, occupant and pedestrian protection.",
                icon: "🛡️",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              5 Major Security Guarantees
            </h2>
            <p className="text-lg text-gray-medium max-w-3xl mx-auto">
              Comprehensive safety features for your peace of mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Thermoformed steel-aluminum hybrid body structure",
              "All-round 10 airbags",
              "EHB/WCBS line control brake system",
              "AIDS function",
              "Exclusive battery doctor and battery pack",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-gray-light p-6 rounded-xl text-center"
              >
                <div className="text-3xl mb-3">✓</div>
                <p className="text-gray-dark font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

