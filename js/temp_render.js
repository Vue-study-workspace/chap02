Vue
  .createApp({})
  .component('my-loading', {
    props: ['type'],
    render() {
      // type属性に応じで戻り値を切り替え
      switch (this.type) {
        case 'text':
          return Vue.h('p', '...Now Loading...');
        case 'image':
          return Vue.h('img', {
            src: 'images/loading.gif',
            alt: 'loading'
          });
        default:
          console.error('type属性はimage、textいずれかで設定してください');
          return null;
      }
    }
  })
  .mount('#app');
