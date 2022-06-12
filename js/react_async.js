Vue.createApp({
  data() {
      return {
          message: 'こんにちは、世界！'
      };
  },
  mounted() {
    this.message = 'はじめまして、Vue.js！';
    this.$nextTick(() => {
      console.log(this.$el.textContent.includes(this.message));
    });

  }
}).mount('#app');
