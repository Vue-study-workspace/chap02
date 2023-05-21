Vue
  .createApp({
    data() {
      return {
        init: 0,
      };
    },
    methods: {
      // [初期化] ボタンで実行(init属性を1~100の乱数で初期化)
      onclick() {
        this.init = Math.floor(Math.random() * 100) + 1;
      }
    }
  })
  .component('my-counter', {
    props: ['init'],
    template: `<div>現在値は{{ current }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props) {
      const current = Vue.ref(props.init);

      // initプロパティの変化を監視
      Vue.watch(
        () => props.init,
        (newV, oldV) => {
          current.value = newV;
        }
      );

      const onclick = () => {
        current.value++;
      };

      return {
        current,
        onclick
      };
    }
  })
  .mount('#app');
