Vue.createApp({
  methods: {
    // サブミット時に確認ダイアログを表示
    onsubmit(e) {
      if (!confirm('送信してもいいですか？')) {
        e.preventDefault();
        return;
      }
    }
  }
}).mount('#app');