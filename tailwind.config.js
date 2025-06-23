/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#ffe0e3',
        'athenaDark': '#692129',
        'athenaYellow': '#f5c04e',
        'athenaReg': '#8c2e37',
      }
    },
    fontFamily: {
      mono: ['Ubuntu Mono', 'monospace'],
      sans: ['Poppins', 'sans-serif'],
    }

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

