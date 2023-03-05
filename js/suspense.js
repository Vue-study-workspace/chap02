Vue.createApp({})
  .component('my-heavy', {
    template: '<div>お待たせしました。{{ name }}です！</div>',

    async setup() {
      const name = Vue.ref('Suspence');
      await new Promise(resolve => {
            setTimeout(() => {
              resolve();
            }, 5000);
          });
      return {
        name
      };
    },
  })
  .mount('#app');