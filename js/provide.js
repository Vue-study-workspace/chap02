Vue.createApp({})
    .component('my-parent', {
        provide: {
            title: 'Vue 3実践入門'
        },
        template: `
        <div>
            <my-my />
        </div>
    `
    })
    .component('my-my', {
        template: `
        <div>
            <my-child />
        </div>
    `
    })
    .component('my-child', {
        inject: ['title'],
        template: `
        <div>
            {{ title }}
        </div>
    `
    })
    .mount('#app');
