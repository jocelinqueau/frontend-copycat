import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme";


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'redaction': ["Redaction-Regular", ...defaultTheme.fontFamily.sans],
        'redaction-bold': ["Redaction-Bold", ...defaultTheme.fontFamily.sans],
        'redaction-italic': ["Redaction-Italic", ...defaultTheme.fontFamily.sans],
        'redaction-10': ["Redaction_10-Regular", ...defaultTheme.fontFamily.sans],
        'redaction-10-italic': ["Redaction_10-Italic", ...defaultTheme.fontFamily.sans],
        'redaction-20': ["Redaction_20-Regular", ...defaultTheme.fontFamily.sans],
        'redaction-20-italic': ["Redaction_20-Italic", ...defaultTheme.fontFamily.sans],
        'redaction-35': ["Redaction_35-Regular", ...defaultTheme.fontFamily.sans],
        'redaction-35-italic': ["Redaction_35-Italic", ...defaultTheme.fontFamily.sans],
        'redaction-35-bold': ["Redaction_35-Bold", ...defaultTheme.fontFamily.sans],
        'redaction-50': ["Redaction_50-Regular", ...defaultTheme.fontFamily.sans],
        'redaction-50-italic': ["Redaction_50-Italic", ...defaultTheme.fontFamily.sans],
        'redaction-70': ["Redaction_70-Regular", ...defaultTheme.fontFamily.sans],
        'redaction-70-italic': ["Redaction_70-Italic", ...defaultTheme.fontFamily.sans],
        'redaction-100': ["Redaction_100-Regular", ...defaultTheme.fontFamily.sans],
        'redaction-100-italic': ["Redaction_100-Italic", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@domchristie/tailwind-utopia')],
} satisfies Config

export default config

// https://utopia.fyi/type/calculator?c=320,16,1.2,1024,24,1.25,5,2&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,2xl,12