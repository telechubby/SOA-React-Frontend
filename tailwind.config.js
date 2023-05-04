/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [typography, forms],
}
