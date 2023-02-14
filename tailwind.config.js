/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'purple-b':'#260C40',
        'purple-lb': '#89618A',
        'purple-l': '#C099E4',
        'purple-lbb': '#62326A',
      },
    },
  },
  plugins: [],
}
