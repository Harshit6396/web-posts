import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',  // Smaller version
          sizes: '16x16'
        }
      ]
    }
  },
  compatibilityDate: "2025-05-15",
  ssr: false,
  devtools: { enabled: true },

  // Global CSS
  css: ["@/assets/styles/global.css"],

  // Vite configuration for TailwindCSS
  vite: {
    plugins: [
      tailwindcss(), // Tailwind CSS plugin for Vite
    ],
  },

  // Build configuration
  build: {
    postcss: {
      // PostCSS configuration
      plugins: {
        "postcss-preset-env": {
          stage: 0, // You can adjust the stage based on your needs
        },
      },
    },
  },

  // Static Site Generation (SSG) & SSR configuration
  generate: {
    fallback: true, // Ensure fallback is enabled for missing pages
    interval: 2000, // Increase interval for slower pages during generation
  },

  // Nitro preset to ensure the correct server rendering method
  nitro: {
    preset: "node", // Use the Node preset to avoid issues with Nitropack during build
  },
});
