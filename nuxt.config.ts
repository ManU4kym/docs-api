import { Head } from "./.nuxt/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            
            title: 'CarYard',
            meta: [
                { name: 'description', content: 'A car rental company' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: '#3D405B' }]
        }
    },
    modules: [
        "@nuxtjs/tailwindcss"
    ]
})
