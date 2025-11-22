"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageSlide {
  id: number;
  image: string;
  link?: string;
}

const slides: ImageSlide[] = [
  {
    id: 1,
    image: "/images/carousel/car1.jpg",
    link: "/detail/ewind",
  },
  {
    id: 2,
    image: "/images/carousel/car2.jpg",
    link: "/detail/elight",
  },
  {
    id: 3,
    image: "/images/carousel/car3.jpg",
    link: "/detail/ev3",
  },
  {
    id: 4,
    image: "/images/carousel/car4.jpg",
    link: "/detail/ev2",
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
            className="relative w-full h-screen"
          >
            {slide.link ? (
              <Link href={slide.link} className="block w-full h-full">
                <Image
                  src={slide.image}
                  alt={`Car ${slide.id}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </Link>
            ) : (
              <Image
                src={slide.image}
                alt={`Car ${slide.id}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

