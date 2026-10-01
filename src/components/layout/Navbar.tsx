"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { megaMenus, directNavLinks } from "@/data/navigation";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Sparkles, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-surface/90 dark:bg-background/90 backdrop-blur-xl border-b border-surface-border shadow-xs dark:shadow-lg py-0"
            : "bg-transparent border-b border-transparent py-1.5"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-glow group-hover:shadow-glow-cyan transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-foreground group-hover:text-brand-400 transition-colors">
              Wanda<span className="text-cyan-400">Host</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {/* Hosting Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("hosting")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`group flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[15px] font-semibold tracking-tight transition-all duration-150 ${
                  activeMenu === "hosting"
                    ? "text-brand-600 dark:text-cyan-400 bg-brand-50/90 dark:bg-white/[0.08] shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05]"
                }`}
                aria-expanded={activeMenu === "hosting"}
              >
                <span>Hosting</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "hosting" ? "rotate-180 text-brand-600 dark:text-cyan-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "hosting" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <MegaMenu
                      config={megaMenus.hosting}
                      onClose={() => setActiveMenu(null)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Domains Link */}
            <Link
              href="/domains"
              className="px-3.5 py-2 rounded-xl text-[15px] font-semibold tracking-tight text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05] transition-all duration-150"
            >
              Domains
            </Link>

            {/* Cloud Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("cloud")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`group flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[15px] font-semibold tracking-tight transition-all duration-150 ${
                  activeMenu === "cloud"
                    ? "text-brand-600 dark:text-cyan-400 bg-brand-50/90 dark:bg-white/[0.08] shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05]"
                }`}
                aria-expanded={activeMenu === "cloud"}
              >
                <span>Cloud</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "cloud" ? "rotate-180 text-brand-600 dark:text-cyan-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "cloud" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-20 pt-2"
                  >
                    <MegaMenu
                      config={megaMenus.cloud}
                      onClose={() => setActiveMenu(null)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Business Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("business")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`group flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[15px] font-semibold tracking-tight transition-all duration-150 ${
                  activeMenu === "business"
                    ? "text-brand-600 dark:text-cyan-400 bg-brand-50/90 dark:bg-white/[0.08] shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05]"
                }`}
                aria-expanded={activeMenu === "business"}
              >
                <span>Business</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "business" ? "rotate-180 text-brand-600 dark:text-cyan-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "business" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-40 pt-2"
                  >
                    <MegaMenu
                      config={megaMenus.business}
                      onClose={() => setActiveMenu(null)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* AI Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("ai")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`group flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[15px] font-semibold tracking-tight transition-all duration-150 ${
                  activeMenu === "ai"
                    ? "text-brand-600 dark:text-cyan-400 bg-brand-50/90 dark:bg-white/[0.08] shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05]"
                }`}
                aria-expanded={activeMenu === "ai"}
              >
                <span>AI</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "ai" ? "rotate-180 text-brand-600 dark:text-cyan-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "ai" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-60 pt-2"
                  >
                    <MegaMenu
                      config={megaMenus.ai}
                      onClose={() => setActiveMenu(null)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="px-3.5 py-2 rounded-xl text-[15px] font-semibold tracking-tight text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05] transition-all duration-150"
            >
              Pricing
            </Link>

            {/* Resources */}
            <Link
              href="/resources"
              className="px-3.5 py-2 rounded-xl text-[15px] font-semibold tracking-tight text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05] transition-all duration-150"
            >
              Resources
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden sm:flex items-center gap-2">
              <Button href="/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button
                href="/hosting"
                variant="glow"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-surface-border bg-white dark:bg-surface-muted/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition shadow-sm dark:shadow-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
}
