/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        reactLogo: "url('./src/images/react-icon-large.png')",
      },
      backgroundSize: {
        '30%': '30%',
      },
      backgroundPosition: {
        'half-up': 'right top 5rem',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
