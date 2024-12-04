/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "azul": '#4998B4',
        'amarelo': '#FAD55C',
        "orange": '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
    fontFamily: {
      "montserrat" : ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

