// プラグインを定義
const MyUtil = {
  install(app, option) {
    // v-highlightディレクティブを定義
    app.directive('highlight', {
      mounted(el, binding) {
        el.addEventListener('mouseenter', e => {
          e.target.style.backgroundColor = binding.value;
        }, false);
        el.addEventListener('mouseleave', e => {
          e.target.style.backgroundColor = null;
        }, false);
      }
    });
  }
};

Vue
  .createApp({
    data() {
      return {
        color: 'red'
      };
    }
  })
  .use(MyUtil)
  .mount('#app');
