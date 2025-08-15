export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2025-08-15',

    css: ['@/assets/css/tailwind.css'],

    modules: ['@pinia/nuxt'],

    pinia: {
        autoImports: ['defineStore', 'storeToRefs'],
    },

    devtools: { enabled: true },

    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
                'postcss-preset-env': { stage: 0 },
            },
        },
    },
})
