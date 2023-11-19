/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    fontFamily:{
      Poppins: "'Poppins', sans-serif",
      OpenSans:"'Open Sans', sans-serif",
      Merriweather:"'Merriweather', serif"
    }
  },
  daisyui: {
    themes: [ "cupcake"],
  },
  plugins: [require("daisyui")],
}

