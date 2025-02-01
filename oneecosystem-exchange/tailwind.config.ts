import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#ffd586",  // Gold color for accents and text
        black: "#131313", // Pure black for backgrounds
        white: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
