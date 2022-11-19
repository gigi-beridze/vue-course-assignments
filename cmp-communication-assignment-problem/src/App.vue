<template>
    <active-user :userName="user.name" :userAge="user.age"></active-user>
    <user-data @user-data="setUserData"></user-data>
</template>

<script>
    export default{
        data() {
            return {
                user: {
                    name: 'gigi',
                    age: 17
                }
            }
        },
        methods: {
            setUserData(name, age){
                this.user = {
                    name: name,
                    age: age
                }
            }
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>