/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#62A8ED',
        'light-accent': '#A3A8A2',
        'dark-accent': '#726780',
        'light-shade': '#F2F2ED',
        'dark-shade': '#283787'
      },
      fontFamily: {
        quicksand: ['quicksand', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
