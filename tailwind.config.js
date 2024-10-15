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
          'light-text-gradient': 'linear-gradient(to bottom, #000000, #B372CF)',
          'pink-blue-gradient': 'linear-gradient(to right, rgb(247, 12, 204), rgb(0, 106, 255))',
          'h2-white-gradient': 'linear-gradient(to right, #B4B4B4, #FFFFFF, #B4B4B4)',
          'dark-blue-pp': 'linear-gradient(to right, #190042, #200022)',
          'blue-gradient' : 'linear-gradient(to right, #190042, #0320BD,#190042 )'
          
        },   
    },
  },
  plugins: [],
}

