module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          200: '#B06E37',
          300: '#D5B038',
          400: '#CD9900',
          500: '#A57D02',
          600: process.env.DEFAULT_AGENT,
        },
        dark: '#1f2937',
        test: process.env.TW_COLOR || '#B06E37',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      smmax: { max: '640px' },
      mdmax: { max: '768px' },
      lgmax: { max: '1024px' },
      xlmax: { max: '1280px' },
      '2xlmax': { max: '1536px' },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
