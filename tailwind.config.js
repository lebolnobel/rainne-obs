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
        'natagora-100': 'rgba(162, 178, 28, 0.6)',
        'natagora-50': 'rgba(162, 178, 28, 0.4)',
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
