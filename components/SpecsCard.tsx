"use client";

import { motion } from "framer-motion";

interface SpecsCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function SpecsCard({ value, label, delay = 0 }: SpecsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-gray-medium">{label}</div>
    </motion.div>
  );
}

