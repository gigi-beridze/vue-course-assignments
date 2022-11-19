<template>
    <section>
        <form @submit.prevent="submitedData">
            <div>
                <label>name</label>
                <input placeholder="enter your name" type="text" v-model="enteredName">
            </div>
            <div>
                <label>age</label>
                <input placeholder="enter your age" type="number" v-model="enteredAge">
            </div>
            <div>
                <label></label>
                <button>Update User Data</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default{
        emits: ['user-data'],
        data() {
            return {
                enteredName: '',
                enteredAge: ''
            }
        },
        methods: {
            submitedData(){
                this.$emit('user-data', this.enteredName, this.enteredAge)
            }
        }
    }
</script>

<style scoped>
    section{
        width:100%;
        height: 90vh;
        background:#eee;
        text-align: center;
    }
    div{
        padding-top: 50px;
    }
    input{
        width: 500px;
        height: 50px;
    }
    label{
        display: inline-block;
        width: 10rem;
        font-size:22px;
        text-transform: uppercase;
    }
    button{
        width: 500px;
        height:50px;
        cursor: pointer;
        font-size: 22px;
    }
</style>