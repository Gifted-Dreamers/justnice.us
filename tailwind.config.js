/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './blog/**/*.html',
    './ice-activity/**/*.html',
    './_partials/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#8B1A2B',
        gold: '#F5A623',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
