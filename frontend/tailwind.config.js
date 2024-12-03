/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      extend: {
        fontFamily: {
          sans: ['Helvetica', 'Arial', 'sans-serif'],
          silkscreen: ['Silkscreen', 'cursive'],
        },
        screens: {
          xs: '300px',
          ms: '450px',
          sm: '600px',
          md: '768px',
          lg: '1068px',
          xl: '1400px',
        },
        colors: {
          'blue': '#1fb6ff',
          'purple': '#a600ff',
          'pink': '#ff49db',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
        },
        backgroundImage: {
          'pp-gradient': 'linear-gradient(to right, #9600CC, #ff00f7)',
          'dark-text-gradient': 'linear-gradient(to right, #B372CF, #FFFFFF, #B372CF)',
          'pink-blue-gradient': 'linear-gradient(to right, rgb(247, 12, 204), rgb(0, 106, 255))',
          'h2-white-gradient': 'linear-gradient(to right, #B4B4B4, #FFFFFF, #B4B4B4)',
          'dark-blue-pp': 'linear-gradient(to right, #190042, #200022)',
          'blue-gradient' : 'linear-gradient(to right, #190042, #0320BD,#190042 )',
          'dark-blue-pp-bg': 'linear-gradient(to top left, #200022, #190042, #020617, #020617, #000000 )',

          'light-blue-gradient': 'linear-gradient(to right, #04DBDB, #0804DB)',
          'profil-gradient-light': 'linear-gradient(to bottom, #FFFFFF, #C5C5C5, #828282)',
          'hero-gradient-light': 'linear-gradient(to top right, #9CE6FF, #FFFFFF, #FFFFFF)'
          
        },   
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

