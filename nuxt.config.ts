// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@nuxtjs/i18n", "@nuxt/fonts"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  primevue: {
    importTheme: { from: "@/theme" },
    options: {
      ripple: true,
    },
  },
  /*primevue: {
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/aura/aura') }      //import and apply preset 
  },  */
  css: ["primeicons/primeicons.css"],
});