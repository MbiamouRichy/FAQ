/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: { 
      fontFamily: {
      'sans': ['Mulish', 'sans-serif'],
      'awesome': ['Font Awesome Free'],
      },
      borderRadius: {
        circle: ['50%']
      }
  }
  },
  plugins: [],
}

