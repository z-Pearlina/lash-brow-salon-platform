"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_NUMBER = "213562620887";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM",
];

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export default function BookingForm() {
  const { t } = useLanguage();

  const [form, setForm] = useState<FormData>({
    name: "", phone: "", service: "", date: "", time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = t.booking.errors.name;
    if (!form.phone.trim()) newErrors.phone = t.booking.errors.phone;
    if (!form.service) newErrors.service = t.booking.errors.service;
    if (!form.date) newErrors.date = t.booking.errors.date;
    if (!form.time) newErrors.time = t.booking.errors.time;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const message =
      `Hello! I'd like to book an appointment 🌸\n\n` +
      `*${t.booking.fields.name}:* ${form.name}\n` +
      `*${t.booking.fields.phone}:* ${form.phone}\n` +
      `*${t.booking.fields.service}:* ${form.service}\n` +
      `*${t.booking.fields.date}:* ${form.date}\n` +
      `*${t.booking.fields.time}:* ${form.time}\n\n` +
      `Looking forward to hearing from you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const today = new Date().toISOString().split("T")[0];

  const inputClass = (field: keyof FormData) => `
    w-full bg-background border rounded-xl px-4 py-3
    font-body text-sm text-text-main placeholder:text-text-soft/50
    outline-none transition-all duration-300
    focus:border-primary focus:shadow-sm focus:shadow-primary/10
    ${errors[field] ? "border-red-300" : "border-border"}
  `;

  return (
    <section id="booking" className="py-24 px-6 md:px-8 bg-background">
      <div className="max-w-2xl mx-auto">

        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="font-body text-xs uppercase tracking-[0.35em] text-primary mb-4 block">
              {t.booking.eyebrow}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-text-main tight-tracking mb-4">
              {t.booking.heading}
            </h2>
            <p className="font-body text-text-soft text-sm leading-relaxed max-w-sm mx-auto">
              {t.booking.body}
            </p>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface rounded-3xl p-8 md:p-10 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-text-soft mb-2 block">
                  {t.booking.fields.name}
                </label>
                <input
                  type="text"
                  placeholder={t.booking.fields.namePlaceholder}
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={inputClass("name")}
                />
                {errors.name && <p className="font-body text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-text-soft mb-2 block">
                  {t.booking.fields.phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.booking.fields.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="font-body text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-text-soft mb-2 block">
                  {t.booking.fields.service}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {t.services.items.map((s) => (
                    <button
                      key={s.title}
                      onClick={() => handleChange("service", s.title)}
                      className={`
                        py-3 px-4 rounded-xl border font-body text-sm
                        transition-all duration-300 text-left
                        ${form.service === s.title
                          ? "bg-primary-dark text-background border-primary-dark"
                          : "bg-background border-border text-text-soft hover:border-primary"
                        }
                      `}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
                {errors.service && <p className="font-body text-xs text-red-400 mt-1">{errors.service}</p>}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-text-soft mb-2 block">
                    {t.booking.fields.date}
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className={inputClass("date")}
                  />
                  {errors.date && <p className="font-body text-xs text-red-400 mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-text-soft mb-2 block">
                    {t.booking.fields.time}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleChange("time", slot)}
                        className={`
                          py-2 rounded-lg border font-body text-xs
                          transition-all duration-300
                          ${form.time === slot
                            ? "bg-primary-dark text-background border-primary-dark"
                            : "bg-background border-border text-text-soft hover:border-primary"
                          }
                        `}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="font-body text-xs text-red-400 mt-1">{errors.time}</p>}
                </div>
              </div>

              <motion.button
                onClick={handleSubmit}
                className="w-full bg-primary-dark text-background py-4 rounded-full font-body font-semibold text-sm hover:bg-primary-deep transition-colors duration-300 flex items-center justify-center gap-2 mt-2"
                whileTap={{ scale: 0.98 }}
              >
                <span>📲</span>
                {t.booking.submitBtn}
              </motion.button>

              <p className="font-body text-xs text-text-soft text-center">
                {t.booking.disclaimer}
              </p>
            </motion.div>

          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface rounded-3xl p-10 text-center"
            >
              <motion.div
                className="text-5xl mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
              >
                🌸
              </motion.div>
              <h3 className="font-headline text-3xl text-text-main mb-3">
                {t.booking.success.heading}
              </h3>
              <p className="font-body text-text-soft text-sm leading-relaxed max-w-xs mx-auto mb-8">
                {t.booking.success.body}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", service: "", date: "", time: "" });
                }}
                className="font-body text-sm text-primary-deep border-b border-primary/40 hover:border-primary-deep transition-colors duration-300"
              >
                {t.booking.success.reset}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}