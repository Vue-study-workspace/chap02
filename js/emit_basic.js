Vue.createApp({
    data() {
        return {
            current: 0
        };
    },
    methods: {
        onplus(e) {
            this.current += e;
        }
    }
})
    .component('my-counter', {
        props: ['step'],
        emits: ['plusMinus'],
        template: `<button type="button" v-on:click="onclick">
{{ step }}</button>`,
        methods: {
            onclick() {
                this.$emit('plusMinus', Number(this.step));
            }
        }
    })
    .mount('#app');
