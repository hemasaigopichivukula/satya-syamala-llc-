import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#082B50", dark: "#041C33" },
        gold: { DEFAULT: "#C79A3B", light: "#E7CF9B" },
        surface: "#F7F8FA",
        ink: "#1F2937",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(4, 28, 51, 0.09)",
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "Segoe UI", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
