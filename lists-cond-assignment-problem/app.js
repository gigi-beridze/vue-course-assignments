const app = Vue.createApp({
    data() {
        return {
            items: [],
            enterItem: '',
            show: true,
            buttonCaption: true,
            buttonHide: 'Hide'
        }
    },
    methods: {
        addItem(){
            this.items.push(this.enterItem)
        },
        toggleList(){
            this.show = !this.show
            this.buttonCaption = !this.buttonCaption
            this.buttonCaption ? this.buttonHide = "Hide" : this.buttonHide = "Show"
        }
    },
})

app.mount('#assignment')