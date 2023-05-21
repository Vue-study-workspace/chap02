Vue.createApp({})
  .component('my-parent', {
    template: `
        <div id="parent">
          <input type="text" v-model="title" />
          <my-my />
        </div>
    `,
    setup(props) {
      const title = Vue.ref('Vue 3実践入門');
      // Vue.provide('title', title);

      // 読み取り専用
      Vue.provide('title', Vue.readonly(title));
      return {
        title
      };
    },
  })
  .component('my-my', {
    template: `
        <div id="my">
          <my-child />
        </div>
    `
  })
  .component('my-child', {
    template: `
        <div id="child">
          {{ title }}
          <input type="button" value="初期化"
            v-on:click="title = '書名未定'" />
        </div>
    `,
    setup(props) {
      // const title = Vue.inject('title');

      // default値を設定する場合
      const title = Vue.inject('title', 'タイトル未定');
      return {
        title
      };
    }
  })
  .mount('#app');
