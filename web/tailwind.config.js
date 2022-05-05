module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        },
      },
      borderRadius: {
        smMd: '4px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
