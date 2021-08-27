const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#fdc6bf",
      accent: "#fcf7fb",
      dark: "#748899",
      light: "#f9f9ed",
      white: "#ffffff",
      black: "#000000",
      secondary: "#f5cee8",
    },
    fontFamily: {
      overlock: ["Overlock"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
