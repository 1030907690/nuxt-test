export default {

  server: {
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-test',
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
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   
    {
      src: '~/plugins/axios',
      ssr: true // 开启服务端渲染
    },
    {
      src: '@/plugins/ant-design-vue',
      ssr: true,
      // mode: 'server' // or client // v2.4+
    },
    {
      src: '@/plugins/element-ui',
      ssr: false,
    },
    '~/plugins/mixins',
      '~/plugins/router',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxtjs/axios',
     'cookie-universal-nuxt',
     '@nuxtjs/auth-next',
  ],

  axios: {
    proxy: true,

  },
  
  proxy: {
    '/api/': { target: 'http://localhost:8081/api', pathRewrite: {'^/api/': ''} }
  },
 
  router: {
    // 也可以单独加到页面上
    // middleware: 'auth-global',
    middleware: ['auth','auth-global'],
  },
  auth: {
    strategies: {
       local: {
           endpoints: {
               login: {url: '/api/test/login', method: 'post'},
               logout: {url: '/api/test/logout', method: 'post'},
               user: {url: '/api/test/user', method: 'get'}
           },
           user:{
              property:'data'
           },
           token:{
            property:'data'
         }
       }
   },
 },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }

  
}
