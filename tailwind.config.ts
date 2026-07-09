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
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      colors: {
        // VoiceChess palette, Duolingo-flat style (matches mobile wcagColors.ts)
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
        line: "#E5E5E5",
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
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
