/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["acid", "dark", "cmyk"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

