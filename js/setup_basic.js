Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ current }}です！
    <input type="button" v-on:click="onclick" value="増やす"></div>`,

    setup(props, context) {
      // データオブジェクト準備
      const current = Vue.ref(props.init);
      // イベントハンドラーの宣言
      const onclick = () => {
        current.value++;
      };
      // コンポーネント定義を束ねたものを戻り値に
      return {
        current,
        onclick
      };
    }
  })
  .mount('#app');
