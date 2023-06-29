import colors from 'vuetify/es5/util/colors'

export default {
  ssr: true,
  env: {
    BASE_URL: 'https://bitgol.cash/',
    LOCAL: 'http://localhost:3002/'
  },
  publicRuntimeConfig: {
    BASE_URL: 'https://bitgol.cash/',
    LOCAL: 'http://localhost:3002/'
  },
  server: {
    host: '0' // default: localhost
  },
  privateRuntimeConfig: {},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - BitGol',
    title: 'BitGol',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/native-websocket.js', ssr: false },
    // { src: '~plugins/calendar.js', ssr: false },
    '~plugins/sharing.js',
    '~plugins/services.js',
    { src: '~plugins/forward-set-cookies.js', mode: 'server' }
  ],
  // proxy: {
  //   "/hub": {
  //     target: "https://b2t-api-cmc-staging-5.flexprotect.org/",
  //     ws: true,
  //   }, // signalr endpoint
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/base/foo'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt'
    // 'nuxt-socket-io',
    // '~/modules/ws'
    // '~/io'
  ],
  // env: {
  //   WS_URL: process.env.WS_URL || 'http://localhost:3000'
  // },
  //Options for socket.io
  // io: {
  //   // we could have multiple sockets that we identify with names
  //   // one of these sockets may have set "default" to true
  //   sockets: [{
  //     default: true, // make this the default socket
  //     name: 'main', // give it a name that we can later use to choose this socket in the .vue file
  //     url: 'http://localhost:3000/' // URL wherever your socket IO server runs
  //   }]
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://bitgol.cash/',
    baseURL: 'http://localhost:3002/api/v2/'
  },

  /*
  ** Auth module configuration
  */
  auth: {
    strategies: {
      cookie: {
        scheme: 'cookie',
        endpoints: {
          login: { url: '/users/login', method: 'post', propertyName: 'user' },
          // user: { url: '/users/current-user', method: 'get', propertyName: false },
          user: false
        },
        cookie: {
          name: 'connect.sid',
          options: {
            secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS in production
            required: true,
            httpOnly: true
          }
        },
        user: {
          property: 'data.user' // Set the property path to access the user data
        }
      }
    }
  },

  router: {
    middleware: ['session']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {

      config.node = {
          fs: 'empty'
      }

      config.resolve.symlinks = false


      // ....
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  },

  // serverMiddleware: ['~/server-middleware/socket-io-server']
}
