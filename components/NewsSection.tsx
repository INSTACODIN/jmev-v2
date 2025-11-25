"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function NewsSection({ locale }: { locale?: string }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">
            {locale === 'fr' ? 'Actualités' : 'News'}
          </h2>
          <Link
            href={locale ? `/${locale}/news` : "/news"}
            className="text-primary hover:text-primary-dark transition-colors font-medium"
          >
            {locale === 'fr' ? 'Plus →' : 'More →'}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-2"
          >
            <Link href={locale ? `/${locale}${newsItems[0].link}` : newsItems[0].link} className="block group">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm mb-2">{newsItems[0].date}</p>
                  <h3 className="text-xl font-semibold line-clamp-2">
                    {newsItems[0].title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other News Items */}
          <div className="space-y-4">
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Link href={locale ? `/${locale}${item.link}` : item.link} className="block group">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-medium mb-1">{item.date}</p>
                      <h4 className="text-base font-medium text-gray-dark line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
