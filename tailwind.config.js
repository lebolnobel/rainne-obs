/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Anek Malaya"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        natagora: '#a2b21c',
      },
      scale: {
        200: '2',
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  plugins: [],
};
