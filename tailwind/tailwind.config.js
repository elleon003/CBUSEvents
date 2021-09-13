module.exports = {
  mode: 'jit',
  purge: [
    '../*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        DEFAULT: '#01539A',
        light: '#0181F1',
        dark: '#013D72'
      },
      gray: {
        DEFAULT: '#E7E7E7',
      },
      white: {
        DEFAULT: '#FCFCFC'
      },
      orange: {
        DEFAULT: '#F9C784',
        dark: '#FC7A1E'
      },
      black: {
        DEFAULT: '#000B14'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      display: ['Georama', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
