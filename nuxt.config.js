import colors from 'vuetify/es5/util/colors'
const pkg = require('./package')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',  
  // target: 'server',  
  ssr: false,
  // serverMiddleware: ['~/server-middleware/override404'],
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Adelan Tequila',
    title: 'Adelan Tequila',
    htmlAttrs: {
      lang: ['es', 'en']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tequila Adelan. Sitio Oficial' },
      { 'http-equiv':"cache-control", content='max-age=0'},
      {'http-equiv':"cache-control", content="no-cache"}
      {'http-equiv':"expires", content="0"}
      {'http-equiv':"expires", content="Tue, 01 Jan 1980 1:00:0}"}
      {'http-equiv':"pragma", content="no-cache"}

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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '~/modules/writeRoutesToFile'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
  },
  // generate: {
  //   fallback: '404.html'
  // }

}
