import { describe, it, expect } from "vitest";
import {
  hexToRgb,
  rgbToHex,
  hexToHsl,
  hslToRgb,
  generateCustomPalette,
  getPaletteConfig,
  PRESET_PALETTES,
} from "@/lib/theme/colorPalettes";
import { PaletteId } from "@/types/theme";

describe("Theme & Color Customization Engine", () => {
  describe("Color Conversion Utilities", () => {
    it("converts standard 6-digit hex to RGB accurately", () => {
      const rgb = hexToRgb("#6366F1");
      expect(rgb).toEqual({ r: 99, g: 102, b: 241 });
    });

    it("converts shorthand 3-digit hex to RGB accurately", () => {
      const rgb = hexToRgb("#FFF");
      expect(rgb).toEqual({ r: 255, g: 255, b: 255 });
    });

    it("falls back gracefully for invalid hex input", () => {
      const rgb = hexToRgb("invalid-color");
      expect(rgb).toEqual({ r: 99, g: 102, b: 241 });
    });

    it("converts RGB back to hex correctly", () => {
      const hex = rgbToHex(16, 185, 129);
      expect(hex.toLowerCase()).toBe("#10b981");
    });

    it("converts hex to HSL and back to RGB with minimal rounding error", () => {
      const originalHex = "#06B6D4";
      const { h, s, l } = hexToHsl(originalHex);
      expect(h).toBeGreaterThanOrEqual(180);
      expect(h).toBeLessThanOrEqual(200);

      const rgb = hslToRgb(h, s, l);
      const originalRgb = hexToRgb(originalHex);
      // Ensure closely matched RGB channels within integer rounding tolerance (<= 2)
      expect(Math.abs(rgb.r - originalRgb.r)).toBeLessThanOrEqual(2);
      expect(Math.abs(rgb.g - originalRgb.g)).toBeLessThanOrEqual(2);
      expect(Math.abs(rgb.b - originalRgb.b)).toBeLessThanOrEqual(2);
    });
  });

  describe("Preset Palettes", () => {
    const presetIds: Exclude<PaletteId, "custom">[] = [
      "indigo",
      "cyan",
      "emerald",
      "rose",
      "violet",
      "amber",
      "blue",
    ];

    it("contains all 7 required preset palettes", () => {
      presetIds.forEach((id) => {
        expect(PRESET_PALETTES[id]).toBeDefined();
        expect(PRESET_PALETTES[id].id).toBe(id);
        expect(PRESET_PALETTES[id].primaryHex).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });

    it("has complete 50-950 shade scales for all presets", () => {
      const requiredShades = [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
        "accent",
      ];

      presetIds.forEach((id) => {
        const palette = PRESET_PALETTES[id];
        requiredShades.forEach((shade) => {
          expect(palette.rgbShades[shade as keyof typeof palette.rgbShades]).toBeDefined();
          // Each RGB string should be format "R G B"
          const parts = palette.rgbShades[shade as keyof typeof palette.rgbShades].split(" ");
          expect(parts).toHaveLength(3);
          parts.forEach((p) => {
            const val = parseInt(p, 10);
            expect(val).toBeGreaterThanOrEqual(0);
            expect(val).toBeLessThanOrEqual(255);
          });
        });
      });
    });
  });

  describe("Dynamic Custom Palette Generator", () => {
    it("generates a full palette from any arbitrary hex color", () => {
      const customHex = "#EC4899"; // Vibrant Pink
      const palette = generateCustomPalette(customHex);

      expect(palette.id).toBe("custom");
      expect(palette.primaryHex).toBe(customHex);
      expect(palette.rgbShades["500"]).toBeDefined();
      expect(palette.rgbShades["50"]).toBeDefined();
      expect(palette.rgbShades["950"]).toBeDefined();
      expect(palette.glowRgb).toBeDefined();

      // Check format
      expect(palette.glowRgb.split(" ")).toHaveLength(3);
    });

    it("retrieves preset or generates custom palette via getPaletteConfig", () => {
      const indigo = getPaletteConfig("indigo");
      expect(indigo.id).toBe("indigo");

      const custom = getPaletteConfig("custom", "#10B981");
      expect(custom.id).toBe("custom");
      expect(custom.primaryHex).toBe("#10B981");
    });
  });

  describe("Day & Night Mode Contrast Standards", () => {
    it("ensures light mode background and foreground have high contrast", () => {
      // Light mode uses --background: #f8fafc and --foreground: #090d16
      const lightBg = hexToRgb("#f8fafc");
      const lightFg = hexToRgb("#090d16");
      // Compute relative luminance approximation
      const lumBg = (0.299 * lightBg.r + 0.587 * lightBg.g + 0.114 * lightBg.b) / 255;
      const lumFg = (0.299 * lightFg.r + 0.587 * lightFg.g + 0.114 * lightFg.b) / 255;
      const contrast = (lumBg + 0.05) / (lumFg + 0.05);
      // WCAG AAA requires >= 7:1 for normal text
      expect(contrast).toBeGreaterThanOrEqual(7);
    });

    it("ensures dark mode background and foreground have high contrast", () => {
      // Dark mode uses --background: #070a12 and --foreground: #f8fafc
      const darkBg = hexToRgb("#070a12");
      const darkFg = hexToRgb("#f8fafc");
      const lumBg = (0.299 * darkBg.r + 0.587 * darkBg.g + 0.114 * darkBg.b) / 255;
      const lumFg = (0.299 * darkFg.r + 0.587 * darkFg.g + 0.114 * darkFg.b) / 255;
      const contrast = (lumFg + 0.05) / (lumBg + 0.05);
      expect(contrast).toBeGreaterThanOrEqual(7);
    });

    it("ensures midnight OLED mode background and foreground have maximum contrast", () => {
      // OLED mode uses --background: #000000 and --foreground: #f8fafc
      const oledBg = hexToRgb("#000000");
      const oledFg = hexToRgb("#f8fafc");
      const lumBg = (0.299 * oledBg.r + 0.587 * oledBg.g + 0.114 * oledBg.b) / 255;
      const lumFg = (0.299 * oledFg.r + 0.587 * oledFg.g + 0.114 * oledFg.b) / 255;
      const contrast = (lumFg + 0.05) / (lumBg + 0.05);
      expect(contrast).toBeGreaterThanOrEqual(15);
    });
  });
});
