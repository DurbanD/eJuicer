<template>
    <div id="juicemixer-output">

        <!-- Juice Name -->
        <div class="output-block">
            <p class="output-title">Name: </p>
            <p class="output-data">{{activeMixer.name}} </p>
        </div>

        <!-- Juice Total Volume -->
        <div class="output-block">
            <p class="output-title">Total Volume: </p>
            <p class="output-data">{{activeMixer.mlTotalVolume}} ml</p>
        </div>

        <!-- Juice Flavors -->
        <FlavorOutput :flavors="activeMixer.flavors" />

        <!-- Juice Strength -->
        <div class="output-block">
            <p class="output-title">Juice Strength: </p>
            <p class="output-data">{{activeMixer.juiceStrengthMGperML}} mg / ml</p>
        </div>

        <!-- Nicotine Strength -->
        <div class="output-block">
            <p class="output-title">Undiluted Nicotine Strength: </p>
            <p class="output-data">{{activeMixer.nicotineStrengthMGperML}} mg / ml </p>
        </div>

        <!-- Nicotine Volume Required -->
        <div class="output-block">
            <p class="output-title">Undiluted Nicotine Volume: </p>
            <p class="output-data">{{activeMixer.mlNicotineVolume}} ml </p>
        </div>

        <!-- PG/VG -->
        <div class="output-block">
            <p class="pg-output-title">{{activeMixer.PG.total}} ml Propylene Glycol ({{activeMixer.PG.ratio}}%) </p>
            <!-- <p class="output-data">Total: {{activeMixer.PG.total}}ml ({{activeMixer.PG.ratio}}%)  </p> -->
            <p class="output-data">Add {{activeMixer.PG.added}} ml</p>
        </div>

        <div class="output-block">
            <p class="vg-output-title">{{activeMixer.VG.total}} ml Vegetable Glycerin ({{activeMixer.VG.ratio}}%)</p>
            <!-- <p class="output-data">Total: {{activeMixer.VG.total}}ml ({{activeMixer.VG.ratio}}%) </p> -->
            <p class="output-data">Add {{activeMixer.VG.added}} ml</p>
        </div>
    </div>
</template>
  
<style scoped>
#juicemixer-output {
    margin: 1rem;
}
.output-flavor-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
    align-content: center;
    align-items: center;

    border: 1px solid black;
    border-radius: 5px;
    background: rgba(230,240,255,0.7);
    padding: 3px 9px;
    margin: 5px 9px;
}

.output-block {
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(230,230,255,0.6);
    padding: 6px 9px;
    margin: 0.25rem 3rem;
    
    width: 90%;
    
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
  
.output-flavor-container {
    width: 100%;
    padding: 0;

    display: flex;
    align-content: center;
    align-items: center;

    justify-content: space-between;
}

.flavor-output {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.flavor-output-head {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    
    border-radius: 5px;
    background: rgba(0,20,30,0.8);
    border: 1px solid rgba(30,50,55,0.6);
    color: rgb(240,250,250);
    
    padding: 9px 1rem;
    margin: 5px 1rem;
    width: 100%;
}

.flavor-output-subcontainer {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 25%;
    height: 100%;
    border: 1px solid rgba(0,20,30,0.4);
    padding: 3px 6px;
}

.flavor-output-subcontainer > p {
    margin: 0px 3px;
}
p {
    margin: 0
}

#flavor-header-block {
    border-radius: 5px;
    background: rgba(0,20,30,0.6);
    border: 1px solid rgba(30,50,55,0.46);
    color: rgb(240,250,250);
}
</style>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FlavorOutput from './FlavorOutput.vue';

@Component({
    components: {
        FlavorOutput
    },
    props:['activeMixer'],
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    watch: {
    }
})
export default class JM_Output extends Vue {
[x: string]: any;
}
</script>
  