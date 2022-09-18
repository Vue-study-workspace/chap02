Vue.createApp({
  data() {
      return {
          memo: ''
      };
  },
  methods: {
      // 入力値をログ出力
      onchange() {
          console.log(`入力値は「${this.memo}」です。`);
      }
  }
}).mount('#app');
