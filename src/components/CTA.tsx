"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { scrollTo } from "@/lib/scrollTo";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="px-8 py-8 bg-background">
      <div
        className="relative overflow-hidden rounded-3xl py-24 px-8 text-center"
        style={{ backgroundColor: "#5C2E3A" }}
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-deep/20 rounded-full blur-[80px]" />

        <ScrollReveal direction="up">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-body text-xs uppercase tracking-[0.35em] text-highlight/70 mb-6 block">
              {t.booking.eyebrow}
            </span>
            <h2 className="font-headline text-4xl md:text-6xl text-background leading-tight mb-6 tight-tracking">
              {t.booking.heading} <br />
              <span className="italic font-normal text-highlight">today</span>
            </h2>
            <p className="font-body text-background/60 text-base mb-10 max-w-md mx-auto leading-relaxed">
              {t.booking.body}
            </p>
            <button
              onClick={() => scrollTo("booking")}
              className="
                inline-flex items-center gap-2
                bg-highlight text-primary-dark
                px-12 py-4 rounded-full
                font-body font-semibold text-sm
                hover:bg-background transition-colors duration-300
                active:scale-95 transform shadow-2xl
              "
            >
              {t.booking.submitBtn}
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}