/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00833E",
        secondary: "#68B336",
      },
      fontFamily: {
        bodyfont: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite", "tw-elements/dist/plugin.cjs")],
};
