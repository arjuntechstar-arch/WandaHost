"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Sparkles, Palette } from "lucide-react";

export function ThemeToggle() {
  const { mode, toggleMode, openStudio, activePaletteConfig } = useTheme();

  return (
    <div className="flex items-center gap-1.5">
      {/* 1-Click Day / Night / OLED Quick Toggle */}
      <button
        onClick={toggleMode}
        className="relative p-2 rounded-xl border border-surface-border bg-white dark:bg-surface-muted/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-sm dark:shadow-none group"
        aria-label={`Current mode: ${mode}. Click to cycle Day, Night, and OLED`}
        title={`Current mode: ${
          mode === "light" ? "Day Mode" : mode === "oled" ? "Midnight OLED" : "Night Mode"
        } (Click to switch)`}
      >
        {mode === "light" && (
          <Sun className="w-4 h-4 text-amber-500 transition-transform group-hover:rotate-45" />
        )}
        {mode === "dark" && (
          <Moon className="w-4 h-4 text-indigo-400 transition-transform group-hover:-rotate-12" />
        )}
        {mode === "oled" && (
          <Sparkles className="w-4 h-4 text-cyan-400 transition-transform group-hover:scale-110" />
        )}
      </button>

      {/* Theme & Palette Studio Trigger */}
      <button
        onClick={openStudio}
        className="relative p-2 rounded-xl border border-surface-border bg-white dark:bg-surface-muted/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-sm dark:shadow-none group"
        aria-label="Customize Colors & Themes"
        title="Customize Colors & Themes"
      >
        <Palette className="w-4 h-4 text-brand-500 dark:text-brand-400 group-hover:scale-110 transition-transform" />
        {/* Dynamic color indicator dot */}
        <span
          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-surface shadow-sm"
          style={{ backgroundColor: activePaletteConfig.primaryHex }}
        />
      </button>
    </div>
  );
}
