import daisyui from 'daisyui';
import scrollbarHide from 'tailwind-scrollbar-hide';
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        floor: '#fffff',     // Incorrect hex, might need fixing
        base_900: '#003060', // Navy Blue
        base_600: '#055C9D', // Blue
        base_500: '#0E86D4', // Blue Grotto
        base_300: '#68BBE3', // Baby Blue
        Teal_900: '#1f4e5f', // Teal
        Teal_800: '#2a6b7d', // 10% lighter shade of Teal
        Teal_700: '#2e7b8b', // 20% lighter shade of Teal
        Coral_900:'#ff5e62', // Coral
        Coral_800:'#ff6f61', // Coral
        Golden_900: '#ffbe0b', // Golden
        Golden_800: '#ffc857', // Golden
        Corcol_Gray_900:'#444444', //Gray
        Corcol_Gray_800:'#555555', //Gray
        

      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    daisyui,
    scrollbarHide,
    addVariablesForColors, // Add the custom plugin
  ],
};

// Custom plugin: Adds each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
