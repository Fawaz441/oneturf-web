/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "'Manrope', sans-serif"
    },
    extend: {
      colors: {
        primary: "#1769FF"
      },
      fontSize: {
        "30": "30px"
      }
    },
  },
  plugins: [],
}