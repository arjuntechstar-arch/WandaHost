export type ThemeMode = "dark" | "light" | "oled";
export type ColorFinish = "solid" | "gradient";

export type PaletteId =
  | "indigo"
  | "cyan"
  | "emerald"
  | "rose"
  | "violet"
  | "amber"
  | "blue"
  | "custom";

export interface DayButtonTheme {
  primaryBg: string;
  primaryHoverBg: string;
  primaryText: string;
  primaryBorder: string;
  primaryShadow: string;
  glowBg: string;
  glowHoverBg: string;
  glowShadow: string;
}

export interface ColorPaletteConfig {
  id: PaletteId;
  name: string;
  tagline: string;
  primaryHex: string;
  secondaryHex: string;
  accentHex: string;
  rgbShades: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    "950": string;
    accent: string;
  };
  glowRgb: string;
  accentGlowRgb: string;
  secondaryRgb: string;
  accentRgb: string;
  dayButton: DayButtonTheme;
}

export interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  palette: PaletteId;
  setPalette: (palette: PaletteId) => void;
  customColor: string;
  setCustomColor: (colorHex: string) => void;
  colorFinish: ColorFinish;
  setColorFinish: (finish: ColorFinish) => void;
  activePaletteConfig: ColorPaletteConfig;
  isStudioOpen: boolean;
  setIsStudioOpen: (open: boolean) => void;
  openStudio: () => void;
  closeStudio: () => void;
  toggleMode: () => void;
  resetDefaults: () => void;
  contrastMode: "glass" | "solid";
  setContrastMode: (mode: "glass" | "solid") => void;
}
