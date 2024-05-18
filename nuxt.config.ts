// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Tatsu',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false, // auto-import components based only on its name
    },
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/main.css'
  ]
  hooks: {
    'vite:extendConfig'(config, {isClient}) {
      if (process.env.NODE_ENV !== 'development' && isClient) {
        config.build.rollupOptions.output.chunkFileNames = '[name]-[hash].js'
        config.build.rollupOptions.output.entryFileNames = '[name]-[hash].js'
      }
    }
  }
})
