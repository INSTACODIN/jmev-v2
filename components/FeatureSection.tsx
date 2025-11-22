"use client";

import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Dazzling Silver-hook LED Headlamp",
    description:
      "In addition to the dazzling silver-hook head-lamp, an upgraded design of adaptive high and low beam lamps brings more flexible and intelligent eyes, and the light will accompany 130m forward.",
    icon: "💡",
  },
  {
    title: "Concealed Electric Door Handle",
    description:
      "The hidden assistant is integrated with the vehicle body and the unlocking handle of the vehicle automatically pops up to bring you a full sense of ceremony.",
    icon: "🚪",
  },
  {
    title: "Michelin Haoyue 4 Mute Tire",
    description:
      "The aluminum alloy hub is equipped with Michelin Haoyue 4 high-performance tires for excellent silence, comfort and grip, and multiple sporty shape.",
    icon: "🛞",
  },
  {
    title: "Smart Home Space",
    description:
      "The super large driving space of the same level expands the space utilization imagination. Inspiration technology always puts people first to enjoy a comfortable intelligent cockpit.",
    icon: "🏠",
  },
  {
    title: "8-way Power Seat",
    description:
      "The driver's seat is electrically adjustable in 8 directions and the driver can switch the comfortable driving and riding spaces at will to meet the space needs of the driver and passengers for free and pleasant travel.",
    icon: "🪑",
  },
  {
    title: "Intelligent Thermal Management System",
    description:
      "Use the first waste heat A/C system for EV in China to effectively improve the energy consumption index and increase the endurance mileage by 30% compared with of ordinary RTC heating A/C (heat pump A/C optional).",
    icon: "🌡️",
  },
  {
    title: "Dual Screen",
    description:
      "10.25\"+12.3\" panoramic HD dual screen star-eye flashes for panoramic view, enjoy technological inspiration of linkage support for gesture control of IVI.",
    icon: "📱",
  },
  {
    title: "Dedicated Power Supply for All Appliances",
    description:
      "Power transformation, to allow for the safe and seamless connection of \"car-to-car\" and \"car-to-appliance\".",
    icon: "🔌",
  },
  {
    title: "On-board OTA (Over-The-Air Technology)",
    description:
      "20+ OTAs on vehicles, to allow for the upgrade of the vehicle systems.",
    icon: "🔄",
  },
  {
    title: "Thermoformed Steel-aluminum Hybrid High-strength Light-weight Body",
    description:
      "The hot forming steel-aluminum high-strength light-weight BIW, using 44 pieces of hot forming steel plates, which strength up 1,500MPa, to build a high-strength cage frame.",
    icon: "🛡️",
  },
  {
    title: "Four-wheel Independent Suspension for Comfortable Riding Experience",
    description:
      "Front McPherson & rear multi-link independent suspension design for comfortable and smooth driving experience.",
    icon: "⚙️",
  },
  {
    title: "3 Driving Modes",
    description:
      "Three driving modes deal with the challenges of all road conditions in real time: Economic Mode, Standard Mode, and Motion Mode.",
    icon: "🚦",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            HERO YOURSELF
          </h2>
          <p className="text-lg text-gray-medium max-w-3xl mx-auto">
            Apply the ecological power art aesthetics, like a cheetah running
            freely in the wind. Sharp but vivid lines, hale but agile styling
            showed under different lights and shadows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

