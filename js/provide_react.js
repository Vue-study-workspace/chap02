Vue.createApp({})
    .component('my-parent', {
        data() {
            return {
                title: 'Vue 3実践入門'
            };
        },
        provide() {
            return {
                title: Vue.computed(() => this.title)
            };
        },
        template: `
        <div>
            <input type="text" v-model="title">
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
