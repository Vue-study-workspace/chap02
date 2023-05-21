Vue
  .createApp({
    data() {
      return {
        name:'名無権兵衛',
        color: 'yellow'
      };
    }
  })
  // ディレクティブを定義
  .directive('highlight', (el, binding, vnode, prevNode) => {
      // 属性値に変化がなければ終了
      if (binding.value === binding.oldValue) { return; }
      console.log(binding.value);
      el.style.backgroundColor = binding.value;
    })
  .mount('#app');
