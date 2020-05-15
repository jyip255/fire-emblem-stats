<template>
    <div class = "6">
        <h1> {{msg}} </h1>
        <h1> Skeleton </h1>
        <p>
        <ul class="nav">
            <router-link to="/6-BindingBlade/Roy">Roy</router-link>
            <router-link to="/6-BindingBlade/Fir">Fir</router-link>
        </ul>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: '6',
    data() {
        return {
            msg: 'Homepage for Fire Emblem 6: The Binding Blade'
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    },
    computed: {

    }
}
</script>

<style scoped>

</style>