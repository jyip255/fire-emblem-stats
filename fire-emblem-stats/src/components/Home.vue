<template>
    <div class = "Home">
        <h1> Homepage skeleton </h1>
        <h1> {{msg}} </h1>
        <h1> {{msg2}} </h1>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Testing one',
            msg2: 'Testing two'
        }
    }
}
</script>

<style scoped>

</style>