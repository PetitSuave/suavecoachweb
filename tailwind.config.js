/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        'primary-text': '#d8c348',
        'violet-dust': '#4a4469',
        'teal-dust': '#2f8f94',
        'light-background': '#F7F7F7',
        'dark-background': '#181818',
        'black': '#000000',
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
