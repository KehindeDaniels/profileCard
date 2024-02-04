/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'clr-light-blue': '#1A1B21',
        'clr-sky-blue': '#5093E2',
        'clr-dark-blue': '#161619',
        'clr-light-gray': '#DCDCDC',
        'clr-dark-gray': '#F5F5F5',
        'clr-orange': '#F3BF99' 
      }
    },
  },
  plugins: [],
}

// lighterblue  skyBlue  bodyText  titleClr  orange  darkBlue 