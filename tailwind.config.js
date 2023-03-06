/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#7C5DFA',
        'purple-open': '#9277FF',
        'dark': '#1E2139',
        'dark-open': '#252945',
        'grey-open': '#DFE3FA',
        'grey': '#888EB0',
        'silver': '#7E88C3',
        'black': '#0C0E16',
        'red': '#EC5757',
        'light': '#F8F8FB',
        'black-dark': '#141625',
        'stroke': '#9797974d',
        'green': '#33D69F',
        'green-light': '#33d69f30',
        'orange': '#ff8f0054',
        'orange-light': '#FF8F00',
        'black': '#373b534a',
        'black-light': '#373b53',
        'white': '#fff',
      },
  },
  plugins: [],
}