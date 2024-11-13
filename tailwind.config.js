/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsl(246, 80%, 60%)',
        'custom-redwork': 'hsl(15, 100%, 70%)',
        'custom-blueplay': 'hsl(195, 74%, 62%)',
        'custom-redstudy': 'hsl(348, 100%, 68%)',
        'custom-greenexercise': 'hsl(145, 58%, 55%)',
        'custom-violetsocial': 'hsl(264, 64%, 52%)',
        'custom-orangeselfcar': 'hsl(43, 84%, 65%)',
        'custom-verydarkblue': 'hsl(226, 43%, 10%)',
        'custom-darkblue': 'hsl(235, 46%, 20%)',
        'custom-desaturatedblue': 'hsl(235, 45%, 61%)',
        'custom-paleblue': 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        'rubik': ["Rubik", "sans-serif"]
      },
      fontSize: {
        "last-hrs": "15px",
        "titles": "18px",
        "name": "40px",
        "hrs": "60px"
      }
    },
  },
  plugins: [],
}

