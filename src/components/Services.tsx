"use client";

import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { scrollTo } from "@/lib/scrollTo";

const images = [
  "https://i.pinimg.com/1200x/39/92/75/3992750c3619394fb134256224887fbd.jpg",
  "https://i.pinimg.com/736x/23/5e/60/235e60b5a9e01ebc897706e41fe09b14.jpg",
  "https://i.pinimg.com/1200x/b3/66/84/b3668413915265dad64e50bb844da1bb.jpg",
  "https://i.pinimg.com/1200x/d9/d9/de/d9d9deb241fb4b253fa2017488b2877a.jpg",
];

const prices = ["From 1200DA", "From 1000DA", "From 2000DA", "From 4500DA"];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-8 pb-32 bg-background">
      <div className="max-w-screen-xl mx-auto">

        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="font-body text-xs uppercase tracking-[0.35em] text-primary mb-3 block">
                {t.services.eyebrow}
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-text-main tight-tracking">
                {t.services.heading}
              </h2>
            </div>
            <p className="font-body text-text-soft text-sm max-w-xs italic border-l-2 border-border pl-5 leading-relaxed">
              {t.services.tagline}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1} direction="up">
              <div
                className="group flex flex-col bg-surface overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 h-full"
                style={{ borderRadius: "48% 48% 16px 16px / 40% 40% 16px 16px" }}
              >
                <div className="relative">
                  <div
                    className="overflow-hidden w-full h-48"
                    style={{ borderRadius: "48% 48% 8px 8px / 40% 40% 8px 8px" }}
                  >
                    <img
                      src={images[index]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-headline text-lg text-text-main">
                      {service.title}
                    </h3>
                    <span className="font-body text-xs text-primary font-medium mt-1">
                      {prices[index]}
                    </span>
                  </div>
                  <p className="font-body text-text-soft text-xs leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={() => scrollTo("booking")}
                    className="
                      w-full py-2.5 text-center rounded-full text-sm font-body font-medium
                      border border-border text-text-soft
                      hover:bg-primary-dark hover:text-background hover:border-primary-dark
                      transition-all duration-300
                    "
                  >
                    {t.services.cta}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}