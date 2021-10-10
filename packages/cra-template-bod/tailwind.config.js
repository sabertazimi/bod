module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1890ff',
        secondary: '#40a9ff',
        light: '#f8f9fa',
        dark: '#343a40',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
