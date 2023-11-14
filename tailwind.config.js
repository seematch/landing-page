/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#4E4AD9",
          
 "secondary": "#958BB6",
          
 "accent": "#F6EBFF",
          
 "neutral": "#FEFEDF",
          
 "base-100": "#11102F",
          
 "info": "#4DD2FF",
          
 "success": "#76F55F",
          
 "warning": "#FFD84D",
          
 "error": "#FF734D",
          },
        },
      ],
    },
  plugins: [require("daisyui"),  require('@tailwindcss/container-queries'),],
}

