/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: '#1a1b2e',
          900: '#0f1016',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      },
    },
  },
  plugins: [],
};