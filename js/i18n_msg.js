const messages = {
  en: {
    greet: {
      morning: 'Good Morning',
    }
  },
  ja: {
    greet: {
      morning: 'おはようございます',
      hello: 'こんにちは、{ 0 }さん',
      how_are_you: 'ご機嫌いかがですか',
      morning_set: '@:greet.morning @:greet.how_are_you'
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
