const app = Vue.createApp({
    data() {
        return {
            input: '',
            toggleParagraphe: false,
            changeColor: ''
        }
    },
    computed: {
        pStyle() {
            return{
                user1: this.input === 'user1',
                user2: this.input === 'user2',
                visible: this.toggleParagraphe === false,
                hidden: this.toggleParagraphe === true
            }
        }
    },
    methods: {
        toggle() {
            this.toggleParagraphe = !this.toggleParagraphe
        }
    },
})

app.mount('#assignment')