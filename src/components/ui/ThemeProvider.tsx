"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { ThemeMode, PaletteId, ColorPaletteConfig, ThemeContextType, ColorFinish } from "@/types/theme";
import { getPaletteConfig, applyPaletteToDom, PRESET_PALETTES } from "@/lib/theme/colorPalettes";

const ThemeContext = createContext<ThemeContextType & {
  // Legacy compatibility
  theme: "dark" | "light";
  toggleTheme: () => void;
  setTheme: (theme: "dark" | "light") => void;
}>({
  mode: "dark",
  setMode: () => {},
  palette: "indigo",
  setPalette: () => {},
  customColor: "#6366F1",
  setCustomColor: () => {},
  colorFinish: "solid",
  setColorFinish: () => {},
  activePaletteConfig: PRESET_PALETTES.indigo,
  isStudioOpen: false,
  setIsStudioOpen: () => {},
  openStudio: () => {},
  closeStudio: () => {},
  toggleMode: () => {},
  resetDefaults: () => {},
  contrastMode: "glass",
  setContrastMode: () => {},
  // Legacy
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [palette, setPaletteState] = useState<PaletteId>("indigo");
  const [customColor, setCustomColorState] = useState<string>("#6366F1");
  const [colorFinish, setColorFinishState] = useState<ColorFinish>("solid");
  const [contrastMode, setContrastModeState] = useState<"glass" | "solid">("glass");
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Compute active palette configuration
  const activePaletteConfig: ColorPaletteConfig = useMemo(() => {
    return getPaletteConfig(palette, customColor);
  }, [palette, customColor]);

  // Apply mode classes to <html>
  const applyModeClass = useCallback((newMode: ThemeMode) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("light", "dark", "oled");

    if (newMode === "light") {
      root.classList.add("light");
    } else if (newMode === "oled") {
      root.classList.add("oled", "dark");
    } else {
      root.classList.add("dark");
    }
  }, []);

  // Initialize from localStorage on mount
  useEffect(() => {
    setMounted(true);

    try {
      const savedMode = localStorage.getItem("wandahost-theme-mode") as ThemeMode | null;
      const legacySavedTheme = localStorage.getItem("wandahost-theme") as "dark" | "light" | null;
      const effectiveMode: ThemeMode = savedMode || legacySavedTheme || "dark";

      setModeState(effectiveMode);
      applyModeClass(effectiveMode);

      const savedPalette = localStorage.getItem("wandahost-palette-id") as PaletteId | null;
      const savedCustomColor = localStorage.getItem("wandahost-custom-color");
      const savedContrast = localStorage.getItem("wandahost-contrast") as "glass" | "solid" | null;
      const savedFinish = localStorage.getItem("wandahost-color-finish") as ColorFinish | null;
      const effectiveFinish: ColorFinish = savedFinish || "solid";

      if (savedPalette) {
        setPaletteState(savedPalette);
      }
      if (savedCustomColor) {
        setCustomColorState(savedCustomColor);
      }
      if (savedContrast) {
        setContrastModeState(savedContrast);
      }
      setColorFinishState(effectiveFinish);

      const initialPalette = getPaletteConfig(
        savedPalette || "indigo",
        savedCustomColor || "#6366F1"
      );
      applyPaletteToDom(initialPalette, effectiveFinish);
    } catch {
      // Fallback if localStorage unavailable
      applyModeClass("dark");
      applyPaletteToDom(PRESET_PALETTES.indigo, "solid");
    }
  }, [applyModeClass]);

  // Handle mode updates
  const setMode = useCallback(
    (newMode: ThemeMode) => {
      setModeState(newMode);
      applyModeClass(newMode);
      try {
        localStorage.setItem("wandahost-theme-mode", newMode);
        localStorage.setItem("wandahost-theme", newMode === "light" ? "light" : "dark");
      } catch {}
    },
    [applyModeClass]
  );

  // Cycle Day (Light) -> Night (Dark) -> Midnight (OLED) -> Day (Light)
  const toggleMode = useCallback(() => {
    const nextMode: ThemeMode = mode === "dark" ? "light" : mode === "light" ? "oled" : "dark";
    setMode(nextMode);
  }, [mode, setMode]);

  // Handle palette change
  const setPalette = useCallback(
    (newPalette: PaletteId) => {
      setPaletteState(newPalette);
      try {
        localStorage.setItem("wandahost-palette-id", newPalette);
      } catch {}
      const config = getPaletteConfig(newPalette, customColor);
      applyPaletteToDom(config, colorFinish);
    },
    [customColor, colorFinish]
  );

  // Handle custom color input
  const setCustomColor = useCallback(
    (hexColor: string) => {
      setCustomColorState(hexColor);
      setPaletteState("custom");
      try {
        localStorage.setItem("wandahost-custom-color", hexColor);
        localStorage.setItem("wandahost-palette-id", "custom");
      } catch {}
      const config = getPaletteConfig("custom", hexColor);
      applyPaletteToDom(config, colorFinish);
    },
    [colorFinish]
  );

  // Handle color finish (solid vs gradient)
  const setColorFinish = useCallback(
    (finish: ColorFinish) => {
      setColorFinishState(finish);
      try {
        localStorage.setItem("wandahost-color-finish", finish);
      } catch {}
      const config = getPaletteConfig(palette, customColor);
      applyPaletteToDom(config, finish);
    },
    [palette, customColor]
  );

  // Handle contrast mode
  const setContrastMode = useCallback((contrast: "glass" | "solid") => {
    setContrastModeState(contrast);
    try {
      localStorage.setItem("wandahost-contrast", contrast);
    } catch {}
    if (typeof document !== "undefined") {
      if (contrast === "solid") {
        document.documentElement.classList.add("contrast-solid");
      } else {
        document.documentElement.classList.remove("contrast-solid");
      }
    }
  }, []);

  // Reset to defaults
  const resetDefaults = useCallback(() => {
    setMode("dark");
    setPalette("indigo");
    setCustomColorState("#6366F1");
    setColorFinishState("solid");
    setContrastMode("glass");
    try {
      localStorage.removeItem("wandahost-theme-mode");
      localStorage.removeItem("wandahost-theme");
      localStorage.removeItem("wandahost-palette-id");
      localStorage.removeItem("wandahost-custom-color");
      localStorage.removeItem("wandahost-color-finish");
      localStorage.removeItem("wandahost-contrast");
      localStorage.removeItem("wandahost-palette-rgb");
    } catch {}
    applyModeClass("dark");
    applyPaletteToDom(PRESET_PALETTES.indigo, "solid");
  }, [setMode, setPalette, setContrastMode, applyModeClass]);

  const openStudio = useCallback(() => setIsStudioOpen(true), []);
  const closeStudio = useCallback(() => setIsStudioOpen(false), []);

  // Legacy compatibility helpers
  const legacyTheme: "dark" | "light" = mode === "light" ? "light" : "dark";
  const legacySetTheme = useCallback(
    (t: "dark" | "light") => setMode(t),
    [setMode]
  );

  return (
    <ThemeContext.Provider
      value={{
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
        setIsStudioOpen,
        openStudio,
        closeStudio,
        toggleMode,
        resetDefaults,
        contrastMode,
        setContrastMode,
        // Legacy
        theme: legacyTheme,
        toggleTheme: toggleMode,
        setTheme: legacySetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
