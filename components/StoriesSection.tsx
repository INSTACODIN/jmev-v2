"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Story {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  number: string;
}

const stories: Story[] = [
  {
    id: "1",
    title: "YiChi 05 Owner Story #20-Year Veteran Driver Found 'Life's Answer'",
    subtitle: "JMEV New Energy",
    image: "/images/stories/story1.jpg",
    link: "/detail/postDetail/?id=173442",
    number: "1",
  },
  {
    id: "2",
    title: "Portrait | 70s Generation's Exclusive Romance, Thankful for 20 Years Together",
    subtitle: "JMEV New Energy",
    image: "/images/stories/story2.jpg",
    link: "/detail/postDetail/?id=43582",
    number: "2",
  },
  {
    id: "3",
    title: "JMEV Family | An Extraordinary 'Frozen Adventure'",
    subtitle: "JMEV New Energy",
    image: "/images/stories/story3.jpg",
    link: "/detail/postDetail/?id=43580",
    number: "3",
  },
];

export default function StoriesSection({ locale }: { locale?: string }) {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Owner Stories / Histoires des propriétaires</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={story.link} className="block group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-accent/20">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {story.number}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="px-2">
                  <p className="text-sm text-primary mb-2">{story.subtitle}</p>
                  <h3 className="text-lg font-semibold text-gray-dark line-clamp-2 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
