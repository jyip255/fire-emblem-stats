<template>
    <div class = "6">
        <h1> {{msg}} </h1>
        <router-view></router-view>
        <b-dropdown id="dropdown" text="Choose a unit" class="m-2">
            <b-dropdown-item @click="changeTo(Roy, 'Roy')">Roy</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Fir, 'Fir')">Fir</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Miredy, 'Miredy')">Miredy</b-dropdown-item>
        </b-dropdown>
        <h2> {{ target.title }} </h2>
        <b-container>
            <b-row>
                <b-col>Level</b-col>
                <b-col>HP</b-col>
                <b-col>S/M</b-col>
                <b-col>Skl</b-col>
                <b-col>Spd</b-col>
                <b-col>Lck</b-col>
                <b-col>Def</b-col>
                <b-col>Res</b-col>
            </b-row>
            <div v-for="(entry, index) in target2" v-bind:key="index">
            <b-row>
                <b-col> {{entry.level}} </b-col>
                <b-col> {{entry.hp}} </b-col>
                <b-col> {{entry.str}} </b-col>
                <b-col> {{entry.skl}} </b-col>
                <b-col> {{entry.spd}} </b-col>
                <b-col> {{entry.lck}} </b-col>
                <b-col> {{entry.def}} </b-col>
                <b-col> {{entry.res}} </b-col>
            </b-row>
            </div>
        </b-container>
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
                info: '',
                level: '',
                hp: '',
                str: '',
                skl: '',
                spd: '',
                lck: '',
                def: '',
                res: ''
            },
            target2: [],
            Roy: {
                name: 'Roy',
                base: [
                    1, 18, 5, 5, 7, 7, 5, 0
                ],
                growths: [
                    1, .80, .40, .50, .40, .6, .25, .30
                ],
                stats: [
                ]
            },
            Fir: {
                name: 'Fir',
                base: [
                    1, 19, 6, 9, 10, 3, 3, 1
                ],
                growths: [
                    1, .75, .25, .50, .55, .50, .15, .20
                ],
                stats: [
                ]
            },
            Miredy: {
                name: 'Miredy',
                base: [
                    10, 30, 12, 11, 10, 5, 13, 3
                ],
                growths: [
                    1, .75, .50, .50, .45, .25, .20, .05
                ],
                promotion: [
                    1, 5, 2, 2, 2, 0, 2, 2
                ]
            }
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        calculateStats: function(unit) {
            this.target2 = [];
            var i;
            var cap = 41 - unit.base[0]
            for (i = 0; i < cap; i++) {
                this.target2.push({
                    level: ((unit.base[0] + (unit.growths[0] * i))),
                    hp: Math.round(((unit.base[1] + (unit.growths[1] * i)))*100)/100,
                    str: Math.round(((unit.base[2] + (unit.growths[2] * i)))*100)/100,
                    skl: Math.round(((unit.base[3] + (unit.growths[3] * i)))*100)/100,
                    spd: Math.round(((unit.base[4] + (unit.growths[4] * i)))*100)/100,
                    lck: Math.round(((unit.base[5] + (unit.growths[5] * i)))*100)/100,
                    def: Math.round(((unit.base[6] + (unit.growths[6] * i)))*100)/100,
                    res: Math.round(((unit.base[7] + (unit.growths[7] * i)))*100)/100
                })
                }
        },
        changeTo(e, name) {
            this.target.info = e
            this.target.title = name
            this.calculateStats(e)
        },
    },
    computed: {
    }
}
</script>

<style scoped>

</style>