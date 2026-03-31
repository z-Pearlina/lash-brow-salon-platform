"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const images = [
  { src: "https://i.pinimg.com/736x/7a/79/ce/7a79ce7e95450f23f560a40c351e5173.jpg", tall: true },
  { src: "https://i.pinimg.com/736x/85/5e/78/855e78d77f8a4fcc183e76eeb20d5cc3.jpg", tall: false },
  { src: "https://i.pinimg.com/1200x/0c/24/80/0c24804bd343b2d3320a551f235f0a53.jpg", tall: false },
  { src: "https://i.pinimg.com/avif/1200x/ea/ea/01/eaea015ab4bb8b25943aec9d084acd28.avf", tall: true },
  { src: "https://i.pinimg.com/736x/b9/9c/ea/b99cea45bd0e6f86db1205e0ea401e49.jpg", tall: false },
  { src: "https://i.pinimg.com/avif/1200x/11/0b/d6/110bd6881f64628c1719958003fef6b2.avf", tall: false },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="results" className="py-24 px-8 bg-background">
      <div className="max-w-screen-xl mx-auto">

        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="font-body text-xs uppercase tracking-[0.35em] text-primary mb-4 block">
              {t.gallery.eyebrow}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-text-main tight-tracking">
              {t.gallery.heading}
            </h2>
            <p className="font-body text-text-soft text-sm mt-4 max-w-sm mx-auto leading-relaxed">
              {t.gallery.body}
            </p>
          </div>
        </ScrollReveal>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.08}
              direction="up"
              className="break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={t.gallery.labels[index]}
                  className={`
                    w-full object-cover
                    transition-all duration-700
                    group-hover:scale-105 group-hover:brightness-90
                    ${item.tall ? "h-72 md:h-80" : "h-48 md:h-56"}
                  `}
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-all duration-500" />
                <div className="
                  absolute bottom-0 left-0 right-0
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-500
                  bg-gradient-to-t from-primary-dark/80 to-transparent
                  px-4 py-5
                ">
                  <span className="font-body text-xs uppercase tracking-widest text-background opacity-90">
                    {t.gallery.labels[index]}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}