Vue.createApp({})
  .mixin({
    // コンポーネント生成時の処理
    created() {
      // データオブジェクトからtitle,keyword, descriptionを抽出
      const { title, keyword, description } = this.$data;
      if (title) { document.title = title }
      if (keyword) {
        document.querySelector("meta[name='keyword']").setAttribute('content', keyword);
      }
      if (description) {
        document.querySelector("meta[name='description']").setAttribute('content', description);
      }
    }
  })
  .component('my-mix', {
    template: `<div>Global Mixin</div>`,
    data() {
      return {
        title: 'グローバルミックスイン',
        keyword: 'mixin, vuejs, component',
        description: 'アプリ全体に適用されるミックスインの例です'
      };
    }
  })
  .mount('#app');
