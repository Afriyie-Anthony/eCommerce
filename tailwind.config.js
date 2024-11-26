/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*{html,js}",
    "./src/html/**/*{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/public/images/bg.png')",
        'contact': "url('/public/images/Contact-us-pana.png')",
      }
    },
  },
  plugins: [],
}