<template>
    <div class = "6">
        <h1> {{msg}} </h1>
        <h1> Skeleton </h1>
        <ul class="nav">
            <router-link to="/6-BindingBlade/Roy">Roy</router-link>
            <router-link to="/6-BindingBlade/Fir">Fir</router-link>
        </ul>
        <router-view></router-view>
        <h2> Roy </h2>
        <b-table :items="Roy"></b-table>
    </div>
</template>

<script>
export default {
    name: '6',
    data() {
        return {
            msg: 'Homepage for Fire Emblem 6: The Binding Blade',
            Roy: [
                {Level: 1, HP: 18, STR: 5, SKL: 5, SPD: 7, LCK: 7, DEF: 5, RES: 0},
                {Level: 2, HP: 18.8, STR: 5.4, SKL: 5.5, SPD: 7.4, LCK: 7.6, DEF: 5.25, RES: 0.3}
            ],
            Fir: [
                {Level: 1, HP: 18, STR: 5, SKL: 5, SPD: 7, LCK: 7, DEF: 5, RES: 0},
                {Level: 2, HP: 18.8, STR: 5.4, SKL: 5.5, SPD: 7.4, LCK: 7.6, DEF: 5.25, RES: 0.3}
            ]
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },

    },
    computed: {

    }
}
</script>

<style scoped>

</style>