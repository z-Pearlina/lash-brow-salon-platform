"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { scrollTo } from "@/lib/scrollTo";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.services, href: "services" },
    { label: t.nav.about, href: "about" },
    { label: t.nav.results, href: "results" },
    { label: t.nav.contact, href: "contact" },
  ];

  return (
    <footer id="contact" className="bg-surface mt-8">
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ── Brand ───────────────────────────── */}
          <div>
            <p className="font-headline italic text-2xl text-primary-dark mb-4">
              Modern Muse
            </p>
            <p className="font-body text-text-soft text-sm leading-relaxed max-w-xs mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-start gap-2 text-text-soft text-sm">
              <span className="mt-0.5">📍</span>
              <span>Sidi Bel Abbès<br />Algeria</span>
            </div>
          </div>

          {/* ── Quick Links ──────────────────────── */}
          <div>
            <h4 className="font-headline text-lg text-text-main mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-text-soft hover:text-primary-deep transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ──────────────────────────── */}
          <div>
            <h4 className="font-headline text-lg text-text-main mb-6">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-text-soft text-sm font-body">
              <p>📱 +213 (0) 000 000 000</p>
              <p>✉️ hello@modernmuse.dz</p>
              <p>🕐 {t.footer.hours}</p>
            </div>
            <div className="flex gap-4 mt-8">
              <button className="font-body text-xs uppercase tracking-widest text-text-soft hover:text-primary-deep transition-colors duration-300">
                Instagram
              </button>
              <span className="text-border">·</span>
              <button className="font-body text-xs uppercase tracking-widest text-text-soft hover:text-primary-deep transition-colors duration-300">
                Facebook
              </button>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ───────────────────────── */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-text-soft">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <button className="font-body text-xs text-text-soft hover:text-primary-deep transition-colors uppercase tracking-widest">
              Privacy
            </button>
            <button className="font-body text-xs text-text-soft hover:text-primary-deep transition-colors uppercase tracking-widest">
              Terms
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}