"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { scrollTo } from "@/lib/scrollTo";

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 3.6 + delay,
      ease: easing,
    },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: 3.4,
      ease: easing,
    },
  },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 pt-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full max-w-4xl mx-auto">

        {/* ── Image Column ─────────────────────── */}
        <div className="md:col-span-4 relative flex justify-center">
          <motion.div
            className="absolute -bottom-8 -left-8 w-60 h-60 bg-surface rounded-full blur-3xl -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5 }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-32 h-32 bg-highlight/40 rounded-full blur-2xl -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.7 }}
          />

          <motion.div
            className="w-[220px] h-[290px] md:w-[280px] md:h-[360px] overflow-hidden shadow-lg relative"
            style={{ borderRadius: "60% 60% 12px 12px / 50% 50% 12px 12px" }}
            variants={imageReveal}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://i.pinimg.com/1200x/62/e0/1b/62e01ba8505efb099ce89c833ad973c0.jpg"
              alt="Close-up beauty portrait"
              className="w-full h-full object-cover object-center"
            />
            <motion.div
              className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md rounded-xl px-4 py-2 border border-border"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.2 }}
            >
              <p className="font-headline italic text-primary-dark text-xs">Est. 2026</p>
              <p className="font-body text-text-soft text-[10px] tracking-widest uppercase mt-0.5">
                Sidi Bel Abbès
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Text Column ──────────────────────── */}
        <div className="md:col-span-8 flex flex-col items-center md:items-start gap-5 md:gap-6 md:pl-6 text-center md:text-left">

          <motion.span
            className="font-body text-xs uppercase tracking-[0.35em] text-primary"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            className="font-headline text-3xl sm:text-4xl md:text-5xl text-text-main leading-[1.15] tight-tracking text-balanced"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
          >
            {t.hero.headline1}
            <br />
            <span className="italic font-normal text-primary-deep">
              {t.hero.headline2}
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-text-soft text-sm md:text-base max-w-md leading-relaxed"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="visible"
          >
            {t.hero.body}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start"
            variants={fadeUp}
            custom={0.6}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={() => scrollTo("booking")}
              className="
                bg-primary-dark text-background
                px-8 py-3 rounded-full
                font-body font-medium text-sm
                hover:bg-primary-deep transition-colors duration-300
                active:scale-95 transform shadow-md shadow-primary-dark/20
              "
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="
                text-primary-deep font-body font-medium text-sm
                px-4 py-3
                border-b border-primary/40
                hover:border-primary-deep transition-colors duration-300
              "
            >
              {t.hero.viewServices}
            </button>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 md:gap-8 mt-4 pt-6 border-t border-border w-full max-w-md justify-center md:justify-start"
            variants={fadeUp}
            custom={0.8}
            initial="hidden"
            animate="visible"
          >
            <div>
              <p className="font-headline text-xl text-text-main">500+</p>
              <p className="font-body text-[10px] text-text-soft uppercase tracking-widest mt-1">
                {t.hero.stats.clients}
              </p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <p className="font-headline text-xl text-text-main">10+</p>
              <p className="font-body text-[10px] text-text-soft uppercase tracking-widest mt-1">
                {t.hero.stats.experience}
              </p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <p className="font-headline text-xl text-text-main">5★</p>
              <p className="font-body text-[10px] text-text-soft uppercase tracking-widest mt-1">
                {t.hero.stats.rated}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}