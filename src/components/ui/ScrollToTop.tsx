"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-surface/95 dark:bg-surface-elevated/90 backdrop-blur-xl border border-surface-border text-foreground hover:text-brand-600 dark:hover:text-cyan-400 hover:border-brand-500/50 shadow-lg dark:shadow-glow transition-colors group overflow-hidden"
          aria-label="Scroll to top"
          title="Scroll smoothly to top"
        >
          {/* Shining animation overlay */}
          <span
            className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
            aria-hidden="true"
          >
            <span className="btn-shine-light" />
          </span>

          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
