/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Fraunces", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "var(--color-paper)",
        "paper-2": "var(--color-paper-2)",
        "paper-muted": "var(--color-paper-muted)",
        ink: "var(--color-ink)",
        "ink-2": "var(--color-ink-2)",
        "ink-muted": "var(--color-ink-muted)",
        rule: "var(--color-rule)",
        primary: "var(--color-accent)",
        "primary-hover": "var(--color-accent-hover)",
        secondary: "var(--color-accent)",
        dark: "var(--color-paper-dark, oklch(18% 0.01 260))",
        "dark-lighter": "var(--color-paper-dark-2, oklch(22% 0.012 260))",
        "header-bg": "var(--color-header-bg)",
      },
      borderColor: {
        DEFAULT: "var(--color-rule)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
