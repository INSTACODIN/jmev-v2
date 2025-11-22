"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageSlide {
  id: number;
  image: string;
  link?: string;
  title?: string;
}

const slides: ImageSlide[] = [
  {
    id: 1,
    image: "/images/carousel/car1.jpg",
    link: "/detail/ewind",
    title: "EWIND",
  },
  {
    id: 2,
    image: "/images/carousel/car2.jpg",
    link: "/detail/elight",
    title: "ELIGHT",
  },
  {
    id: 3,
    image: "/images/carousel/car3.jpg",
    link: "/detail/ev3",
    title: "EV3",
  },
  {
    id: 4,
    image: "/images/carousel/car4.jpg",
    link: "/detail/ev2",
    title: "EV2",
  },
];

export default function Carousel() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative w-full h-screen group"
          >
            <Image
              src={slide.image}
              alt={`Car ${slide.id}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {slide.link && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Link
                  href={slide.link}
                  className="px-8 py-4 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full font-bold text-xl md:text-2xl shadow-lg transform group-hover:scale-105"
                >
                  {slide.title ? `View ${slide.title}` : "Learn More"}
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

