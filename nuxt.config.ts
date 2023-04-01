// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  alias: {
    "~~": "/src",
    "@@": "/src",
    "~": "/src",
    "@": "/src",
    "assets": "/src/assets",
    "public": "/src/public",
  },
  buildModules: ['@nuxt/typescript-build'],
  css: ['~/assets/main.scss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
