Vue.createApp({})
  .component('my-hello', {
    props: [ 'yourName' ],
    template: `<div>こんにちは、{{ yourName }}さん</div>`,
  })
  .mount('#app');