Vue.createApp({
    data() {
        return {
            result: ''
        };
    },
    methods: {
        // mouseenter / mouseleaveイベントの情報をresultに反映
        onmousein(e) {
            this.result += `Enter:${e.target.id}<br/>`
        },
        onmouseout(e) {
            this.result += `Leave:${e.target.id}<br/>`
        }
    }
}).mount('#app');
