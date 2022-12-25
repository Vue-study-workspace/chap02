// MyHelloコンポーネントの本体
const MyHello = {
  template: `<div>こんにちは、Vue.js！</div>`
};

Vue.createApp({
  // コンポーネントをローカル登録
  conponents: {
    'my-hello': MyHello
  }
}).mount('#app');