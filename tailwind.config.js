/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F4DFF',
        'primary-light': '#5C74FF',
        'primary-dark': '#1a2d8f',
      },
      fontFamily: {
        dm: ["'DM Sans'", 'sans-serif'],
        playfair: ["'Playfair Display'", 'serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { left: '-60%' },
          '100%': { left: '120%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite linear',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
