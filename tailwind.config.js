/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#EC4899',
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        ar: ['Cairo', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
