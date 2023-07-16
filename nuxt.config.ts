// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    apiKey: process.env.API_KEY,
    public: {
      baseUri: process.env.BASE_URI,
      apiKey: process.env.API_KEY,
    }    
  },

  modules: ['@nuxthq/ui','@pinia/nuxt'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
