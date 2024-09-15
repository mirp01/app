module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/(tabs)/**/*.{js,jsx,ts,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        'main': '#aa1155',
        'darker': '#880044',
        'lighter': '#dd1155',
        'yellow': '#ffee88',
        'mint': '#00cc99',
      }
    },
  },
  plugins: [],
}