/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#ec883d',
        'lightGold': '#d19e1b',
        'white': '#F3F7EC',
        'navyBlue': '#1d2a38',
        'lightGray': '#faf7f0',
        'blue': '#2b60a8',
        'brown': '#222520'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'headerBackground': ' linear-gradient(#0000009f,#0000009f), url(./src/assets/people.avif)'
      }
    },
  },
  plugins: [],
}

