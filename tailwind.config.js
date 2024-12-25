/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBgColor: '#F5F5DC', 
        anotherColor: '#F59E0B',
      },
    },
  },
  plugins: [],
}