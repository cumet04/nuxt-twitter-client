export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  env: {
    dev_functions_emulator: process.env.DEV_FUNCTIONS_EMULATOR,
    dev_twitter_access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    dev_twitter_access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  plugins: ['~/plugins/firebase_init.js'],
  buildModules: [],
  serverMiddleware: [{ path: '/api', handler: '~/middleware/api_proxy.js' }],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: '/'
  },
  build: {
    extend(config, ctx) {}
  }
}
