/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#D2691E',
        charcoal: '#333333',
        cream: '#F5F5DC',
        'leaf-green': '#2E8B57',
      },
      fontFamily: {
        sans: ['Poppins', 'Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
