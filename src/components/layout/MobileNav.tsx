"use client";

import React, { useState } from "react";
import Link from "next/link";
import { megaMenus, directNavLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { X, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("hosting");

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-surface border-l border-slate-200/80 dark:border-surface-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Top Bar */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-surface-border">
                <Link href="/" onClick={onClose} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center shadow-glow">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-foreground">
                    Wanda<span className="text-cyan-400">Host</span>
                  </span>
                </Link>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    onClick={onClose}
                    className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-2">
                {Object.values(megaMenus).map((menu) => {
                  const isExpanded = expandedSection === menu.id;
                  return (
                    <div
                      key={menu.id}
                      className="border border-slate-200/80 dark:border-surface-border/60 rounded-xl overflow-hidden bg-slate-50/60 dark:bg-surface-muted/40"
                    >
                      <button
                        onClick={() => toggleSection(menu.id)}
                        className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-white transition-colors"
                      >
                        <span>{menu.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-brand-600 dark:text-cyan-400" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-200/60 dark:border-surface-border/40"
                          >
                            {menu.categories.flatMap((cat) => cat.items).map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-cyan-400 hover:bg-brand-50/70 dark:hover:bg-white/[0.04] transition-colors"
                              >
                                <span>{item.name}</span>
                                {item.badge && (
                                  <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20">
                                    {item.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Direct Links */}
                <div className="pt-2 space-y-1">
                  {directNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="block px-3.5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05] rounded-xl transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-surface-border space-y-3">
              <Button href="/login" variant="outline" className="w-full" onClick={onClose}>
                Sign In
              </Button>
              <Button href="/hosting" variant="glow" className="w-full" onClick={onClose}>
                Get Started
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
