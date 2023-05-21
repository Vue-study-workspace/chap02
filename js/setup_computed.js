Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ currentPlus }}です！
    <input type="button" v-on:click="onclick" value="増やす"></div>`,

    setup(props, context) {
      const current = Vue.ref(props.init);
      const onclick = () => {
        current.value++;
      };
      // 算出プロパティを定義
      const currentPlus = Vue.computed(
        () => current.value < 50 ? current.value : '50+'
      );
      // 算出プロパティも戻り値に束ねる
      return {
        current,
        currentPlus,
        onclick
      };
    }
  })
  .mount('#app');
