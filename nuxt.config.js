export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ERIC - Education Resource',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',
    'boxicons/css/boxicons.min.css',
    'vue-form-wizard/dist/vue-form-wizard.min.css',

    //todo:home Layout assets
    {src:"~assets/home/app-assets/css/bootstrap.min.css"},
    {src:"~assets/home/app-assets/css/bootstrap-extended.min.css"},
    {src:"~assets/home/app-assets/css/pages/page-profile.min.css"},
    {src:"~assets/home/app-assets/css/pages/app-file-manager.css"},
    {src:"~assets/home/app-assets/css/plugins/forms/form-wizard.min.css"},
    {src:"overlayscrollbars/css/OverlayScrollbars.css"},

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax',
    '@/plugins/overlayscrollbars',
    { src: "@/plugins/vuetimeline.js" },
    { src: "@/plugins/vue-form-wizard.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxt/components',
  ],

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faEnvelope', 'faLock',
        ]
      },
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //todo:Added Value
  // router:{
  //   extendRoutes(routes,resolve){
  //     routes.push({
  //       name:"auth",
  //       path:"/auth",
  //       component:resolve(__dirname,"pages/auth/login.vue")
  //     })
  //   }
  // }
}
