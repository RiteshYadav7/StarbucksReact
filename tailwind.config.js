const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#f1f8f6",
        200: "#d4e9e2",
        300: "#008248",
        400: "#1e3932",
      },
      secondary: "#f3f1e7",
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      warn: colors.red,
      success: colors.green,
    },
    fontFamily: {
      sans: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    extend: {
      fontSize: {
        13: "0.8125rem",
      },
      backgroundImage: {
        hero: "url('./img/star.webp')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
