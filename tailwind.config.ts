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
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CC6A",
          dark: "#B8960C",
          soft: "#F3E3A6",
          deep: "#b8932e",
        },
        ivory: {
          DEFAULT: "#f8f4ec",
          dark: "#f3ecdd",
        },
        charcoal: {
          DEFAULT: "#141210",
          light: "#2b2722",
        },
        muted: "#7a726a",
        border: "#e7ded0",
        cream: "#f8f4ec",
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 4px 24px rgba(212,175,55,0.14)",
        "luxury-lg": "0 14px 40px rgba(212,175,55,0.22)",
        card: "0 4px 14px rgba(20,18,16,0.06)",
        "card-hover": "0 14px 40px rgba(20,18,16,0.10)",
        gold: "0 14px 36px rgba(184, 147, 46, 0.28)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        ticker: "ticker 32s linear infinite",
        "gold-shimmer": "gold-shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
