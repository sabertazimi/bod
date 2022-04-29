module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
