const app = Vue.createApp({
    data(){
        return{
            count: 0
        }
    },
    methods: {
        add(num){
            this.count += num
        }
    },
    computed: {
        showText(){
            if(this.count < 37){
                return "Not there yet"
            }else{
                return "Too much!"
            }
        }
    },
    watch: {
        count(val){
            if(val > 0){
                setTimeout(() => {
                    this.count = 0
                }, 5000);
            }
        }
    }
}).mount('#assignment')