/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#ff7841',
          500: '#ff5107',
          600: '#e64606',
          700: '#cc3d05',
        },
        surface: '#1a1a1a',
        background: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
