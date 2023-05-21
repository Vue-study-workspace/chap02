Vue
  .createApp({
    data() {
      return {
        color: 'yellow'
      };
    }
  })
  // ディレクティブを定義
  .directive('highlight', {
    mounted(el, binding, vnode, prevNode) {
      el.style.backgroundColor = binding.value;
    }
  })
  .mount('#app');
