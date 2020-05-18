<template>
    <div class = "calculator">
        <h1> {{msg}} </h1>
        <h1> Calculator skeleton </h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    data() {
        return {
            msg: 'Getting familiar with Vue again'
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>

</style>