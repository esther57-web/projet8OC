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
          xs: '320px',
          sm: '480px',
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
        },   
    },
  },
  plugins: [],
}

