// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

const alias = {
  '@assets': resolve(__dirname, './components/assets'),
  '@atoms': resolve(__dirname, './components/atoms'),
  '@molecules': resolve(__dirname, './components/molecules'),
  '@organisms': resolve(__dirname, './components/organisms'),
  '@templates': resolve(__dirname, './templates'),
  '@stores': resolve(__dirname, './stores'),
  '@composables': resolve(__dirname, './composables'),
  '@constants': resolve(__dirname, './components/constants'),
  '@server': resolve(__dirname, './server'),
  '@layouts': resolve(__dirname, './layouts'),
};

const dirs = [
  { path: '~/components/atoms' }, { path: '~/components/molecules' }, { path: '~/components/organisms' },
];

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt'],
  components: { dirs },
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  alias,
  compatibilityDate: '2024-04-03',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
  },
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16,
        unitPrecision: 3,
        propList: ['*', '!border*'],
        replace: true,
        mediaQuery: true,
        minPixelValue: 2,
      },
    },
  },

  eslint: {
    config: {
      stylistic: true
    }
  },
});
