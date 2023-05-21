Vue
  .createApp({
    data() {
      return {
        color: 'yellow'
      };
    }
  })
  .directive('highlight', {
    // 紐づいたときの処理(初回のみ)
    mounted(el, binding, vnode, prevNode) {
      el.style.backgroundColor = binding.value;
    },
    // 上位コンポーネントが変化したとき
    updated(el, binding, vnode, prevNode) {
      el.style.backgroundColor = binding.value;
    }
  })
  .mount('#app');
