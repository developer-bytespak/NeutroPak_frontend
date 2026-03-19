/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fff4e0',
          200: '#ffe8c1',
          300: '#ffd98a',
          400: '#ffcc66',
          500: '#daa520',
          600: '#b8860b',
          700: '#996600',
          800: '#804020',
          900: '#5c2c0f',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
