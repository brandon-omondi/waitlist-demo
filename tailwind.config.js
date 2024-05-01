import { orange } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    // colors: {
    //   "ora": "#F58A4D",
    //   "pur": "#656EF4",
    // },
    extend: {
      // backgroundImage: {
      //   "big":"url(../assets/bg-image.jpg)"
      // },
    },
  },
  plugins: [],
}