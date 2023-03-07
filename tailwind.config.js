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
        primary: "#1769FF",
        lightBlue: "#EFF2FC",
        extraBlue: "#2651EA",
        border: "#E5E5E5",
        dark: "#231F1F",
        input: "#F3F3F8"
      },
      fontSize: {
        "30": "30px",
        "13": "13px"
      },
      boxShadow: {
        'shadow': '0px 10px 20px rgba(0, 0, 0, 0.11)',
      },
      borderRadius: {
        'form': '3px',
        '5': '5px'
      }
    },
  },
  plugins: [],
}