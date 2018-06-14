const pkg = require("./package")
const title = "Where is ZEDD"

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {

  },

  router: {
    base: '/whereiszedd/'
  },

  manifest: {
    name: title,
    author: pkg.author,
    description: pkg.description,
    theme_color: "#dee2e6",
    lang: "ko"
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#dee2e6" },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/pwa",

    "@nuxtjs/toast",

    "nuxt-leaflet",

    ["@nuxtjs/moment", ["ko"]],

    "bootstrap-vue/nuxt",

    [
      "nuxt-validate",
      {
        lang: "ko"
      }
    ],

    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-89261637-5"
      }
    ],

    "@nuxtjs/sitemap"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  toast: {
    duration: 2000
  },

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://gracefullight.github.io/whereiszedd/",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    routes: [
      {
        url: "/",
        changefreq: "weekly",
        priority: 1
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        "postcss-cssnext": {
          features: {
            customProperties: false
          }
        }
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
