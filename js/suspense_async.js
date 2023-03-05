Vue.createApp({})
  .component('my-heavy', Vue.defineAsyncComponent(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data() {
            return { name: 'Suspense_async' };
          },
          template: `<div>お待たせしました。{{ name }}です！</div>`
        });
      }, 5000);
    })
  })
  )
  .mount('#app');