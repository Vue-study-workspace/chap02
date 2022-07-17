Vue.createApp({
    data() {
        return {
            path: './images/wings.jpg'
        };
    },
    methods: {
        // 画像を読み込めない場合はエラー画像を表示
        onerror() {
            this.path = './images/noimage.jpg'
        }
    }
}).mount('#app');
