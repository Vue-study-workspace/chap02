// ミックスインを準備
const dataLoggable = {
  mounted() {
    console.log(this.$data);
  }
};

// my-compコンポーネント生成
Vue.createApp({})
  .component('my-comp', {
    data() {
      return {
        current: new Date()
      };
    },
    template: `<div>現在時刻：{{ current }}</div>`,
    // ミックスイン組み込み
    mixins: [dataLoggable]
  })
  .mount('#app');
