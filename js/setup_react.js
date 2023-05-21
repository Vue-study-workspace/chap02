Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ data.current }}です！
    <input type="button" v-on:click="onclick" value="増やす"></div>`,

    setup(props, context) {
      // データオブジェクト準備
      const data = Vue.reactive({
        current: props.init,
      });
      // イベントハンドラーの宣言
      const onclick = () => {
        data.current++;
      };
      // コンポーネント定義を束ねたものを戻り値に
      return {
        data,
        onclick
      };
    }
  })
  .mount('#app');
