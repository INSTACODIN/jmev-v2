"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEv2Open, setIsEv2Open] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ev2DropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ev2DropdownRef.current &&
        !ev2DropdownRef.current.contains(event.target as Node)
      ) {
        setIsEv2Open(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
    };

    if (isEv2Open || isAboutOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEv2Open, isAboutOpen]);

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
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/detail/yiChi05S"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              YiChi 05S
            </Link>
            <Link
              href="/detail/yiChi05"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              YiChi 05
            </Link>
            <Link
              href="/detail/ev3Plus"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              EV3PLUS
            </Link>
            <div className="relative" ref={ev2DropdownRef}>
              <button
                onClick={() => setIsEv2Open(!isEv2Open)}
                className={`hover:text-primary transition-colors font-medium flex items-center gap-1 duration-1000 ease-in-out ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                EV2 Series
                <span className="text-xs">▼</span>
              </button>
              <AnimatePresence>
                {isEv2Open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-sm shadow-lg rounded-lg py-2 min-w-[150px] z-50"
                  >
                    <Link
                      href="/detail/ev2Plus"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsEv2Open(false)}
                    >
                      EV2PLUS
                    </Link>
                    <Link
                      href="/detail/ev2PlusPlus"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsEv2Open(false)}
                    >
                      EV2PLUS+
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/detail/yiChi06"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              YiChi 06
            </Link>
            <Link
              href="/detail/yiChi01"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              YiChi 01
            </Link>
            <Link
              href="/stores"
              className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Stores / Magasins
            </Link>
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`hover:text-primary transition-colors font-medium flex items-center gap-1 duration-1000 ease-in-out ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                About Us / À propos
                <span className="text-xs">▼</span>
              </button>
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-sm shadow-lg rounded-lg py-2 min-w-[200px] z-50"
                  >
                    <Link
                      href="/brand-story"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      Brand Story / Histoire
                    </Link>
                    <Link
                      href="/news"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      News / Actualités
                    </Link>
                    <Link
                      href="/franchise"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      Franchise / Franchise
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      Contact Us / Contactez-nous
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#book-test-drive"
              className={`px-6 py-2 border-2 rounded-full font-medium transition-all duration-1000 ease-in-out ${
                isScrolled
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-white text-white hover:bg-white hover:text-primary"
              }`}
            >
              Book Test Drive / Réserver
            </Link>
            <Link
              href="#order-now"
              className={`px-6 py-2 rounded-full font-medium transition-all duration-1000 ease-in-out ${
                isScrolled
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Order Now / Commander
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
                  href="/detail/yiChi05S"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  YiChi 05S
                </Link>
                <Link
                  href="/detail/yiChi05"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  YiChi 05
                </Link>
                <Link
                  href="/detail/ev3Plus"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EV3PLUS
                </Link>
                <Link
                  href="/detail/ev2Plus"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EV2PLUS
                </Link>
                <Link
                  href="/detail/ev2PlusPlus"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EV2PLUS+
                </Link>
                <Link
                  href="/detail/yiChi06"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  YiChi 06
                </Link>
                <Link
                  href="/detail/yiChi01"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  YiChi 01
                </Link>
                <Link
                  href="/stores"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Stores / Magasins
                </Link>
                <Link
                  href="/about-us"
                  className={`hover:text-primary transition-colors font-medium duration-1000 ease-in-out ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us / À propos
                </Link>
                <div
                  className={`flex flex-col gap-2 pt-4 border-t transition-colors duration-1000 ease-in-out ${
                    isScrolled ? "border-white/20" : "border-white/20"
                  }`}
                >
                  <Link
                    href="#book-test-drive"
                    className="px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Test Drive / Réserver
                  </Link>
                  <Link
                    href="#order-now"
                    className="px-6 py-2 bg-primary text-white hover:bg-primary-dark transition-colors rounded-full font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Order Now / Commander
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
