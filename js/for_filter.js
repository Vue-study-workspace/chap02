Vue.createApp({
  data() {
    return {
      books: [
        {
          isbn: '978-4-7981-5757-3',
          title: 'JavaScript逆引きレシピ',
          price: 2800
        },
        {
          isbn: '978-4-7981-5757-3',
          title: 'JavaScript逆引きレシピ2',
          price: 2499
        },
        {
          isbn: '978-4-7981-5757-3',
          title: 'JavaScript逆引きレシピ3',
          price: 3600
        },
      ]
    };
  },
  computed: {
    expensiveBooks() {
      return this.books.filter(b => b.price >= 2500);
    }
  }
}).mount('#app');
