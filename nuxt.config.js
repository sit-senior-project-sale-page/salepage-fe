export default {
  ssr: false,
  target: 'server',
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || '12130',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SALEPAGE',
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        src: 'https://code.iconify.design/2/2.1.2/iconify.min.js',
      },
      {
        src: 'tw-elements/index.min.js',
        body: true,
      },
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
      {
        hid: 'keywords',
        name: 'keywords',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'color-scheme', content: 'light only' },
      { name: 'color-scheme', content: 'light only' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: '/thumbnail.png' },
      {
        hid: 'og:title',
        name: 'og:title',
      },
      {
        hid: 'og:description',
        name: 'og:description',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap'
      //   // https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
      // },
    ],
  },
  render: {
    bundleRenderer: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type);
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/http',
    '~/plugins/helper',
    '~/plugins/axios.js',
    '~/plugins/iconify',
    { src: '~/plugins/splide.client.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
        defaultImage: '/skeleton-card.webp',
      },
    ],
  ],

  moment: {
    defaultTimeZone: 'Asia/Bangkok',
  },

  sweetalert: {},

  toast: {
    position: 'bottom-center',
    theme: 'toasted-primary',
    duration: 2500,
    singleton: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.up4sale.shop',
    // credentials: true,
    // proxy: true,
  },
  // proxy: {
  //   '/api/': {
  //     target: process.env.API_BASE_URL,
  //     pathRewrite: { '^/api/': '' },
  //   },
  // },

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: true,
    },
  },

  router: {
    // middleware: ['auth'],
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.accessToken',
          type: 'Bearer',
        },
        user: {
          property: 'data',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'POST' },
          refresh: false,
          user: { url: '/api/user/profile', method: 'GET' },
          logout: false,
        },
      },
    },
    // redirect: false
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
