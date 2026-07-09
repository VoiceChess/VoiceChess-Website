import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Duolingo-style warm palette (matches mobile wcagColors.ts)
        brand: {
          yellow: "#F5A623",
          yellowLight: "#FFC857",
          yellowDark: "#E68A00",
          yellowBg: "#FFF8E7",
        },
        sky: {
          DEFAULT: "#4A90E2",
          light: "#7FB3F0",
          dark: "#2E5C8A",
          bg: "#E8F4FD",
        },
        ink: {
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
        },
        line: "#EEEEEE",
        // Semantic (WCAG AA)
        primary: {
          DEFAULT: "#F5A623",
          foreground: "#212121",
          hover: "#E68A00",
        },
        secondary: {
          DEFAULT: "#4A90E2",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F5A623",
          foreground: "#212121",
          hover: "#E68A00",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          light: "#FFF8E7",
        },
        text: {
          primary: "#212121",
          secondary: "#616161",
        },
        success: { DEFAULT: "#059669", bg: "#D1FAE5" },
        danger: { DEFAULT: "#DC2626", bg: "#FEE2E2" },
        info: { DEFAULT: "#2563EB", bg: "#DBEAFE" },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
      boxShadow: {
        // Chunky Duolingo-style hard drop shadows
        chunky: "0 6px 0 0 rgba(230, 138, 0, 0.35)",
        "chunky-blue": "0 6px 0 0 rgba(46, 92, 138, 0.35)",
        "chunky-sm": "0 4px 0 0 rgba(230, 138, 0, 0.30)",
        card: "0 10px 24px -6px rgba(230, 138, 0, 0.20)",
        "card-blue": "0 10px 24px -6px rgba(46, 92, 138, 0.20)",
        pop: "0 12px 32px -8px rgba(33, 33, 33, 0.18)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        float: "float 4s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
