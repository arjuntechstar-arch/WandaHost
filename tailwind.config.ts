import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--surface-border)",
        background: "rgb(var(--bg-background-rgb, 7 10 18) / <alpha-value>)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "rgb(var(--surface-rgb, 14 21 38) / <alpha-value>)",
          muted: "rgb(var(--surface-muted-rgb, 19 28 49) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated-rgb, 26 38 66) / <alpha-value>)",
          border: "var(--surface-border)",
        },
        brand: {
          50: "rgb(var(--brand-50-rgb, 238 242 255) / <alpha-value>)",
          100: "rgb(var(--brand-100-rgb, 224 231 255) / <alpha-value>)",
          200: "rgb(var(--brand-200-rgb, 199 210 254) / <alpha-value>)",
          300: "rgb(var(--brand-300-rgb, 165 180 252) / <alpha-value>)",
          400: "rgb(var(--brand-400-rgb, 129 140 248) / <alpha-value>)",
          500: "rgb(var(--brand-500-rgb, 99 102 241) / <alpha-value>)",
          600: "rgb(var(--brand-600-rgb, 79 70 229) / <alpha-value>)",
          700: "rgb(var(--brand-700-rgb, 67 56 202) / <alpha-value>)",
          800: "rgb(var(--brand-800-rgb, 55 48 163) / <alpha-value>)",
          900: "rgb(var(--brand-900-rgb, 49 46 129) / <alpha-value>)",
          950: "rgb(var(--brand-950-rgb, 30 27 75) / <alpha-value>)",
          accent: "rgb(var(--brand-accent-rgb, 139 92 246) / <alpha-value>)",
        },
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
      },
      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "1.05rem" }],
        xs: ["0.84rem", { lineHeight: "1.25rem" }],
        sm: ["0.95rem", { lineHeight: "1.45rem" }],
        base: ["1.0625rem", { lineHeight: "1.65rem" }],
        lg: ["1.2rem", { lineHeight: "1.75rem" }],
        xl: ["1.35rem", { lineHeight: "1.85rem" }],
        "2xl": ["1.65rem", { lineHeight: "2.1rem" }],
        "3xl": ["2.05rem", { lineHeight: "2.45rem" }],
        "4xl": ["2.6rem", { lineHeight: "2.9rem" }],
        "5xl": ["3.35rem", { lineHeight: "1.15" }],
        "6xl": ["4.35rem", { lineHeight: "1.1" }],
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(var(--brand-glow-rgb, 99 102 241), 0.28)",
        "glow-cyan": "0 0 35px -5px rgba(var(--accent-glow-rgb, 6 182 212), 0.28)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at 50% -20%, rgba(99, 102, 241, 0.25), transparent 70%)",
        "mesh-dark": "radial-gradient(at 100% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(6, 182, 212, 0.12) 0px, transparent 50%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        beam: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        beam: "beam 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
