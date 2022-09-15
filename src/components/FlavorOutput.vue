<template>
    <div id="flavor-output">
        <!-- Juice Flavors -->
        <div class="output-block">
            <div class="flavor-output-head">Flavors: </div>
            <div id="flavor-header-block" class=" output-flavor-container" v-if="flavors.length > 0">
                <p class="output-flavor-title flavor-output-subcontainer">Name</p>
                <p class="output-flavor-title flavor-output-subcontainer">Ratio</p>
                <p class="output-flavor-title flavor-output-subcontainer">Type</p>
                <p class="output-flavor-title flavor-output-subcontainer">Volume</p>
            </div>
            <div class="output-data output-flavor-container" v-for="flavor of flavors" :key="flavor.name">
                <div class="flavor-output-subcontainer" v-if="flavor.name !== undefined">
                    <p class="output-flavor-data">{{flavor.name}}</p>
                </div>
            
                <div class="flavor-output-subcontainer" v-if="flavor.ratio !== undefined">
                    <p class="output-flavor-data">{{flavor.ratio}}%</p>
                </div>

                <div class="flavor-output-subcontainer" v-if="flavor.type">
                    <p class="output-flavor-data">{{flavor.type}}</p>
                </div>

                <div class="flavor-output-subcontainer" v-if="flavor.volumeNeededML !== undefined">
                    <p class="output-flavor-data">{{flavor.volumeNeededML}}ml</p>
                </div>

            </div>

            <div class="output-flavor-container empty-output-container" v-if="flavors.length > 0">
                <div class="flavor-output-subcontainer empty-subcontainer"></div>
                <div class="flavor-output-subcontainer empty-subcontainer"></div>
                <div class="flavor-output-subcontainer empty-subcontainer"></div>
                <div id="flavor-total" class="flavor-output-subcontainer">Total: {{flavorVolumeTotal}}ml ({{flavorRatioTotal}}%)</div>
            </div>
            
        </div>
    </div>
</template>
  
<style scoped>
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
    flex-direction: column;
    justify-content: center;
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

#flavor-total {
    justify-self: right;
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(230,240,255,0.7);
    padding: 3px 9px;
}
.empty-subcontainer {
    border: none;
    width: 0;
    background: rgba(0,0,0,0);
}

.empty-output-container {
    background: none;
    border: none;
}
</style>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
    props:['flavors'],
    data() {
        return {
            testVal : 0
        }
    },
    methods: {
        test() {
            this.$data.testVal++
            console.log(this.$data.testVal)
        }
    },
    computed: {
        flavorVolumeTotal() {
            let total = 0
            for (let flavor of this.$props.flavors) total += flavor.volumeNeededML
            return total
        },
        flavorRatioTotal() {
            let total = 0
            for (let flavor of this.$props.flavors) total += parseInt(flavor.ratio)
            return total
        }
    },
    watch: {
    }
})
export default class FlavorOutput extends Vue {
[x: string]: any;
}
</script>
  