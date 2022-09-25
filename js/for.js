Vue.createApp({
  data() {
      return {
        books: [
          {
            isbn: '978-4-7981-5757-3',
            title: 'JavaScript逆引きレシピ',
            price: 2000
          },
          {
            isbn: '978-4-7981-2222-3',
            title: '楽しいラズパイ電子工作ブック',
            price: 1900
          },
          {
            isbn: '978-4-7981-3333-3',
            title: '3ステップでしっかり学ぶPython入門',
            price: 2400
          },
        ]
      }
  }
}).mount('#app');
