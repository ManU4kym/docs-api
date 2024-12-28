import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Product API',
      meta: [
        { name: 'viewport', content: 'KILa Kitu Nuxt' },

      ],
    }
  },

  alias: {
    "@": resolve(__dirname, "/")
  },
  // css: [
  //   "~/assets/app.css"
  // ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
