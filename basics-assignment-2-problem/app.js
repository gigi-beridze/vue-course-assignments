const app = Vue.createApp({
    data(){
        return{
            alertText: 'Hello this is my alert!',
            firstText: '',
            secondText: ''
        }
    },
    methods: {
        showAlert(){
            alert(this.alertText)
        },
        userInput(event){
            this.firstText = event.target.value
        },
        enteredInput(event){
            this.secondText = event.target.value
        }
    }
})

app.mount('#assignment')