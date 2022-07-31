/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '1/2': '1 / 2',
        '2/1': '2 / 1',
      },
    },
    screens: {
      bm: '500px',
      lm: '988px',
      lg: '1078px',
      xl: '1266px',
      tall: {
        raw: '(min-height: 615px)',
      },
    },
  },
  plugins: [],
};
