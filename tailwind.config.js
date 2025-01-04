/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        floor: '#F3F4F6', // Custom floor color
        header: '#', // Custom green color
      },
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [daisyui],
}

