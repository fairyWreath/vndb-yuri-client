const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#fdc6bf",
        accentPrimary: "#f5d9d8",
        accentSecondary: "#fcf7fb",
        dark: "#748899",
        darkAccent: "#a0a9b0",
        light: "#f9f9ed",
        white: "#ffffff",
        black: "#000000",
        secondary: "#f5cee8",
      },
      fontFamily: {
        overlock: ["Overlock"],
      },
      maxWidth: {
        screenImageLarge: "960px",
        screenImageMedium: "768px",
      },
      maxHeight: {
        screenImageLarge: "540px",
        screenImageMedium: "432px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
