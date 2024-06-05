/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     backgroundImage: {
        'gradient-to-b-custom': 'linear-gradient(to bottom, rgba(51, 164, 227, 0.6), rgba(176, 239, 179, 0.6))',
      },
      fontFamily: {
        open:["Open Sans"]
      }
    },
  },
  plugins: [],
}

