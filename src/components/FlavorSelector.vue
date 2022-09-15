<template>
    <div id="flavor-select-container">
        <!-- HEAD -->
        <div id="flavor-head">
            <div class="flavor-head-title">Flavors</div>
            <div class="flavor-count-changer" id="add-flavor-input" @click="increaseFlavorCount">+</div>
        </div>

        <!-- BODY -->
        <div class="flavor-input-block">
            <div v-for="n of flavors.length" :key="n" class="flavor-input">

                <div class="flavor_input_container name-input-container">
                    <label :for="`flavor_name_${n}`">Name</label>
                    <input type="text" :name="`flavor_name_${n}`" class="flavor_input name-input" v-model="flavors[n-1].name" @change="handleFlavorUpdate">
                </div>

                <div class="flavor_input_container ratio-input-container">
                    <label :for="`flavor_percent_${n}`">Ratio</label>
                    <input type="text" :name="`flavor_percent_${n}`" :class="`flavor_input ratio-input ${isNaN(parseInt(flavors[n-1].percent)) ? 'invalid-input' : ''}`" v-model="flavors[n-1].percent" @change="handleFlavorUpdate">
                </div>

                <div class="flavor_input_container flavor_type_selector">
                    <div class="flavor-type-container">
                        <label :for="`PG-${n}`">PG</label>
                        <input type="radio" :name="`PG-${n}`" value="PG" v-model="flavors[n-1].type" default @change="handleFlavorUpdate">
                    </div>
                    <div class="flavor-type-container">
                        <label :for="`VG-${n}`">VG</label>
                        <input type="radio" :name="`VG-${n}`" value="VG" v-model="flavors[n-1].type" @change="handleFlavorUpdate">
                    </div>
                </div>

                <div class="flavor_input_container flavor-delete-container">
                    <DeleteButton @delete="removeFlavor" :idx="n-1" />
                </div>

            </div>
        </div>

    </div>
</template>
  
<style scoped>
* {
    box-sizing: border-box;
}
.invalid-input {
    border: 1px solid red;
}
#flavor-select-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
#flavor-head {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    
    border-radius: 5px;
    background: rgba(0,20,30,0.8);
    border: 1px solid rgba(30,50,55,0.6);
    color: rgb(240,250,250);
    
    padding: 6px;
    margin: 5px 1rem;
    width: 100%;
}
    
.flavor-count-changer {
    padding: 3px 6px;
    font-size: larger;
    width: 25px;
    cursor: pointer;

    display: flex;
    border-radius: 10px;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: rgb(23, 167, 23);
    border: 1px solid rgb(228, 255, 234);
    background: rgba(240,250,240,0.1);
}
    
.flavor-input {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    align-content: center;
    align-items: center;
    
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(230,240,255,0.7);
    padding: 0 9px;
    margin: 5px 9px;
}

.flavor-input-block {
    width: 100%;
    padding: 0 9px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}
    
.flavor_input_container {
    padding: 6px 9px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    height: 100%;
    width: 40%;

}
    
.flavor_type_selector {
    display: flex;
    flex-direction: column;
    width: 10%;
    justify-content: right;
    align-items: right;
    align-content: center;
    
    text-align: right;
    margin: 3px 6px;
}
    
.flavor-type-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.flavor-delete-container {
    width: 5%;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
}
    
input {
    text-align: right;
    padding: 1px 6px;
    border: 1px solid rgba(0,0,0,0.7);    
}

.ratio-input{
    width: 50px;
}

.name-input {
    width: 70%;
}

.name-input-container {
    width: 60%;
}

.ratio-input-container {
    width: 20%;
}

</style>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DeleteButton from './DeleteButton.vue';

@Component({
    components: {
        DeleteButton
    },
    props:[],
    data() {
        return {
            flavors: []
        }
    },
    methods: {
        increaseFlavorCount(event) {
            this.$data.flavors.push({name:'', percent:'0', type:'PG'})
        },
        decreaseFlavorCount(event) {
            this.$data.flavors.pop()
        },
        handleFlavorUpdate(event) {
            this.$emit('flavor_update', this.$data.flavors)
        },
        removeFlavor(index) {
            return this.$data.flavors.splice(index, 1)
        }
    },
    computed: {
    },
    watch: {
    }
})
export default class FlavorSelector extends Vue {
[x: string]: any;
}
</script>
  