Vue
  .createApp({
    data() {
      return {
        options: {
          grm: true,    // GitHub仕様のmarkdownを有効化
          breaks: true, // 単一改行を<br>タグにするか
          xhtml: true,  // 空タグを ~/> に
        }
      };
    },
    compilerOptions: {
      whiteSpace: 'preserve'
    }
  })
  .directive('markdown', (el, binding) => {
    // markdown文字列をHTMLに変換
    el.innerHTML = marked(el.textContent, binding.value);
  })
  .mount('#app');
