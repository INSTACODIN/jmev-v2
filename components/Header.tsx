"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
              href="/detail/ewind"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              EWIND
            </Link>
            <Link
              href="/detail/elight"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              ELIGHT
            </Link>
            <Link
              href="/detail/ev3"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              EV3
            </Link>
            <Link
              href="/detail/ev2"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              EV2
            </Link>
            <Link
              href="/news"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              News
            </Link>
            <Link
              href="/about-us"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Contact Us
            </Link>
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
                  href="/detail/ewind"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EWIND
                </Link>
                <Link
                  href="/detail/elight"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  ELIGHT
                </Link>
                <Link
                  href="/detail/ev3"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EV3
                </Link>
                <Link
                  href="/detail/ev2"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EV2
                </Link>
                <Link
                  href="/news"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link
                  href="/about-us"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
