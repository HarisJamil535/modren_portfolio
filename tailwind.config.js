/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'b62641',
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:"3rem",
          md:"4rem",
          lg:"5rem"
        }
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      }

    },
  },
  plugins: [],
}

