import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foreground": "rgb(var(--foreground-rgb))",
        "background": "rgb(var(--background-end-rgb))",
      },
      backgroundImage: {
        "foreground": "rgb(var(--foreground-rgb))",
        "background": "rgb(var(--background-end-rgb))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@domchristie/tailwind-utopia')],
};
export default config;
