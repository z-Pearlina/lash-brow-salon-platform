"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { scrollTo } from "@/lib/scrollTo";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: "services" },
    { label: t.nav.about, href: "about" },
    { label: t.nav.results, href: "results" },
    { label: t.nav.contact, href: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-500
          ${scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm shadow-border"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-screen-xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-headline italic text-2xl text-primary-dark tracking-tight z-50">
            Modern Muse
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-sm uppercase tracking-widest text-text-soft hover:text-primary-deep transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side — lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center bg-surface rounded-full p-1 border border-border">
              <button
                onClick={() => setLang("en")}
                className={`
                  px-3 py-1 rounded-full font-body text-xs font-medium transition-all duration-300
                  ${lang === "en"
                    ? "bg-primary-dark text-background"
                    : "text-text-soft hover:text-text-main"
                  }
                `}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`
                  px-3 py-1 rounded-full font-body text-xs font-medium transition-all duration-300
                  ${lang === "fr"
                    ? "bg-primary-dark text-background"
                    : "text-text-soft hover:text-text-main"
                  }
                `}
              >
                FR
              </button>
            </div>

            {/* Book Now */}
            <button
              onClick={() => scrollTo("booking")}
              className="inline-flex items-center bg-primary-dark text-background px-6 py-2.5 rounded-full font-body text-sm font-medium hover:bg-primary-deep transition-colors duration-300 active:scale-95 transform"
            >
              {t.nav.book}
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden z-50 flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-px bg-text-main origin-center"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-text-main"
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-4 h-px bg-text-main origin-center"
              animate={menuOpen
                ? { rotate: -45, y: -6, width: 24 }
                : { rotate: 0, y: 0, width: 16 }
              }
              transition={{ duration: 0.3 }}
            />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-primary-dark/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[75%] max-w-xs bg-background z-40 md:hidden shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col h-full px-8 pt-28 pb-12">

                {/* Mobile lang toggle */}
                <div className="flex items-center bg-surface rounded-full p-1 border border-border self-start mb-8">
                  <button
                    onClick={() => setLang("en")}
                    className={`px-4 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-300 ${lang === "en" ? "bg-primary-dark text-background" : "text-text-soft"}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang("fr")}
                    className={`px-4 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-300 ${lang === "fr" ? "bg-primary-dark text-background" : "text-text-soft"}`}
                  >
                    FR
                  </button>
                </div>

                <ul className="flex flex-col gap-2 flex-grow">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    >
                      <button
                        onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                        className="block w-full text-left font-headline italic text-3xl text-text-main hover:text-primary-deep transition-colors duration-300 py-3 border-b border-border"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <button
                    onClick={() => { scrollTo("booking"); setMenuOpen(false); }}
                    className="block w-full text-center bg-primary-dark text-background py-4 rounded-full font-body font-medium text-sm hover:bg-primary-deep transition-colors duration-300"
                  >
                    {t.nav.book}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Mobile Button */}
      <motion.div
        className="md:hidden fixed bottom-6 left-6 right-6 z-30"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 4.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={() => scrollTo("booking")}
          className="w-full bg-primary-dark text-background py-4 rounded-full shadow-2xl font-body font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary-deep transition-colors duration-300"
        >
          🌸 {t.nav.book}
        </button>
      </motion.div>
    </>
  );
}