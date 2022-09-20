/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "on-yellow": {
        500: "#8F7833"
      },
      "grey": {
        100: "#484848",
        200: "#666666",
        300: "#777777",
        400: "#8D8D8D",
        500: "#949494",
        600: "#AFAFAF",
        700: "#C6C6C6",
        800: "#DFDFDF",
        900: "#EBEBEB"
      },
      "blue": {
        100: "#0B3543",
        200: "#0B495E",
        300: "#00526A",
        400: "#0F667F",
        500: "#4D8597",
        600: "#69A6BA",
        700: "#97C5D4",
        800: "#A4D8E9",
        900: "#C4EBF8" 
      },
      "yellow": {
        100: "#614900",
        200: "#89690A",
        300: "#B0880F",
        400: "#DEB436",
        500: "#F0CA58",
        600: "#F3D169",
        700: "#F6D77A",
        800: "#FEEBB1",
        900: "#FEEBB1" 
      }
    },
    extend: {},
  },
  plugins: [],
}
