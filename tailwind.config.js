module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#091E80",
        primary1: "#F1F3FE",
        secondary: "#4D4D4D",
        secondary1: "#333333",
        lightBlue: "#1138EE",
      },
      height: {
        500: "500px",
      },
      width: {
        500: "500px",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
