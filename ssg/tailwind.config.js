/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.html"],
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
