/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black':'#121212',
      'white': '#f5f5f5',
      'light-grey':'#a6a6a6',
      'dark-grey':'#3d3d3d',
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
        seaweed: ['"Seaweed Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}

