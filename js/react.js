Vue.createApp({
  data() {
      return {
          current: new Date()
      };
  },
  created() {
    console.log('created');
    this.timer = setInterval(() => {
      this.current = new Date();
    }, 1000);
  },
  beforeUnmount() {
    console.log('before unmounted');
    clearInterval(this.timer);
  }
}).mount('#app');
