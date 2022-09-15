<template>
    <div id="juicemixer-input">
        <form id="juicemixer_input_form">

            <!-- Juice Name -->
            <div class="form-block">
              <label for="name">Name</label>
              <input type="text" name="name" v-model="formData.name" class="form-input text-input" id="name-input">
            </div>
    
            <!-- Total Volume -->
            <div class="form-block">
              <label for="juice-volume">Total Volume (ml)</label>
              <input type="text" name="juice-strength" class="form-input number-input" v-model="formData.totalVolume">
            </div>
    
            <!-- Juice Flavors -->
            <div class="form-block">
                <FlavorSelector @flavor_update="handleFlavorUpdate" />
            </div>
        
            <!-- Juice Strength -->
            <div class="form-block">
              <label for="juice-strength">Desired Juice Nicotine Strength (mg per ml)</label>
              <input type="text" name="juice-strength" class="form-input number-input" v-model="formData.juiceStrength">
            </div>
    
            <!-- Nicotine Strength -->
            <div class="form-block">
              <label for="nic-strength">Potency of Undiluted Nicotine (mg per ml)</label>
              <input type="text" name="nic-strength" class="form-input number-input" v-model="formData.nicotineStrength">
            </div>
    
            <!-- VG/PG Ratio -->
            <div class="form-block">
              <RatioSelector @ratio_update="handleRatioUpdate" />
            </div>
            
            <!-- SUBMIT -->
            <div id="submit-btn" @mouseup="handleSubmitClick">Calculate</div>
          </form>
    </div>
</template>
  
<style scoped>
#juicemixer-input {
    margin: 1rem;
    padding: 0;
}
.form-block {
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(230,240,255,0.6);
    padding: 6px 9px;
    margin: 0.25rem 3rem;
    
    width: 90%;
    
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

input {
    text-align: right;
    width: 10%;
    padding: 1px 6px;
    border: 1px solid rgba(0,0,0,0.7);
}

#name-input {
    width: 40%;
}

#juicemixer_input_form{
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-content: center;
    align-items: center;

    width: 100%;
    margin: 0;
}

#submit-btn {
    background: rgba(230,240,255,0.7);
    width: 30%;
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(230,230,255,0.6);
    margin: 0.25rem;
}
    
#submit-btn:hover {
    background: rgba(0,20,30,0.8);
    color: rgb(240,250,250);
    border: 1px solid rgba(240,250,250, 0.8);
    cursor: pointer;
}
</style>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RatioSelector from './RatioSelector.vue';
import FlavorSelector from './FlavorSelector.vue';

@Component({
    components: {
        RatioSelector,
        FlavorSelector
    },
    props:[],
    data() {
        return {
            formData: {
                name:'',
                flavors: [],
                juiceStrength: 0,
                nicotineStrength: 0,
                VG: 50,
                PG: 50,
                totalVolume: 0,
                submitted: false
            }
        }
    },
    methods: {
        increaseFlavorCount(event) {
            this.$data.formData.flavors.push({name:'', percent:0, type:'PG'})
        },
        decreaseFlavorCount(event) {
            this.$data.formData.flavors.pop()
        }, 
        handleSubmitClick(event){
            this.$data.formData.submitted = true
            this.$emit('input_update', this.$data.formData)
        },
        handleRatioUpdate(updatedVal) {
            this.$data.formData.VG = parseInt(updatedVal)
            this.$data.formData.PG = 100 - updatedVal
        },
        handleFlavorUpdate(flav) {
            this.$data.formData.flavors = flav
        }
    },
    computed: {
    },
    watch: {
    }
})
export default class JM_Input extends Vue {
[x: string]: any;
}
</script>
  