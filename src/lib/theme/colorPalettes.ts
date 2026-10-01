import { ColorPaletteConfig, PaletteId } from "@/types/theme";

// Helper: Convert HEX to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let cleanHex = hex.replace("#", "").trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(cleanHex, 16);
  if (isNaN(num) || cleanHex.length !== 6) {
    return { r: 99, g: 102, b: 241 }; // fallback to Indigo
  }
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

// Helper: Convert RGB to HEX
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, "0");
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Helper: Convert HEX to HSL
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const { r, g, b } = hexToRgb(hex);
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
    }
    h = Math.round(h * 60);
  }

  return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
}

// Helper: Convert HSL to RGB
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = sNorm * Math.min(lNorm, 1 - lNorm);
  const f = (n: number) =>
    lNorm - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return {
    r: Math.round(f(0) * 255),
    g: Math.round(f(8) * 255),
    b: Math.round(f(4) * 255),
  };
}

export function formatRgbString(r: number, g: number, b: number): string {
  return `${r} ${g} ${b}`;
}

// Dynamically generate a full 50-950 palette from any single HEX color
export function generateCustomPalette(hex: string): ColorPaletteConfig {
  const { h, s } = hexToHsl(hex);
  const baseRgb = hexToRgb(hex);

  // Saturation curve
  const sat = Math.max(45, Math.min(95, s));

  const shadesLevels = [
    { key: "50", l: 96, s: Math.min(sat, 40) },
    { key: "100", l: 91, s: Math.min(sat, 50) },
    { key: "200", l: 83, s: Math.min(sat, 65) },
    { key: "300", l: 73, s: Math.min(sat, 75) },
    { key: "400", l: 62, s: Math.min(sat, 85) },
    { key: "500", l: 52, s: sat },
    { key: "600", l: 44, s: Math.min(sat + 5, 95) },
    { key: "700", l: 36, s: Math.min(sat + 5, 95) },
    { key: "800", l: 28, s: Math.min(sat + 5, 95) },
    { key: "900", l: 20, s: Math.min(sat + 5, 95) },
    { key: "950", l: 12, s: Math.min(sat + 5, 95) },
  ] as const;

  const rgbShades: Record<string, string> = {};

  shadesLevels.forEach(({ key, l, s: shadeSat }) => {
    const rgb = hslToRgb(h, shadeSat, l);
    rgbShades[key] = formatRgbString(rgb.r, rgb.g, rgb.b);
  });

  // Calculate accent (+35 deg hue) and secondary (-35 deg hue)
  const accentH = (h + 35) % 360;
  const accentRgbObj = hslToRgb(accentH, Math.min(sat + 10, 95), 55);
  const accentHex = rgbToHex(accentRgbObj.r, accentRgbObj.g, accentRgbObj.b);
  const accentRgbStr = formatRgbString(accentRgbObj.r, accentRgbObj.g, accentRgbObj.b);
  rgbShades["accent"] = accentRgbStr;

  const secondaryH = (h + 180) % 360;
  const secondaryRgbObj = hslToRgb(secondaryH, Math.min(sat, 80), 52);
  const secondaryHex = rgbToHex(secondaryRgbObj.r, secondaryRgbObj.g, secondaryRgbObj.b);
  const secondaryRgbStr = formatRgbString(secondaryRgbObj.r, secondaryRgbObj.g, secondaryRgbObj.b);

  const glowRgb = formatRgbString(baseRgb.r, baseRgb.g, baseRgb.b);

  const dayButton = {
    primaryBg: `linear-gradient(135deg, rgb(${rgbShades["600"]}) 0%, rgb(${rgbShades["700"]}) 100%)`,
    primaryHoverBg: `linear-gradient(135deg, rgb(${rgbShades["700"]}) 0%, rgb(${rgbShades["800"]}) 100%)`,
    primaryText: "#ffffff",
    primaryBorder: `rgba(${rgbShades["600"]}, 0.45)`,
    primaryShadow: `0 4px 14px -1px rgba(${rgbShades["600"]}, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.06)`,
    glowBg: `linear-gradient(135deg, rgb(${rgbShades["600"]}) 0%, rgb(${rgbShades["700"]}) 50%, ${secondaryHex} 100%)`,
    glowHoverBg: `linear-gradient(135deg, rgb(${rgbShades["700"]}) 0%, rgb(${rgbShades["800"]}) 50%, ${secondaryHex} 100%)`,
    glowShadow: `0 4px 20px -2px rgba(${rgbShades["600"]}, 0.38)`,
  };

  return {
    id: "custom",
    name: "Custom Studio",
    tagline: `Dynamic hue generated from ${hex.toUpperCase()}`,
    primaryHex: hex,
    secondaryHex,
    accentHex,
    rgbShades: rgbShades as ColorPaletteConfig["rgbShades"],
    glowRgb,
    accentGlowRgb: accentRgbStr,
    secondaryRgb: secondaryRgbStr,
    accentRgb: accentRgbStr,
    dayButton,
  };
}

export const PRESET_PALETTES: Record<Exclude<PaletteId, "custom">, ColorPaletteConfig> = {
  indigo: {
    id: "indigo",
    name: "Indigo Spark",
    tagline: "Signature high-tech indigo with violet and electric cyan accents",
    primaryHex: "#6366F1",
    secondaryHex: "#06B6D4",
    accentHex: "#8B5CF6",
    rgbShades: {
      "50": "238 242 255",
      "100": "224 231 255",
      "200": "199 210 254",
      "300": "165 180 252",
      "400": "129 140 248",
      "500": "99 102 241",
      "600": "79 70 229",
      "700": "67 56 202",
      "800": "55 48 163",
      "900": "49 46 129",
      "950": "30 27 75",
      accent: "139 92 246",
    },
    glowRgb: "99 102 241",
    accentGlowRgb: "6 182 212",
    secondaryRgb: "6 182 212",
    accentRgb: "139 92 246",
    dayButton: {
      primaryBg: "linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)",
      primaryHoverBg: "linear-gradient(135deg, #4338CA 0%, #312E81 100%)",
      primaryText: "#ffffff",
      primaryBorder: "rgba(79, 70, 229, 0.4)",
      primaryShadow: "0 4px 14px -1px rgba(79, 70, 229, 0.32), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      glowBg: "linear-gradient(135deg, #4F46E5 0%, #4338CA 50%, #0891B2 100%)",
      glowHoverBg: "linear-gradient(135deg, #4338CA 0%, #3730A3 50%, #0E7490 100%)",
      glowShadow: "0 4px 20px -2px rgba(79, 70, 229, 0.36)",
    },
  },
  cyan: {
    id: "cyan",
    name: "Cyber Cyan",
    tagline: "Electric oceanic aqua and deep neon teal for modern clouds",
    primaryHex: "#06B6D4",
    secondaryHex: "#3B82F6",
    accentHex: "#14B8A6",
    rgbShades: {
      "50": "236 254 255",
      "100": "207 250 254",
      "200": "165 243 252",
      "300": "103 232 249",
      "400": "34 211 238",
      "500": "6 182 212",
      "600": "8 145 178",
      "700": "14 116 144",
      "800": "21 94 117",
      "900": "22 78 99",
      "950": "8 51 68",
      accent: "14 165 233",
    },
    glowRgb: "6 182 212",
    accentGlowRgb: "14 165 233",
    secondaryRgb: "59 130 246",
    accentRgb: "20 184 166",
    dayButton: {
      primaryBg: "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)",
      primaryHoverBg: "linear-gradient(135deg, #0E7490 0%, #155E75 100%)",
      primaryText: "#ffffff",
      primaryBorder: "rgba(8, 145, 178, 0.45)",
      primaryShadow: "0 4px 14px -1px rgba(8, 145, 178, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      glowBg: "linear-gradient(135deg, #0891B2 0%, #0284C7 50%, #0D9488 100%)",
      glowHoverBg: "linear-gradient(135deg, #0E7490 0%, #0369A1 50%, #0F766E 100%)",
      glowShadow: "0 4px 20px -2px rgba(8, 145, 178, 0.38)",
    },
  },
  emerald: {
    id: "emerald",
    name: "Emerald Matrix",
    tagline: "Ultra-crisp cyber emerald and mint for high-performance infra",
    primaryHex: "#10B981",
    secondaryHex: "#06B6D4",
    accentHex: "#34D399",
    rgbShades: {
      "50": "236 253 245",
      "100": "209 250 229",
      "200": "167 243 208",
      "300": "110 231 183",
      "400": "52 211 153",
      "500": "16 185 129",
      "600": "5 150 105",
      "700": "4 120 87",
      "800": "6 95 70",
      "900": "6 78 59",
      "950": "2 44 34",
      accent: "52 211 153",
    },
    glowRgb: "16 185 129",
    accentGlowRgb: "6 182 212",
    secondaryRgb: "6 182 212",
    accentRgb: "52 211 153",
    dayButton: {
      primaryBg: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      primaryHoverBg: "linear-gradient(135deg, #047857 0%, #065F46 100%)",
      primaryText: "#ffffff",
      primaryBorder: "rgba(5, 150, 105, 0.45)",
      primaryShadow: "0 4px 14px -1px rgba(5, 150, 105, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      glowBg: "linear-gradient(135deg, #059669 0%, #047857 50%, #0891B2 100%)",
      glowHoverBg: "linear-gradient(135deg, #047857 0%, #065F46 50%, #0E7490 100%)",
      glowShadow: "0 4px 20px -2px rgba(5, 150, 105, 0.38)",
    },
  },
  rose: {
    id: "rose",
    name: "Sunset Flare",
    tagline: "Electric rose, warm coral, and solar amber for vivid energy",
    primaryHex: "#F43F5E",
    secondaryHex: "#F97316",
    accentHex: "#FB7185",
    rgbShades: {
      "50": "255 241 242",
      "100": "255 228 230",
      "200": "254 205 211",
      "300": "253 164 175",
      "400": "251 113 133",
      "500": "244 63 94",
      "600": "225 29 72",
      "700": "190 18 60",
      "800": "159 18 57",
      "900": "136 19 55",
      "950": "76 5 25",
      accent: "249 115 22",
    },
    glowRgb: "244 63 94",
    accentGlowRgb: "249 115 22",
    secondaryRgb: "249 115 22",
    accentRgb: "251 113 133",
    dayButton: {
      primaryBg: "linear-gradient(135deg, #E11D48 0%, #BE123C 100%)",
      primaryHoverBg: "linear-gradient(135deg, #BE123C 0%, #9F1239 100%)",
      primaryText: "#ffffff",
      primaryBorder: "rgba(225, 29, 72, 0.45)",
      primaryShadow: "0 4px 14px -1px rgba(225, 29, 72, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      glowBg: "linear-gradient(135deg, #E11D48 0%, #BE123C 50%, #C2410C 100%)",
      glowHoverBg: "linear-gradient(135deg, #BE123C 0%, #9F1239 50%, #9A3412 100%)",
      glowShadow: "0 4px 20px -2px rgba(225, 29, 72, 0.38)",
    },
  },
  violet: {
    id: "violet",
    name: "Royal Violet",
    tagline: "Deep luxury amethyst, radiant orchid, and glowing purple",
    primaryHex: "#A855F7",
    secondaryHex: "#EC4899",
    accentHex: "#C084FC",
    rgbShades: {
      "50": "250 245 255",
      "100": "243 232 255",
      "200": "233 213 255",
      "300": "216 180 254",
      "400": "192 132 252",
      "500": "168 85 247",
      "600": "147 51 234",
      "700": "126 34 206",
      "800": "107 33 168",
      "900": "88 28 135",
      "950": "59 7 100",
      accent: "236 72 153",
    },
    glowRgb: "168 85 247",
    accentGlowRgb: "236 72 153",
    secondaryRgb: "236 72 153",
    accentRgb: "192 132 252",
    dayButton: {
      primaryBg: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
      primaryHoverBg: "linear-gradient(135deg, #7E22CE 0%, #6B21A8 100%)",
      primaryText: "#ffffff",
      primaryBorder: "rgba(147, 51, 234, 0.45)",
      primaryShadow: "0 4px 14px -1px rgba(147, 51, 234, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      glowBg: "linear-gradient(135deg, #9333EA 0%, #7E22CE 50%, #DB2777 100%)",
      glowHoverBg: "linear-gradient(135deg, #7E22CE 0%, #6B21A8 50%, #BE185D 100%)",
      glowShadow: "0 4px 20px -2px rgba(147, 51, 234, 0.38)",
    },
  },
  amber: {
    id: "amber",
    name: "Solar Amber",
    tagline: "Rich cyber gold, radiant solar amber, and warm bronze highlights",
    primaryHex: "#F59E0B",
    secondaryHex: "#EA580C",
    accentHex: "#FBBF24",
    rgbShades: {
      "50": "254 252 232",
      "100": "254 249 195",
      "200": "254 240 138",
      "300": "253 224 71",
      "400": "251 191 36",
      "500": "245 158 11",
      "600": "217 119 6",
      "700": "180 83 9",
      "800": "146 64 14",
      "900": "120 53 15",
      "950": "69 26 3",
      accent: "234 88 12",
    },
    glowRgb: "245 158 11",
    accentGlowRgb: "234 88 12",
    secondaryRgb: "234 88 12",
    accentRgb: "251 191 36",
    dayButton: {
      primaryBg: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
      primaryHoverBg: "linear-gradient(135deg, #B45309 0%, #92400E 100%)",
      primaryText: "#ffffff",
      primaryBorder: "rgba(217, 119, 6, 0.45)",
      primaryShadow: "0 4px 14px -1px rgba(217, 119, 6, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      glowBg: "linear-gradient(135deg, #D97706 0%, #B45309 50%, #C2410C 100%)",
      glowHoverBg: "linear-gradient(135deg, #B45309 0%, #92400E 50%, #9A3412 100%)",
      glowShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.38)",
    },
  },
  blue: {
    id: "blue",
    name: "Cobalt Sapphire",
    tagline: "Enterprise cloud azure, mission-critical blue, and sky highlights",
    primaryHex: "#2563EB",
    secondaryHex: "#06B6D4",
    accentHex: "#60A5FA",
    rgbShades: {
      "50": "239 246 255",
      "100": "219 234 254",
      "200": "191 219 254",
      "300": "147 197 253",
      "400": "96 165 250",
      "500": "37 99 235",
      "600": "29 78 216",
      "700": "29 64 175",
      "800": "30 58 138",
      "900": "23 37 84",
      "950": "15 23 42",
      accent: "6 182 212",
    },
    glowRgb: "37 99 235",
    accentGlowRgb: "6 182 212",
    secondaryRgb: "6 182 212",
    accentRgb: "96 165 250",
    dayButton: {
      primaryBg: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
      primaryHoverBg: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
      primaryText: "#ffffff",
      primaryBorder: "rgba(29, 78, 216, 0.45)",
      primaryShadow: "0 4px 14px -1px rgba(29, 78, 216, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      glowBg: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 50%, #0891B2 100%)",
      glowHoverBg: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 50%, #0E7490 100%)",
      glowShadow: "0 4px 20px -2px rgba(29, 78, 216, 0.38)",
    },
  },
};

export function getPaletteConfig(paletteId: PaletteId, customColor?: string): ColorPaletteConfig {
  if (paletteId === "custom") {
    return generateCustomPalette(customColor || "#6366F1");
  }
  return PRESET_PALETTES[paletteId] || PRESET_PALETTES.indigo;
}

export function applyPaletteToDom(config: ColorPaletteConfig, colorFinish: "solid" | "gradient" = "solid") {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  // Apply all brand shades
  Object.entries(config.rgbShades).forEach(([shade, rgbVal]) => {
    root.style.setProperty(`--brand-${shade}-rgb`, rgbVal);
  });

  // Apply glow and accent variables
  root.style.setProperty("--brand-glow-rgb", config.glowRgb);
  root.style.setProperty("--accent-glow-rgb", config.accentGlowRgb);
  root.style.setProperty("--accent-secondary-rgb", config.secondaryRgb);
  root.style.setProperty("--brand-accent-rgb", config.accentRgb || config.rgbShades["accent"]);

  // Set solid vs gradient finish
  if (colorFinish === "gradient") {
    root.classList.add("finish-gradient");
    if (config.dayButton) {
      root.style.setProperty("--day-btn-primary-bg", config.dayButton.primaryBg);
      root.style.setProperty("--day-btn-primary-hover-bg", config.dayButton.primaryHoverBg);
      root.style.setProperty("--day-btn-glow-bg", config.dayButton.glowBg);
      root.style.setProperty("--day-btn-glow-hover-bg", config.dayButton.glowHoverBg);
    }
    root.style.setProperty(
      "--btn-primary-bg",
      `linear-gradient(135deg, rgb(${config.rgbShades["500"]}) 0%, rgb(${config.rgbShades["600"]}) 100%)`
    );
    root.style.setProperty(
      "--btn-primary-hover-bg",
      `linear-gradient(135deg, rgb(${config.rgbShades["600"]}) 0%, rgb(${config.rgbShades["700"]}) 100%)`
    );
    root.style.setProperty(
      "--btn-glow-bg",
      `linear-gradient(135deg, rgb(${config.rgbShades["500"]}) 0%, #4f46e5 50%, rgb(${config.accentGlowRgb}) 100%)`
    );
    root.style.setProperty(
      "--btn-glow-hover-bg",
      `linear-gradient(135deg, rgb(${config.rgbShades["600"]}) 0%, #4338ca 50%, rgb(${config.accentGlowRgb}) 100%)`
    );
  } else {
    // Solid color (Default)
    root.classList.remove("finish-gradient");
    root.style.setProperty("--btn-primary-bg", `rgb(${config.rgbShades["600"]})`);
    root.style.setProperty("--btn-primary-hover-bg", `rgb(${config.rgbShades["700"]})`);
    root.style.setProperty("--btn-glow-bg", `rgb(${config.rgbShades["600"]})`);
    root.style.setProperty("--btn-glow-hover-bg", `rgb(${config.rgbShades["700"]})`);

    root.style.setProperty("--day-btn-primary-bg", `rgb(${config.rgbShades["600"]})`);
    root.style.setProperty("--day-btn-primary-hover-bg", `rgb(${config.rgbShades["700"]})`);
    root.style.setProperty("--day-btn-glow-bg", `rgb(${config.rgbShades["600"]})`);
    root.style.setProperty("--day-btn-glow-hover-bg", `rgb(${config.rgbShades["700"]})`);
  }

  // Common button properties
  if (config.dayButton) {
    root.style.setProperty("--day-btn-primary-text", config.dayButton.primaryText);
    root.style.setProperty("--day-btn-primary-border", config.dayButton.primaryBorder);
    root.style.setProperty("--day-btn-primary-shadow", config.dayButton.primaryShadow);
    root.style.setProperty("--day-btn-glow-shadow", config.dayButton.glowShadow);
  }

  // Cache applied styles in localStorage for instant retrieval on page reload
  try {
    const cacheMap: Record<string, string> = {
      "--brand-glow-rgb": config.glowRgb,
      "--accent-glow-rgb": config.accentGlowRgb,
      "--accent-secondary-rgb": config.secondaryRgb,
      "--brand-accent-rgb": config.accentRgb || config.rgbShades["accent"],
      "--btn-primary-bg": colorFinish === "gradient"
        ? `linear-gradient(135deg, rgb(${config.rgbShades["500"]}) 0%, rgb(${config.rgbShades["600"]}) 100%)`
        : `rgb(${config.rgbShades["600"]})`,
      "--btn-primary-hover-bg": colorFinish === "gradient"
        ? `linear-gradient(135deg, rgb(${config.rgbShades["600"]}) 0%, rgb(${config.rgbShades["700"]}) 100%)`
        : `rgb(${config.rgbShades["700"]})`,
    };
    Object.entries(config.rgbShades).forEach(([shade, rgbVal]) => {
      cacheMap[`--brand-${shade}-rgb`] = rgbVal;
    });

    localStorage.setItem("wandahost-palette-rgb", JSON.stringify(cacheMap));
  } catch {
    // Ignore storage quota errors
  }
}
