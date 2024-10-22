/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4E342E',   // Rich Brown for navbar, body text
        'secondary': '#FFECB3', // Soft Amber for background
        'accent': '#D4AF37',    // Gold for buttons and highlights
        'hoverGreen': '#2F5233',// Rich Forest Green for hover effects and subtle accents
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'serif'],  // Elegant font for headings
        'poppins': ['Poppins', 'sans-serif'],   // Modern, clean font for body text
      },
    },
  },
  plugins: [],
};
