"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Locale, getTranslations } from "@/lib/i18n";

interface ImageSlide {
  id: number;
  image: string;
  link?: string;
  title?: string;
}

interface CarouselProps {
  locale: Locale;
}

export default function Carousel({ locale }: CarouselProps) {
  const t = getTranslations(locale);
  
  const slides: ImageSlide[] = [
    {
      id: 1,
      image: "/images/carousel/banner-ev3.jpg",
      link: `/${locale}/detail/ev3`,
      title: "EV3",
    },
    {
      id: 2,
      image: "/images/carousel/banner-ewind.jpg",
      link: `/${locale}/detail/ewind`,
      title: "EWIND",
    },
    {
      id: 3,
      image: "/images/carousel/banner-ev2.jpg",
      link: `/${locale}/detail/ev2`,
      title: "EV2",
    },
  ];
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
              <div className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 z-10 px-4 w-full max-w-xs md:max-w-none md:w-auto">
                <Link
                  href={slide.link}
                  className="group/btn relative inline-flex items-center justify-center gap-2.5 px-5 md:px-6 py-3 md:py-3.5 bg-white/95 backdrop-blur-md text-primary hover:bg-white transition-all duration-500 rounded-full font-semibold text-base md:text-lg lg:text-xl shadow-2xl hover:shadow-primary/30 border border-white/30 hover:border-primary/40 overflow-hidden hover:scale-105 active:scale-100"
                >
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    {slide.title ? `${t.carousel.view} ${slide.title}` : t.common.learnMore}
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

