"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale, getTranslations } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = getTranslations(locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Also check on mount for pages that start scrolled
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on a page with white background (contact, about, news)
  const isWhitePage = pathname?.includes('/contact') || pathname?.includes('/about') || pathname?.includes('/news');
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
        isScrolled || isWhitePage
          ? "bg-black/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <img
              src="/images/logo.png"
              alt="JMEV Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <span
              className={`text-2xl font-bold transition-colors duration-1000 ease-in-out hidden ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              JMEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href={`/${locale}/detail/ev3`}
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              {t.nav.ev3}
            </Link>
            <Link
              href={`/${locale}/detail/elight`}
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              {t.nav.elight}
            </Link>
            <div className="flex items-center gap-2">
              <span
                className={`transition-colors font-medium duration-1000 ease-in-out ${
                  isScrolled ? "text-white/60" : "text-white/60"
              }`}
            >
                {t.nav.ewind}
              </span>
              <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">
                {t.nav.comingSoon}
              </span>
            </div>
            <Link
              href={`/${locale}/contact`}
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              {t.nav.contactUs}
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-1000 ease-in-out ${
              isScrolled ? "text-white" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t py-4 transition-colors duration-1000 ease-in-out ${
                isScrolled ? "border-white/20" : "border-white/20"
              }`}
            >
              <div className="flex flex-col gap-4">
                <Link
                  href={`/${locale}/detail/ev3`}
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.ev3}
                </Link>
                <Link
                  href={`/${locale}/detail/elight`}
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.elight}
                </Link>
                <div className="flex items-center gap-2">
                  <span
                    className={`transition-colors font-medium duration-1000 ease-in-out ${
                      isScrolled ? "text-white/60" : "text-white/60"
                  }`}
                >
                    {t.nav.ewind}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">
                    {t.nav.comingSoon}
                  </span>
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contactUs}
                </Link>
                <div className="pt-2">
                  <LanguageSwitcher currentLocale={locale} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
