const app = Vue.createApp({
    data(){
        return{
            name: '',
            age: 17,
            image: 'https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE='
        }
    },
    methods: {
        randomNumber(){
            const randomNumber = Math.random()
            return randomNumber
        }
    }
})

app.mount('#assignment')