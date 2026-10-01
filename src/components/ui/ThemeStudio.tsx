"use client";

import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { PaletteId, ThemeMode } from "@/types/theme";
import { PRESET_PALETTES } from "@/lib/theme/colorPalettes";
import { AnimatePresence, motion } from "framer-motion";
import {
  Paintbrush,
  Sun,
  Moon,
  Sparkles,
  X,
  RotateCcw,
  Check,
  Palette,
  Eye,
  Layers,
  Wand2,
  Sliders,
  ChevronRight,
} from "lucide-react";

export function ThemeStudio() {
  const {
    mode,
    setMode,
    palette,
    setPalette,
    customColor,
    setCustomColor,
    colorFinish,
    setColorFinish,
    activePaletteConfig,
    isStudioOpen,
    closeStudio,
    openStudio,
    resetDefaults,
    contrastMode,
    setContrastMode,
  } = useTheme();

  const [hexInput, setHexInput] = useState(customColor);

  const modeOptions: { id: ThemeMode; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: "dark",
      label: "Night Mode",
      desc: "Cyberpunk deep slate with ambient neon glow",
      icon: <Moon className="w-4 h-4 text-indigo-400" />,
    },
    {
      id: "light",
      label: "Day Mode",
      desc: "Crisp daylight porcelain with clear typography",
      icon: <Sun className="w-4 h-4 text-amber-500" />,
    },
    {
      id: "oled",
      label: "Midnight OLED",
      desc: "Pure true black #000000 with razor contrast",
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    },
  ];

  const handleHexSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^#[0-9A-F]{6}$/i.test(hexInput)) {
      setCustomColor(hexInput);
    }
  };

  const handleRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setHexInput(color);
    setCustomColor(color);
  };

  return (
    <>
      {/* Floating Studio Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openStudio}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-surface/95 dark:bg-surface-elevated/90 backdrop-blur-xl border border-surface-border shadow-lg dark:shadow-glow text-foreground hover:border-brand-500/50 transition-all group"
        aria-label="Open Theme & UI Customizer"
        title="Customize UI Colors & Themes"
      >
        <div
          className="w-4 h-4 rounded-full ring-2 ring-white/20 shadow-sm"
          style={{ backgroundColor: activePaletteConfig.primaryHex }}
        />
        <Paintbrush className="w-4 h-4 text-brand-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">Theme Studio</span>
      </motion.button>

      {/* Slide-over Drawer / Modal */}
      <AnimatePresence>
        {isStudioOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeStudio}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-md sm:max-w-lg bg-surface border-l border-surface-border shadow-2xl flex flex-col h-full overflow-hidden text-foreground"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-surface-border flex items-center justify-between bg-surface-muted/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-glow"
                    style={{
                      backgroundColor: activePaletteConfig.primaryHex,
                    }}
                  >
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold tracking-tight">Theme & Color Studio</h2>
                    <p className="text-xs text-slate-400">Dynamic theme modes & accent palettes</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={resetDefaults}
                    className="p-2 rounded-xl text-slate-400 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                    title="Reset to Defaults"
                    aria-label="Reset to Defaults"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeStudio}
                    className="p-2 rounded-xl text-slate-400 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                    title="Close Studio"
                    aria-label="Close Studio"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
                {/* 1. Theme Mode Switcher */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-brand-400" />
                      Display Mode
                    </label>
                    <span className="text-[11px] font-medium text-brand-400 uppercase tracking-wider">
                      {mode}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {modeOptions.map((opt) => {
                      const isActive = mode === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setMode(opt.id)}
                          className={`flex flex-col items-center justify-center text-center p-3 rounded-xl border transition-all ${
                            isActive
                              ? "border-brand-600 dark:border-brand-500 bg-brand-500/15 text-slate-900 dark:text-white font-bold shadow-sm dark:shadow-glow"
                              : "border-slate-200 dark:border-surface-border bg-white dark:bg-surface-muted/50 hover:bg-slate-100 dark:hover:bg-surface-elevated text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-surface border border-surface-border mb-1.5">
                            {opt.icon}
                          </div>
                          <span className="text-xs font-semibold">{opt.label}</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                            {opt.id === "dark" ? "Dark" : opt.id === "light" ? "Light" : "True Black"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Color Finish Style: Solid (Default) vs Gradient (Optional) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                      Color Finish Style
                    </label>
                    <span className="text-[11px] font-bold text-brand-600 dark:text-cyan-400 uppercase tracking-wider">
                      {colorFinish === "solid" ? "Solid (Default)" : "Gradient (Optional)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => setColorFinish("solid")}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                        colorFinish === "solid"
                          ? "border-brand-600 dark:border-brand-500 bg-brand-500/15 text-slate-900 dark:text-white font-bold shadow-sm ring-1 ring-brand-500/30"
                          : "border-slate-200 dark:border-surface-border bg-white dark:bg-surface-muted/40 hover:bg-slate-100 dark:hover:bg-surface-elevated text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: activePaletteConfig.primaryHex }}
                      >
                        {colorFinish === "solid" && <Check className="w-4 h-4 text-white drop-shadow" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold">Solid Finish</div>
                        <div className="text-[10px] text-slate-400">Bold & Clean (Default)</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setColorFinish("gradient")}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                        colorFinish === "gradient"
                          ? "border-brand-600 dark:border-brand-500 bg-brand-500/15 text-slate-900 dark:text-white font-bold shadow-sm ring-1 ring-brand-500/30"
                          : "border-slate-200 dark:border-surface-border bg-white dark:bg-surface-muted/40 hover:bg-slate-100 dark:hover:bg-surface-elevated text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center shadow-xs"
                        style={{
                          background: `linear-gradient(135deg, ${activePaletteConfig.primaryHex} 0%, ${activePaletteConfig.accentHex} 100%)`,
                        }}
                      >
                        {colorFinish === "gradient" && <Check className="w-4 h-4 text-white drop-shadow" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold">Gradient Finish</div>
                        <div className="text-[10px] text-slate-400">Multi-tone (Optional)</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 3. Color Palettes */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-brand-400" />
                      Accent Color Palettes
                    </label>
                    <span className="text-[11px] text-slate-400">7 Handcrafted presets</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {Object.values(PRESET_PALETTES).map((p) => {
                      const isSelected = palette === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setPalette(p.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "border-brand-600 dark:border-brand-500 bg-brand-500/15 text-slate-900 dark:text-white font-bold shadow-sm ring-1 ring-brand-500/30"
                              : "border-slate-200 dark:border-surface-border bg-white dark:bg-surface-muted/40 hover:bg-slate-100 dark:hover:bg-surface-elevated text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {/* Swatch preview */}
                          <div
                            className="w-8 h-8 rounded-lg shrink-0 shadow-sm flex items-center justify-center"
                            style={{
                              backgroundColor: colorFinish === "solid" ? p.primaryHex : undefined,
                              background: colorFinish === "gradient" ? `linear-gradient(135deg, ${p.primaryHex} 0%, ${p.accentHex} 100%)` : undefined,
                            }}
                          >
                            {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold truncate">{p.name}</div>
                            <div className="text-[10px] text-slate-400 truncate">{p.tagline}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Custom Color Generator */}
                <div className="p-4 rounded-2xl bg-surface-muted/60 border border-surface-border space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Wand2 className="w-3.5 h-3.5 text-brand-400" />
                      Custom Color Generator
                    </label>
                    <button
                      type="button"
                      onClick={handleRandomColor}
                      className="text-[11px] text-brand-400 hover:text-brand-300 font-medium transition-colors flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      Randomize
                    </button>
                  </div>

                  <p className="text-xs text-slate-400">
                    Pick any custom hue. Our engine will dynamically calculate the complete 50-950
                    chroma scale and ambient glows.
                  </p>

                  <form onSubmit={handleHexSubmit} className="flex items-center gap-3">
                    {/* Native color picker */}
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-surface-border shrink-0 cursor-pointer shadow-sm">
                      <input
                        type="color"
                        value={hexInput}
                        onChange={(e) => {
                          setHexInput(e.target.value);
                          setCustomColor(e.target.value);
                        }}
                        className="absolute inset-[-50%] w-[200%] h-[200%] cursor-pointer"
                        title="Pick custom color"
                      />
                    </div>

                    {/* Hex text input */}
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={hexInput}
                        onChange={(e) => setHexInput(e.target.value)}
                        placeholder="#6366F1"
                        maxLength={7}
                        className="w-full px-3 py-2 rounded-xl bg-surface border border-surface-border text-sm font-mono focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 uppercase"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={() => setCustomColor(hexInput)}
                      className="px-3.5 py-2 rounded-xl bg-brand-500 text-white text-xs font-semibold hover:bg-brand-600 transition-colors shadow-sm"
                    >
                      Apply
                    </button>
                  </form>

                  {/* Active Custom Swatches scale preview */}
                  <div className="pt-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                      Generated Scale (50 to 950)
                    </span>
                    <div className="grid grid-cols-11 gap-1 h-4 rounded-lg overflow-hidden border border-surface-border">
                      {["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"].map(
                        (shade) => (
                          <div
                            key={shade}
                            className="h-full"
                            style={{
                              backgroundColor: `rgb(${activePaletteConfig.rgbShades[shade as keyof typeof activePaletteConfig.rgbShades]})`,
                            }}
                            title={`Shade ${shade}`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* 4. Live UI Component Preview Card */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-brand-400" />
                      Live UI Preview
                    </label>
                    <span className="text-[11px] text-slate-400">Real-time dynamic CSS</span>
                  </div>

                  <div className="p-4 rounded-2xl border border-surface-border bg-surface-elevated/70 shadow-lg relative overflow-hidden space-y-3">
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-40 pointer-events-none"
                      style={{ backgroundColor: activePaletteConfig.primaryHex }}
                    />

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-600 dark:text-brand-400 border border-brand-500/30">
                        CLOUD HOSTING • ACTIVE
                      </span>
                      <span className="text-xs font-bold text-foreground">$29/mo</span>
                    </div>

                    <div>
                      <h4 className="text-sm font-extrabold tracking-tight">
                        WandaHost{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">
                          NextGen Infra
                        </span>
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        High performance managed compute with auto-failover.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button className="btn-primary flex-1 py-2 px-3 rounded-lg text-xs font-semibold shadow-md active:scale-[0.98]">
                        Deploy Now
                      </button>
                      <button className="btn-secondary py-2 px-3 rounded-lg text-xs font-medium active:scale-[0.98]">
                        Specs
                      </button>
                    </div>
                  </div>
                </div>

                {/* 5. Surface Contrast Style */}
                <div className="p-3.5 rounded-xl bg-surface-muted/40 border border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-brand-400" />
                    <div>
                      <div className="text-xs font-semibold">Surface Contrast</div>
                      <div className="text-[11px] text-slate-400">
                        {contrastMode === "glass" ? "Glassmorphism Frosted Blur" : "Solid Crisp Contrast"}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setContrastMode(contrastMode === "glass" ? "solid" : "glass")}
                    className="px-2.5 py-1 text-xs rounded-lg border border-surface-border bg-surface hover:border-brand-500 transition-colors font-medium"
                  >
                    Switch to {contrastMode === "glass" ? "Solid" : "Glass"}
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-surface-border bg-surface-muted/50 backdrop-blur-md flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Preferences saved automatically</span>
                <button
                  onClick={closeStudio}
                  className="btn-primary px-4 py-1.5 rounded-xl text-xs font-semibold shadow-sm active:scale-[0.98]"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
