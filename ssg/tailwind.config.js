/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/site/**/*.njk"],
  theme: {
    fontFamily: {
      goblin: ["Goblin One"],
    },
    extend: {
      colors: {
        "sato-yellow": "#F0CA58",
      },
    },
  },
  plugins: [],
};
