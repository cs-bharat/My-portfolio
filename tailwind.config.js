/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // 'herobg' :"url('/assets/herobg.png')",
      }
    },
  },
  plugins: [require('daisyui'),],
}
