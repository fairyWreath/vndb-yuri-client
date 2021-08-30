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
      minWidth: {
        titleImageMedium: "20vw",
      },
      maxWidth: {
        screenImageLarge: "960px",
        screenImageMedium: "768px",
        titleImageMedium: "28rem",
        titleImageLarge: "32rem",
      },
      maxHeight: {
        screenImageLarge: "540px",
        screenImageMedium: "432px",
        titleImageMedium: "24rem",
        titleDetailsContainer: "32rem",
        titleDetailsDescription: "20rem",
      },
      minHeight: {
        titleImageMedium: "24rem",
        titleDetailsContainer: "32rem",
        titleDetailsDescription: "20rem",
      },
      width: {
        titleImageMedium: "28rem",
        titleImageLarge: "32rem",
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
