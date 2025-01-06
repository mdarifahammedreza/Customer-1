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
        floor: '#8bd0f23d',
        base_900:'#003060', //Navy Blue
        base_600:'#055C9D',//Blue 
        base_500:'#0E86D4',// Blue Grotto
        base_300: '#68BBE3', // Baby Blue
      },
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [daisyui],
}

