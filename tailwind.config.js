/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave': "url('/assets/fondos/waveMain.svg')", 
        'top-wave': "url('/assets/fondos/top-wave.svg')", 
        'poligon': "url('/assets/fondos/poligon.svg')", 
      },
      colors: {
        'green-vogue': {
          '50': '#f1f8fe',
          '100': '#e3eefb',
          '200': '#c0def7',
          '300': '#88c3f1',
          '400': '#49a4e7',
          '500': '#2189d6',
          '600': '#136bb6',
          '700': '#115693',
          '800': '#124a7a',
          '900': '#153f65',
          '950': '#113153',
        } 
      }
    },
  },
  plugins: [],
};
