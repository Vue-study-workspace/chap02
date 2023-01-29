Vue.createApp({})
    .component('my-parent', {
        data() {
            return {
                title: 'Vue 3実践入門'
            };
        },
        methods: {
            updateTitle() {
                this.title = 'Vue.js徹底攻略';
            }
        },
        provide() {
            return {
                title: Vue.computed(() => this.title),
                updateTitle: this.updateTitle
            };
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
        inject: ['title', 'updateTitle'],
        template: `
        <div>
            <input type="button" value="更新" v-on:click="updateTitle">
            {{ title.value }}
        </div>
    `
    })
    .mount('#app');
