<template>
    <div class = "6">
        <h1> {{msg}} </h1>
        <router-view></router-view>
        <b-dropdown id="dropdown" text="Choose a unit" class="m-2">
            <b-dropdown-item @click="changeTo(Roy, 'Roy')">Roy</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Marcus, 'Marcus')">Marcus</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Allen, 'Allen')">Allen</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Lance, 'Lance')">Lance</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Wolt, 'Wolt')">Wolt</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Bors, 'Bors')">Bors</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Merlinus, 'Merlinus')">Merlinus</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Ellen, 'Ellen')">Ellen</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Dieck, 'Dieck')">Dieck</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Wade, 'Wade')">Wade</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Lott, 'Lott')">Lott</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Thany, 'Thany')">Thany</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Chad, 'Chad')">Chad</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Lugh, 'Lugh')">Lugh</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Clarine, 'Clarine')">Clarine</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Rutger, 'Rutger')">Rutger</b-dropdown-item>
            <b-dropdown-item @click="changeTo(RutgerH, 'RutgerH')">Rutger (Hard)</b-dropdown-item>

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
            Marcus: {
                name: 'Marcus',
                base: [
                    21, 32, 9, 14, 11, 10, 9, 8
                ],
                growths: [
                    1, .60, .25, .20, .25, .20, .15, .20
                ],
                stats: [
                ]
            },
            Allen: {
                name: 'Allen',
                base: [
                    1, 21, 7, 4, 6, 3, 6, 0
                ],
                growths: [
                    1, .85, .45, .40, .45, .40, .25, .10
                ],
                stats: [
                ]
            },
            Lance: {
                name: 'Lance',
                base: [
                    1, 20, 5, 6, 8, 2, 6, 0
                ],
                growths: [
                    1, .80, .40, .45, .50, .35, .20, .15
                ],
                stats: [
                ]
            },
            Wolt: {
                name: 'Wolt',
                base: [
                    1, 18, 4, 4, 5, 2, 4, 0
                ],
                growths: [
                    1, .80, .40, .50, .40, .40, .20, .10
                ],
                stats: [
                ]
            },
            Bors: {
                name: 'Bors',
                base: [
                    1, 20, 7, 4, 3, 4, 11, 0
                ],
                growths: [
                    1, .90, .30, .30, .40, .50, .35, .10
                ],
                stats: [
                ]
            },
            Merlinus: {
                name: 'Merlinus',
                base: [
                    1, 15, 0, 3, 3, 10, 3, 0
                ],
                growths: [
                    1, 1, 0, .50, .50, 1, .20, .05
                ],
                stats: [
                ]
            },
            Ellen: {
                name: 'Ellen',
                base: [
                    2, 16, 1, 6, 8, 8, 0, 6
                ],
                growths: [
                    1, .45, .50, .30, .20, .70, .05, .60
                ],
                stats: [
                ]
            },
            Dieck: {
                name: 'Dieck',
                base: [
                    5, 26, 9, 12, 10, 5, 6, 1
                ],
                growths: [
                    1, .90, .40, .40, .30, .35, .20, .15
                ],
                stats: [
                ]
            },
            Wade: {
                name: 'Wade',
                base: [
                    2, 28, 8, 3, 5, 4, 3, 10
                ],
                growths: [
                    1, .75, .50, .45, .20, .45, .30, .05
                ],
                stats: [
                ]
            },
            Lott: {
                name: 'Lott',
                base: [
                    3, 29, 7, 6, 7, 2, 4, 1
                ],
                growths: [
                    1, .80, .30, .30, .35, .30, .40, .15
                ],
                stats: [
                ]
            },
            Thany: {
                name: 'Thany',
                base: [
                    1, 17, 4, 6, 12, 5, 6, 5
                ],
                growths: [
                    1, .45, .30, .55, .60, .60, .10, .25
                ],
                stats: [
                ]
            },
            Chad: {
                name: 'Chad',
                base: [
                    1, 16, 3, 3, 10, 4, 2, 0
                ],
                growths: [
                    1, .85, .50, .50, .80, .60, .25, .15
                ],
                stats: [
                ]
            },
            Lugh: {
                name: 'Lugh',
                base: [
                    1, 16, 4, 5, 6, 5, 3, 5
                ],
                growths: [
                    1, .50, .40, .50, .50, .35, .15, .30
                ],
                stats: [
                ]
            },
            Clarine: {
                name: 'Clarine',
                base: [
                    1, 15, 2, 5, 9, 8, 2, 5
                ],
                growths: [
                    1, .40, .30, .40, .50, .65, .10, .40
                ],
                stats: [
                ]
            },
            Rutger: {
                name: 'Rutger',
                base: [
                    4, 22, 7, 12, 13, 2, 5, 0
                ],
                growths: [
                    1, .80, .30, .60, .50, .30, .20, .20
                ],
                stats: [
                ]
            },
            RutgerH: {
                name: 'RutgerH',
                base: [
                    4, 26, 9, 14, 15, 4, 6, 1
                ],
                growths: [
                    1, .80, .30, .60, .50, .30, .20, .20
                ],
                stats: [
                ]
            },
            Saul: {
                name: 'Saul',
                base: [
                    5, 20, 4, 6, 10, 2, 2, 5
                ],
                growths: [
                    1, .60, .40, .45, .45, .35, .15, .15
                ],
                stats: [
                ]
            },
            Dorothy: {
                name: 'Dorothy',
                base: [
                    3, 19, 5, 6, 6, 3, 4, 2
                ],
                growths: [
                    1, .85, .50, .45, .45, .35, .15, .15
                ],
                stats: [
                ]
            },
            Sue: {
                name: 'Sue',
                base: [
                    1, 18, 5, 7, 8, 4, 5, 0
                ],
                growths: [
                    1, .55, .30, .55, .65, .50, .10, .15
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