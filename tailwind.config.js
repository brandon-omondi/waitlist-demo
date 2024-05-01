import { orange } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        cards:"#3A3A3A",
      },
      
    },
    fontFamily:{
      poppins:["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}