<template>
    <div class = "6">
        <h1> {{msg}} </h1>
        <router-view></router-view>
        <b-dropdown id="dropdown" text="Choose a unit" class="m-2">
            <b-dropdown-item @click="changeTo(Roy, 'Roy')">Roy</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Fir, 'Fir')">Fir</b-dropdown-item>
        </b-dropdown>
        <h2> {{ target.title }} </h2>
        <b-table :items="target.info"></b-table>
    </div>
</template>

<script>
export default {
    name: '6',
    data() {
        return {
            msg: 'Homepage for Fire Emblem 6: The Binding Blade',
            target: {
                title: 'No Unit Selected',
                info: ''
            },
            Roy: 
                [
                {Level: 1, HP: 18, STR: 5, SKL: 5, SPD: 7, LCK: 7, DEF: 5, RES: 0},
                {Level: 2, HP: 18.8, STR: 5.4, SKL: 5.5, SPD: 7.4, LCK: 7.6, DEF: 5.25, RES: 0.3}
            ],
            Fir: [
                {Level: 1, HP: 19, STR: 5, SKL: 5, SPD: 7, LCK: 7, DEF: 5, RES: 0},
                {Level: 2, HP: 18.8, STR: 5.4, SKL: 5.5, SPD: 7.4, LCK: 7.6, DEF: 5.25, RES: 0.3}
            ]
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        changeTo(e, name) {
            this.target.info = e
            this.target.title = name
        }
    },
    computed: {

    }
}
</script>

<style scoped>

</style>