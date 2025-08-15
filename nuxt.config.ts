import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2025-08-15',

    // Pinia module
    modules: [
        '@pinia/nuxt',
    ],

    pinia: {
        autoImports: ['defineStore', 'storeToRefs'],
    },

    devtools: { enabled: true },

        css: ['~/assets/css/tailwind.css'],

    // Vite plugin for Tailwind CSS
    vite: {
        plugins: [
            tailwindcss(), // Add Tailwind CSS Vite plugin
        ],
    },
});
