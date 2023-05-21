Vue
  .createApp({
    setup(props, context) {
      const book = Vue.reactive({
        title: 'Vue.js 3実践入門',
        author: {
          name: 'WINGSプロジェクト',
        },
      });
      console.log(Vue.isReactive(book));
      console.log(Vue.isReactive(book.author));
    }
  })
  .mount('#app');
