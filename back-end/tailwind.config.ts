import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scrollbar: {
        thin: "thin",
        thumb: {
          DEFAULT: "rgba(100, 100, 100, 0.6)", // Скроллбарын өнгийг тодорхойлоход ашиглана
          hover: "rgba(150, 150, 150, 0.8)", // Скроллбарын өнгийг хөвж буй үед өөрчилнө
        },
        track: {
          DEFAULT: "rgba(200, 200, 200, 0.3)", // Скроллбарын замын өнгийг тодорхойлоход ашиглана
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // `tailwind-scrollbar` плагин
    // Бусад плагин
  ],
};

export default config;
