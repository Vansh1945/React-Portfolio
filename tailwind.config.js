/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify where to look for classes
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Playfair Display"', 'serif'], 
      },
    },
  },
  plugins: [],
};
