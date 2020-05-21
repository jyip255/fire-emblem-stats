<template>
    <div class = "6">
        <h1> {{msg}} </h1>
        <router-view></router-view>
        <b-dropdown id="dropdown" text="Choose a unit (A-D)" class="m-2">
            <b-dropdown-item @click="changeTo(Allen, 'Allen')">Allen</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Astohl, 'Astohl')">Astohl</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Barth, 'Barth')">Barth</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Bartre, 'Bartre')">Bartre</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Bors, 'Bors')">Bors</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Cath, 'Cath')">Cath</b-dropdown-item>
            <b-dropdown-item @click="changeTo(CathH, 'CathH')">Cath (Hard)</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Cecilia, 'Cecilia')">Cecilia</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Chad, 'Chad')">Chad</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Clarine, 'Clarine')">Clarine</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Dayan, 'Dayan')">Dayan</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Dieck, 'Dieck')">Dieck</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Dorothy, 'Dorothy')">Dorothy</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Douglas, 'Douglas')">Douglas</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown" text="Choose a unit (E-K)" class="m-2">
            <b-dropdown-item @click="changeTo(Echidna, 'Echidna')">Echidna</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Ellen, 'Ellen')">Ellen</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Elphin, 'Elphin')">Elphin</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Fae, 'Fae')">Fae</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Fir, 'Fir')">Fir</b-dropdown-item>
            <b-dropdown-item @click="changeTo(FirH, 'FirH')">Fir (Hard)</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Garrett, 'Garrett')">Garrett</b-dropdown-item>
            <b-dropdown-item @click="changeTo(GarrettH, 'GarrettH')">Garrett (Hard)</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Geese, 'Geese')">Geese</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Gonzales, 'Gonzales')">Gonzales</b-dropdown-item>
            <b-dropdown-item @click="changeTo(GonzalesH, 'GonzalesH')">Gonzales (Hard)</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Hugh, 'Hugh')">Hugh</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Igrene, 'Igrene')">Igrene</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Juno, 'Juno')">Juno</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Klein, 'Klein')">Klein</b-dropdown-item>
            <b-dropdown-item @click="changeTo(KleinH, 'KleinH')">Klein (Hard)</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown" text="Choose a unit (L-R)" class="m-2">
            <b-dropdown-item @click="changeTo(Lalum, 'Lalum')">Lalum</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Lance, 'Lance')">Lance</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Lilina, 'Lilina')">Lilina</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Lott, 'Lott')">Lott</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Lugh, 'Lugh')">Lugh</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Marcus, 'Marcus')">Marcus</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Merlinus, 'Merlinus')">Merlinus</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Miredy, 'Miredy')">Miredy</b-dropdown-item>
            <b-dropdown-item @click="changeTo(MiredyH, 'MiredyH')">Miredy (Hard)</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Niime, 'Niime')">Niime</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Noah, 'Noah')">Noah</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Oujay, 'Oujay')">Oujay</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Percival, 'Percival')">Percival</b-dropdown-item>
            <b-dropdown-item @click="changeTo(PercivalH, 'PercivalH')">Percival (Hard)</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Ray, 'Ray')">Ray</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Roy, 'Roy')">Roy</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Rutger, 'Rutger')">Rutger</b-dropdown-item>
            <b-dropdown-item @click="changeTo(RutgerH, 'RutgerH')">Rutger (Hard)</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown" text="Choose a unit (S-Z)" class="m-2">
            <b-dropdown-item @click="changeTo(Saul, 'Saul')">Saul</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Shin, 'Shin')">Shin</b-dropdown-item>
            <b-dropdown-item @click="changeTo(ShinH, 'ShinH')">Saul</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Sofia, 'Sofia')">Sofia</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Sue, 'Sue')">Sue</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Tate, 'Tate')">Tate</b-dropdown-item>
            <b-dropdown-item @click="changeTo(TateH, 'TateH')">Tate (Hard)</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Thany, 'Thany')">Thany</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Treck, 'Treck')">Thany</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Wade, 'Wade')">Wade</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Wendy, 'Wendy')">Wendy</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Wolt, 'Wolt')">Wolt</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Yodel, 'Yodel')">Yodel</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Zealot, 'Zealot')">Zealot</b-dropdown-item>
            <b-dropdown-item @click="changeTo(Zeis, 'Zeis')">Zeis</b-dropdown-item>
            <b-dropdown-item @click="changeTo(ZeisH, 'ZeisH')">Zeis (Hard)</b-dropdown-item>
        </b-dropdown>
        <b-form-input v-model="number" placeholder="Enter your unit HP"></b-form-input>
        <h2> {{ target.unit }} ({{target.class}})</h2>
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
            <div v-for="(entry, index) in target.info" v-bind:key="index">
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
                unit: 'No Unit Selected',
                class: '',
                info: [],
            },
            tempUnit: {
                lvl: 0,
                hp: 0,
                str: 0,
                skl: 0,
                spd: 0,
                lck: 0,
                def: 0,
                res: 0
            },
            Roy: {
                name: 'Roy',
                class: 'Lord',
                base: [1, 18, 5, 5, 7, 7, 5, 0],
                growths: [1, .80, .40, .50, .40, .60, .25, .30]
            },
            Marcus: {
                name: 'Marcus',
                class: 'Paladin',
                base: [21, 32, 9, 14, 11, 10, 9, 8],
                growths: [1, .60, .25, .20, .25, .20, .15, .20]
            },
            Allen: {
                name: 'Allen',
                class: 'Cavalier',
                base: [1, 21, 7, 4, 6, 3, 6, 0],
                growths: [1, .85, .45, .40, .45, .40, .25, .10]
            },
            Lance: {
                name: 'Lance',
                class: 'Cavalier',
                base: [1, 20, 5, 6, 8, 2, 6, 0],
                growths: [1, .80, .40, .45, .50, .35, .20, .15]
            },
            Wolt: {
                name: 'Wolt',
                class: 'ArcherM',
                base: [1, 18, 4, 4, 5, 2, 4, 0],
                growths: [1, .80, .40, .50, .40, .40, .20, .10]
            },
            Bors: {
                name: 'Bors',
                class: 'KnightM',
                base: [1, 20, 7, 4, 3, 4, 11, 0],
                growths: [1, .90, .30, .30, .40, .50, .35, .10]
            },
            Merlinus: {
                name: 'Merlinus',
                class: 'Transporter',
                base: [1, 15, 0, 3, 3, 10, 3, 0],
                growths: [1, 1, 0, .50, .50, 1, .20, .05]
            },
            Ellen: {
                name: 'Ellen',
                class: 'Priest',
                base: [2, 16, 1, 6, 8, 8, 0, 6],
                growths: [1, .45, .50, .30, .20, .70, .05, .60]
            },
            Dieck: {
                name: 'Dieck',
                class: 'Mercenary',
                base: [5, 26, 9, 12, 10, 5, 6, 1],
                growths: [1, .90, .40, .40, .30, .35, .20, .15]
            },
            Wade: {
                name: 'Wade',
                class: 'Fighter',
                base: [2, 28, 8, 3, 5, 4, 3, 10],
                growths: [1, .75, .50, .45, .20, .45, .30, .05]
            },
            Lott: {
                name: 'Lott',
                class: 'Fighter',
                base: [3, 29, 7, 6, 7, 2, 4, 1],
                growths: [1, .80, .30, .30, .35, .30, .40, .15]
            },
            Thany: {
                name: 'Thany',
                class: 'Pegasus Knight',
                base: [1, 17, 4, 6, 12, 5, 6, 5],
                growths: [1, .45, .30, .55, .60, .60, .10, .25]
            },
            Chad: {
                name: 'Chad',
                class: 'Thief',
                base: [1, 16, 3, 3, 10, 4, 2, 0],
                growths: [1, .85, .50, .50, .80, .60, .25, .15]
            },
            Lugh: {
                name: 'Lugh',
                class: 'MageM',
                base: [1, 16, 4, 5, 6, 5, 3, 5],
                growths: [1, .50, .40, .50, .50, .35, .15, .30]
            },
            Clarine: {
                name: 'Clarine',
                class: 'Troubadour',
                base: [1, 15, 2, 5, 9, 8, 2, 5],
                growths: [1, .40, .30, .40, .50, .65, .10, .40]
            },
            Rutger: {
                name: 'Rutger',
                class: 'MyrmidonM',
                base: [4, 22, 7, 12, 13, 2, 5, 0],
                growths: [1, .80, .30, .60, .50, .30, .20, .20]
            },
            RutgerH: {
                name: 'RutgerH',
                class: 'MyrmidonM',
                base: [4, 26, 9, 14, 15, 4, 6, 1],
                growths: [1, .80, .30, .60, .50, .30, .20, .20]
            },
            Saul: {
                name: 'Saul',
                class: 'Priest',
                base: [5, 20, 4, 6, 10, 2, 2, 5],
                growths: [1, .60, .40, .45, .45, .35, .15, .15]
                },
            Dorothy: {
                name: 'Dorothy',
                class: 'ArcherF',
                base: [3, 19, 5, 6, 6, 3, 4, 2],
                growths: [1, .85, .50, .45, .45, .35, .15, .15]
            },
            Sue: {
                name: 'Sue',
                class: 'NomadF',
                base: [1, 18, 5, 7, 8, 4, 5, 0],
                growths: [1, .55, .30, .55, .65, .50, .10, .15]
            },
            Zealot: {
                name: 'Zealot',
                class: 'Paladin',
                base: [21, 35, 10, 12, 13, 5, 11, 7],
                growths: [1, .75, .20, .20, .15, .30, .15]
            },
            Treck: {
                name: 'Treck',
                class: 'Cavalier',
                base: [4, 25, 8, 6, 7, 5, 8, 0],
                growths: [1, .85, .40, .30, .35, .50, .30, .05]
            },
            Noah: {
                name: 'Noah',
                class: 'Cavalier',
                base: [7, 27, 8, 7, 9, 6, 7, 1],
                growths: [1, .75, .30, .45, .30, .40, .30, .10]
            },       
            Astohl: {
                name: 'Astohl',
                class: 'Thief',
                base: [10, 25, 7, 8, 15, 11, 7, 3],
                growths: [1, .90, .35, .40, .50, .15, .20, .20]
            },
            Lilina: {
                name: 'Lilina',
                class: 'MageF',
                base: [1, 16, 5, 5, 4, 4, 2, 7],
                growths: [1, .45, .75, .20, .35, .50, .10, .35]
            },
            Wendy: {
                name: 'Wendy',
                class: 'KnightF',
                base: [1, 19, 4, 3, 3, 6, 8, 1],
                growths: [1, .85, .40, .40, .40, .45, .30, .10]
            },
            Barth: {
                name: 'Barth',
                class: 'KnightM',
                base: [9, 25, 10, 6, 5, 2, 14, 1],
                growths: [1, 1.00, .60, .25, .20, .20, .40, .02]
            },                      
            Oujay: {
                name: 'Oujay',
                class: 'Mercenary',
                base: [3, 24, 7, 10, 9, 6, 4, 0],
                growths: [1, .85, .40, .30, .45, .55, .20, .15]
            },
            Fir: {
                name: 'Fir',
                class: 'MyrmidonF',
                base: [1, 19, 6, 9, 10, 3, 3, 1],
                growths: [1, .75, .25, .50, .55, .50, .15, .20]
            },
            FirH: {
                name: 'FirH',
                class: 'MyrmidonF',
                base: [1, 25, 9, 12, 13, 5, 4, 2],
                growths: [1, .75, .25, .50, .55, .50, .15, .20]
            },
            Shin: {
                name: 'Shin',
                class: 'NomadM',
                base: [5, 24, 7, 8, 10, 6, 7, 0],
                growths: [1, .75, .45, .50, .50, .25, .10, .15]
            },
            ShinH: {
                name: 'ShinH',
                class: 'NomadM',
                base: [5, 29, 9, 11, 14, 8, 8, 1],
                growths: [1, .75, .45, .50, .50, .25, .10, .15]
            },
            Gonzales: {
                name: 'Gonzales',
                class: 'Brigand',
                base: [5, 36, 12, 5, 9, 5, 6, 0],
                growths: [1, .90, .60, .15, .50, .35, .25, .05]
            },
            GonzalesH: {
                name: 'GonzalesH',
                class: 'Brigand',
                base: [5, 43, 16, 7, 11, 6, 7, 1],
                growths: [1, .90, .60, .15, .50, .35, .25, .05]
            },
            Geese: {
                name: 'Geese',
                class: 'Pirate',
                base: [10, 33, 10, 9, 9, 9, 8, 0],
                growths: [1, .85, .50, .30, .40, 40, .20, .10]
            },
            Klein: {
                name: 'Klein',
                class: 'Sniper',
                base: [21, 27, 13, 13, 11, 10, 8, 6],
                growths: [1, .60, .35, .40, .45, .50, .15, .25]
            },
            KleinH: {
                name: 'KleinH',
                class: 'Sniper',
                base: [21, 33, 16, 16, 13, 13, 9, 7],
                growths: [1, .60, .35, .40, .45, .50, .15, .25]
            },
            Tate: {
                name: 'Tate',
                class: 'Pegasus Knight',
                base: [8, 22, 6, 8, 11, 3, 7, 6],
                growths: [1, .60, .40, .45, .55, .40, .15, .20]
            },
            TateH: {
                name: 'TateH',
                class: 'Pegasus Knight',
                base: [8, 28, 9, 12, 15, 6, 8, 8],
                growths: [1, .60, .40, .45, .55, .40, .15, .20]
            },
            Lalum: {
                name: 'Lalum',
                class: 'Dancer',
                base: [1, 14, 1, 2, 11, 9, 2, 4],
                growths: [1, .70, .10, .05, .70, .80, .20, .30]
            },
            Echidna: {
                name: 'Echidna',
                class: 'Hero',
                base: [21, 35, 13, 19, 18, 6, 8, 7],
                growths: [1, .75, .30, .25, .30, .20, .15, .15]
            },
            Elphin: {
                name: 'Elphin',
                class: 'Bard',
                base: [1, 15, 1, 3, 10, 11, 4, 1],
                growths: [1, .80, .05, .05, .65, .65, .25, .55]
            },
            Bartre: {
                name: 'Bartre',
                class: 'Warrior',
                base: [21, 48, 22, 11, 10, 14, 10, 3],
                growths: [1, .70, .40, .20, .30, .20, .20, .05]
            },
            Ray: {
                name: 'Ray',
                class: 'ShamanM',
                base: [12, 23, 12, 9, 9, 6, 5, 10],
                growths: [1, .55, .45, .55, .40, .15, .15, .35]
            },
            Cath: {
                name: 'Cath',
                class: 'Thief',
                base: [5, 16, 3, 7, 11, 8, 2, 1],
                growths: [1, .80, .40, .45, .85, .50, .15, .20]
            },
            CathH: {
                name: 'CathH',
                class: 'Thief',
                base: [5, 20, 3, 11, 15, 12, 2, 3],
                growths: [1, .80, .40, .45, .85, .50, .15, .20]
            },
            Miredy: {
                name: 'Miredy',
                class: 'Wyvern RiderF',
                base: [10, 30, 12, 11, 10, 5, 13, 3],
                growths: [1, .75, .50, .50, .45, .25, .20, .05],
                promotion: [1, 5, 2, 2, 2, 0, 2, 2]
            },
            MiredyH: {
                name: 'MiredyH',
                class: 'Wyvern RiderF',
                base: [10, 38, 17, 15, 13, 8, 16, 4],
                growths: [1, .75, .50, .50, .45, .25, .20, .05],
            },
            Percival: {
                name: 'Percival',
                class: 'Paladin',
                base: [25, 43, 17, 13, 18, 12, 14, 11],
                growths: [1, .75, .30, .25, .35, .20, .20, .10]
            },
            PercivalH: {
                name: 'PerivalH',
                class: 'Paladin',
                base: [25, 51, 20, 16, 20, 15, 15, 13],
                growths: [1, .75, .30, .25, .35, .20, .20, .10]
            },
            Cecilia: {
                name: 'Cecilia',
                class: 'Valkyria',
                base: [21, 30, 11, 7, 10, 10, 7, 13],
                growths: [1, .60, .35, .45, .25, .25, .20, .25]
            },
            Sofia: {
                name: 'Sofia',
                class: 'Shaman',
                base: [1, 15, 6, 2, 4, 3, 1, 8],
                growths: [1, .60, .55, .40, .30, .20, .20, .55]
            },
            Igrene: {
                name: 'Igrene',
                class: 'Sniper',
                base: [21, 32, 16, 18, 15, 9, 11, 10],
                growths: [1, .70, .35, .25, .35, .20, .20, .55]
            },
            Garrett: {
                name: 'Garrett',
                class: 'Berserker',
                base: [21, 49, 17, 13, 10, 12, 9, 4],
                growths: [1, .70, .45, .25, .25, .15, .15, .05]
            },
            GarrettH: {
                name: 'GarrettH',
                class: 'Berserker',
                base: [21, 55, 21, 16, 11, 14, 10, 5],
                growths: [1, .70, .45, .25, .25, .15, .15, .05]
            },
            Fae: {
                name: 'Fae',
                class: 'Mamkute',
                base: [1, 16, 2, 2, 3, 7, 2, 6],
                growths: [1, 1.30, .90, .85, .65, 1.50, .30, .50]
            },
            Hugh: {
                name: 'Hugh',
                class: 'MageM',
                base: [26, 13, 11, 12, 10, 9, 9],
                growths: [1, .75, .30, .30, .45, .25, .20, .15]
            },
            Zeis: {
                name: 'Zeis',
                class: 'Wyvern RiderM',
                base: [7, 28, 14, 9, 8, 6, 12, 2],
                growths: [1, .80, .60, .50, .35, .20, .25, .05]
            },
            ZeisH: {
                name: 'ZeisH',
                class: 'Wyvern RiderM',
                base: [7, 37, 19, 13, 11, 9, 15, 3],
                growths: [1, .80, .60, .50, .35, .20, .25, .05]
            },
            Douglas: {
                name: 'Douglas',
                class: 'General',
                base: [28, 46, 19, 13, 8, 11, 20, 5],
                growths: [1, .60, .30, .30, .30, .20, .30, .05]
            },
            Niime: {
                name: 'Niime',
                class: 'Druid',
                base: [18, 25, 21, 20, 16, 15, 5, 18],
                growths: [.25, .15, .15, .15, .05, .15, .20]
            },
            Dayan: {
                name: 'Dayan',
                class: 'Nomad Trooper',
                base: [32, 43, 14, 16, 20, 12, 10, 12],
                growths: [1, .55, .20, .20, .15, .20, .10, .10]
            },
            Juno: {
                name: 'Juno',
                class: 'Falcon Knight',
                base: [29, 33, 11, 14, 16, 14, 8, 12],
                growths: [1, .50, .20, .35, .30, .45, .10, .10]
            },
            Yodel: {
                name: 'Yodel',
                class: 'Bishop',
                base: [40, 35, 19, 18, 14, 11, 5, 30],
                growths: [1, .20, .30, .15, .10, .20, .10, .20]
            },
            Karel: {
                name: 'Karel',
                class: 'Swordmaster',
                base: [39, 44, 20, 28, 23, 18, 15, 13],
                growths: [1, 2.10, 1.30, 1.40, 1.40, 1.20, 1.10, 1.00]
            }
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        calculateStats: function(unit) {
            this.target.info = [];
            var i;
            var cap = 41 - unit.base[0]
            for (i = 0; i < cap; i++) {
                this.target.info.push({
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
            this.target.unit = name
            this.target.class = e.class
            this.calculateStats(e)
        },
    },
    computed: {
    }
}
</script>

<style scoped>

</style>