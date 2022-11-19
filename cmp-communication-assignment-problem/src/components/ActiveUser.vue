<template>
    <header>
        <h2>username: {{ userName }}</h2>
        <h3>age: {{ userAge }}</h3>
    </header>
</template>

<script>
    export default {  
        props: {
            userName: {
                type: String,
                required: true
            },
            userAge: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped>
    header{
        padding-top: 25px;
        width: 100%;
        height: 10vh;
        background: #ccc;
    }
    h2,h3{
        text-align: center;
        font-size:150%;
    }
</style>