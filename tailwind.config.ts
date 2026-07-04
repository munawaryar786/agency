import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0d",
        charcoal: "#171719",
        gold: "#d8a72f",
        "gold-soft": "#f3ce67",
        ivory: "#fff8ec",
        linen: "#f4ead9",
        taupe: "#85786a"
      },
      boxShadow: {
        premium: "0 22px 70px rgba(11, 11, 13, 0.18)",
        glow: "0 18px 45px rgba(216, 167, 47, 0.22)"
      },
      fontFamily: {
        display: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "Manrope", "Segoe UI", "Arial", "sans-serif"]
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, #d8a72f, transparent)"
      }
    }
  },
  plugins: []
};

export default config;
