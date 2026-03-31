"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { scrollTo } from "@/lib/scrollTo";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useLanguage();

  const statsData = [
    { value: "500+", label: t.about.statsLabels.clients },
    { value: "10+", label: t.about.statsLabels.artistry },
    { value: "5★", label: t.about.statsLabels.rated },
  ];

  return (
    <section id="about" className="py-24 px-8 bg-surface overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

          {/* ── Image Grid (left) ────────────────── */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4 relative">

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-highlight/30 rounded-full blur-3xl -z-10"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <ScrollReveal direction="left" delay={0.1}>
              <div className="pt-16">
                <motion.div
                  className="overflow-hidden aspect-[3/4] shadow-md"
                  style={{ borderRadius: "48% 48% 12px 12px / 40% 40% 12px 12px" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src="https://i.pinimg.com/736x/5e/4f/05/5e4f058d790c5ee9eb432d5af5e859b6.jpg"
                    alt="Salon interior"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.25}>
              <div className="flex flex-col gap-4">
                <motion.div
                  className="overflow-hidden aspect-[3/4] shadow-md"
                  style={{ borderRadius: "48% 48% 12px 12px / 40% 40% 12px 12px" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src="https://i.pinimg.com/736x/b5/d1/9d/b5d19d9ea74e997aad73f8b735bb60f9.jpg"
                    alt="Beauty detail"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="bg-primary-dark rounded-2xl p-6 text-background text-center relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                  />
                  <span className="font-headline text-4xl italic block mb-1 relative z-10">10+</span>
                  <span className="font-body text-xs uppercase tracking-widest opacity-75 relative z-10">
                    {t.about.statsLabels.artistry}
                  </span>
                </motion.div>
              </div>
            </ScrollReveal>

          </div>

          {/* ── Text (right) ─────────────────────── */}
          <ScrollReveal direction="right" delay={0.2} className="md:col-span-6">
            <div>
              <motion.span
                className="font-body text-xs uppercase tracking-[0.35em] text-primary mb-6 block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {t.about.eyebrow}
              </motion.span>

              <motion.h2
                className="font-headline text-4xl md:text-5xl text-text-main mb-8 leading-tight tight-tracking"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {t.about.heading1} <br />
                <span className="italic font-normal text-primary-deep">
                  {t.about.heading2}
                </span>
              </motion.h2>

              <motion.div
                className="space-y-5 text-text-soft text-base leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </motion.div>

              <motion.div
                className="h-px bg-primary my-8"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />

              <ul className="space-y-3 mb-10">
                {t.about.values.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-text-soft text-sm"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center gap-8 mb-10 pt-6 border-t border-border">
                {statsData.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-headline text-2xl text-text-main">{stat.value}</p>
                    <p className="font-body text-[10px] text-text-soft uppercase tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 text-primary-deep font-body font-medium text-sm border-b border-primary/40 hover:border-primary-deep transition-colors duration-300"
                >
                  {t.about.link}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}