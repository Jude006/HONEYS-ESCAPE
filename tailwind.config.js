/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#1A1A2E',        // Dark Navy for text and navbar
        'secondary': '#fff', // Soft Beige for background
        'accent': '#2095AE',           // Honey Yellow for buttons and highlights
      },
      // Custom fonts for a travel vibe
      fontFamily: {
        'Montserrat': ['Montserrat', 'serif'], // Elegant, stylish font for headings
        'poppins': ['"Poppins"', 'sans-serif'],        // Clean, modern font for body text
      },
   
    },
  },
  plugins: [],
}
