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
      morning_set: '@:greet.morning @:greet.how_are_you',
      mail: "wings{ '@' }example.com"
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
      // locale: 'ja',
      locale: (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage ||
        navigator.browserLanguage,
      fallbackLocale: 'en',
      messages,
    })
  )
  .mount('#app');
