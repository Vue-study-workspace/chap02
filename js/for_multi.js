Vue.createApp({
    data() {
        return {
            songs: [
                {
                    title: '赤とんぼ',
                    lyrics: '夕焼け小焼け',
                    composer: '山田耕筰',
                },
                {
                    title: '青とんぼ',
                    lyrics: '朝焼け小焼け',
                    composer: '山田耕筰',
                },
            ]
        };
    }
}).mount('#app');
