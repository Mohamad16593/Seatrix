import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    },
    pageTransition: {
      name: "slide",
      mode: "out-in",
    },
  },
  // Vuetify Configuration
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-swiper",
  ],

  // @ts-ignore
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
  css: ["@/assets/main.css", "leaflet/dist/leaflet.css"],
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls: {
          // Optional: customize asset handling here
        },
      },
    },
  },

  components: true,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
});
