"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Color {
  name: string;
  value: string;
  hex: string;
}

const colors: Color[] = [
  { name: "Aurora White", value: "white", hex: "#FFFFFF" },
  { name: "Future Cyan", value: "cyan", hex: "#00D4FF" },
  { name: "Knight Grey", value: "grey", hex: "#4A4A4A" },
  { name: "Marble Black", value: "black", hex: "#1A1A1A" },
];

export default function ColorOptions() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Condensing light into shape, new Chinese avant-garde aesthetics
          </h2>
          <p className="text-lg text-gray-medium">
            Sharp lines without losing vividness, hard edges without losing agility
          </p>
        </motion.div>

        {/* Car Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <div
            className="w-full max-w-2xl aspect-video rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: selectedColor.hex,
              border: `4px solid ${selectedColor.hex === "#FFFFFF" ? "#E5E5E5" : selectedColor.hex}`,
            }}
          >
            <div className="text-center">
              <div className="text-8xl mb-4">🚗</div>
              <p className="text-white text-xl font-semibold drop-shadow-lg">
                {selectedColor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Color Swatches */}
        <div className="flex flex-wrap justify-center gap-6">
          {colors.map((color, index) => (
            <motion.button
              key={color.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => setSelectedColor(color)}
              className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all ${
                selectedColor.value === color.value
                  ? "bg-gray-light ring-2 ring-primary"
                  : "hover:bg-gray-light"
              }`}
            >
              <div
                className="w-16 h-16 rounded-full border-2 border-gray-medium shadow-md transition-transform hover:scale-110"
                style={{ backgroundColor: color.hex }}
              />
              <span
                className={`text-sm font-medium ${
                  selectedColor.value === color.value
                    ? "text-primary"
                    : "text-gray-dark"
                }`}
              >
                {color.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

