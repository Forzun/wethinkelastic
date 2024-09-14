/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{ 
        custom:['custom'], 
        custom1:['custom1'],
        custom3:['custom3'],
      }
    },
  },
  plugins: [],
}

