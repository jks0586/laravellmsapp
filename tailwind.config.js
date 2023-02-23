/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        },
    },
    fontSize: {
        lmsmenu:'12px',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    color:{
        border_sidebar_top_border:'#FFF3',
        border_sidebar_bottom_border:'#000000d',
        lmsmenucolor:'#6a7d84',
        lmsmenu:'#6a7d84',
    }
  },
  variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
