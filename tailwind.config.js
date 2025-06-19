/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'backgroundColor': '#150C21',
      'athena-dark': '#692129',
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

