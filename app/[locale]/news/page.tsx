"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { type Locale, getTranslations } from "@/lib/i18n";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Setting Sail! JMEV EWIND Opens a New Chapter in Globalization",
    date: "2025-11-03",
    image: "/images/news/news1.jpg",
    link: "/detail/newsDetail/?id=175880",
  },
  {
    id: "2",
    title: "Latest Updates from JMEV New Energy",
    date: "2025-10-28",
    image: "/images/news/news2.jpg",
    link: "/detail/newsDetail/?id=174798",
  },
  {
    id: "3",
    title: "JMEV New Energy Technology Breakthrough",
    date: "2025-10-15",
    image: "/images/news/news3.jpg",
    link: "/detail/newsDetail/?id=174463",
  },
];

export default function NewsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = React.use(params);
  const t = getTranslations(locale);
  
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              {locale === 'fr' ? 'Actualités' : 'News'}
            </h1>
            <p className="text-xl text-gray-medium">
              {locale === 'fr' 
                ? 'Découvrez les dernières actualités et mises à jour de JMEV'
                : 'Discover the latest news and updates from JMEV'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={item.link} className="block group">
                  <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-medium mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold text-gray-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-primary font-medium">
                      {locale === 'fr' ? 'Lire la suite →' : 'Read more →'}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

