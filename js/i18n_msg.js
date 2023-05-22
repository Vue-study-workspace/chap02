const messages = {
  en: {
    greet: {
      morning: 'Good Morning',
    }
  },
  ja: {
    greet: {
      morning: 'おはようございます',
      hello: 'こんにちは、{ name }さん',
    }
  },
  de: {
    greet: {
      morning: 'Guten Morgen',
    }
  },
};

Vue.createApp({})
  .use(
    VueI18n.createI18n({
      locale: 'ja',
      fallbackLocale: 'en',
      messages,
    })
  )
  .mount('#app');
