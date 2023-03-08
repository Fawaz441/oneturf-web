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
        input: "#F3F3F8",
        inactive: "#7C7C7C",
        offWhite: "#EFF2FC",
        green: "#43CD8B",
        danger: "#F91A1D",
        gold:"#F1CC51",
        empty:"#DCDCDC"
      },
      fontSize: {
        "30": "30px",
        "13": "13px",
        "15": "15px",
        "25":"25px"
      },
      boxShadow: {
        'small': '0px 5px 7px rgba(0, 0, 0, 0.06)',
        'shadow': '0px 10px 20px rgba(0, 0, 0, 0.11)',
        'large': '0px 14px 24px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'form': '3px',
        '5': '5px',
        '10': '10px'
      }
    },
  },
  plugins: [],
}