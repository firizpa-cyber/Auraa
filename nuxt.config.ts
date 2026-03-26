import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@vueuse/motion/nuxt',
  ],
  motion: {
    directives: {
      'visible-once': {
        initial: {
          opacity: 0,
          y: 20,
        },
        visibleOnce: {
          opacity: 1,
          y: 0,
        },
      },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Aura Digital | Создание и разработка сайтов в Худжанде и Таджикистане',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Заказать создание сайта в Худжанде и Таджикистане. Профессиональная разработка сайтов, интернет-магазинов и веб-дизайн от Aura Digital. Высокое качество и современные технологии.' },
        { name: 'keywords', content: 'создание сайтов в худжанде, разработка сайтов таджикистан, заказать сайт худжанд, веб студия таджикистан, создание интернет магазина худжанд, разработка веб сайтов, aura digital tajikistan, создание сайтов душанбе' },
        { property: 'og:title', content: 'Aura Digital | Создание и разработка сайтов в Худжанде' },
        { property: 'og:description', content: 'Премиальная разработка сайтов и цифровых решений в Таджикистане. Мы создаем продукты, которые развивают ваш бизнес.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      geminiApiKey: process.env.GEMINI_API_KEY || ''
    }
  }
})
