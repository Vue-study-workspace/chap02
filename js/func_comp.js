Vue
  .createApp({})
  // 関数型コンポーネントの定義
  .component ('my-random', (props, context) => {
    // min~maxの範囲の乱数を生成
    const result = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    // hメソッドで<p>要素を定義
    return Vue.h('p', result);
  })
  .mount('#app');
