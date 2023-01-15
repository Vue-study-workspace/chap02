Vue.createApp({})
    .component('my-hello', {
        // props: [ 'yourName' ],
        props: {
            yourName: {
                type: String,
                required: true,
                validator(value) {
                    return value.length <= 5;
                }
            }
        },
        // props: {
        //     yourName: [String, Number]
        // },
        // props: {
        //     user: User
        // },
        // props: {
        //     yourName: {
        //         type: String,
        //         default: '名無権兵衛'
        //     }
        // },
        template: `<div>こんにちは、{{ yourName }}さん</div>`,
    })
    .mount('#app');
