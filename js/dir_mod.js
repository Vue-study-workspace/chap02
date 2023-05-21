// mounted/updatedに適用するフック関数
const hook = (el, binding) => {
  if (binding.value === binding.oldValue) { return; }
  // border修飾子で背景ハイライトか枠線ハイライトか選択
  if (binding.modifiers.border) {
    el.style.borderColor = binding.value;
    el.style.borderStyle = 'solid';
  } else {
    el.style.backgroundColor = binding.value;
  }
};

Vue
  .createApp({
    data() {
      return {
        color: 'yellow'
      };
    }
  })
  .directive('highlight', {
    mounted: hook,
    updated(el, binding, vnode, prevNode) {
      // once修飾子でupdated更新はスキップ
      if (!binding.modifiers.once) {
        hook(el, binding);
      }
    }
  })
  .mount('#app');
