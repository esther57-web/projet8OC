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
          sm: '600px',
          md: '768px',
          lg: '950px',
          xl: '1440px',
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
          'dark-text-gradient': 'linear-gradient(to bottom, #FFFFFF, #B372CF)',
          'light-text-gradient': 'linear-gradient(to bottom, #000000, #B372CF)',
          'pink-blue-gradient': 'linear-gradient(to right, rgb(250, 78, 10), rgb(247, 12, 204), rgb(0, 106, 255), rgb(48, 248, 255))'
          
        },   
    },
  },
  plugins: [],
}

