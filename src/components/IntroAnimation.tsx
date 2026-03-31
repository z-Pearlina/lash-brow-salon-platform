"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const petalCount = 8;

const petals = Array.from({ length: petalCount }, (_, i) => ({
  id: i,
  angle: (360 / petalCount) * i,
  delay: i * 0.08,
}));

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background blobs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-surface rounded-full blur-[100px] opacity-80" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/50 rounded-full blur-[80px] opacity-60" />

          {/* Lotus flower — pure CSS */}
          <div className="relative z-10 w-40 h-40 flex items-center justify-center">

            {/* Petals */}
            {petals.map((petal) => (
              <motion.div
                key={petal.id}
                className="absolute w-10 h-16 rounded-full"
                style={{
                  background: `linear-gradient(to top, #E8BDC7, #C98A98)`,
                  rotate: petal.angle,
                  originX: "50%",
                  originY: "100%",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-20px",
                  marginTop: "-64px",
                  opacity: 0.85,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.85 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + petal.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {/* Inner petals — smaller layer */}
            {petals.map((petal) => (
              <motion.div
                key={`inner-${petal.id}`}
                className="absolute w-7 h-10 rounded-full"
                style={{
                  background: `linear-gradient(to top, #C98A98, #8E4B5C)`,
                  rotate: petal.angle + 22.5,
                  originX: "50%",
                  originY: "100%",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-14px",
                  marginTop: "-40px",
                  opacity: 0.9,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + petal.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {/* Center circle */}
            <motion.div
              className="absolute w-8 h-8 rounded-full z-10"
              style={{ background: "linear-gradient(135deg, #C98A98, #5C2E3A)" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            />
          </div>

          {/* Brand name */}
          <motion.div
            className="relative z-10 text-center mt-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="font-headline italic text-2xl text-primary-dark">
              Modern Muse
            </p>
            <motion.p
              className="font-body text-xs uppercase tracking-[0.35em] text-text-soft mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Premium Beauty Studio
            </motion.p>
          </motion.div>

          {/* Subtle bottom line */}
          <motion.div
            className="absolute bottom-12 w-16 h-px bg-primary/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}