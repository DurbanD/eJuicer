<template>
  <div id="juicemixer_main">
    <div id="juicemixer-head">
      <BinarySelector :types="['input', 'output']" select_for="display" :default="display" @binary_select="handleDisplaySelection" />
      <!-- <div id="save-load-container">
        <SaveButton :mixer="mixer" v-if="formData.submitted" />
        <LoadButton />
      </div> -->
      <SaveLoad :mixer="mixer" />
      
    </div>
    

    <!-- Juice Mixer Main Input -->
    <div id="juicemixer-input-container" v-if="display === 'input'">
      <JM_Input @input_update="handleInputUpdate" />
    </div>
    
    <!-- Juice Mixer Main Output -->
    <div id="juicemixer-output-container" v-if="formData.submitted && display === 'output'">
      <JM_Output :activeMixer="mixer.active" />
    </div>

  </div>
</template>

<style scoped>

#save-load-container {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  height: 2rem;
}

#juicemixer-head {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

* {
  box-sizing: border-box;
}

#juicemixer_main {
  width: 70vw;
  background: rgba(245, 245, 255, 0.5);
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  margin: 1rem;
  padding: 0;
}

#juicemixer-input-container,
#juicemixer-output-container  {
  width : 100%
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mixer } from '../scripts/Mixer';
import JM_Output from './JM_Output.vue'
import JM_Input from './JM_Input.vue';
import BinarySelector from './BinarySelector.vue';
import SaveButton from './SaveButton.vue';
import LoadButton from './LoadButton.vue';
import SaveLoad from './SaveLoad.vue';

const JuiceMix = new Mixer('Mixer1');

@Component({
  components: {
    JM_Output,
    JM_Input,
    BinarySelector,
    SaveButton,
    LoadButton,
    SaveLoad
  },
  data() {
    return {
      mixer : JuiceMix,
      display : 'input',
      flavorCount : 1,
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
    handleInputUpdate(data) {
      this.$data.formData = data
      const mixer = this.$data.mixer,
      name = data.name,        
      totalVolume = data.totalVolume,
      flavors = data.flavors.map((F:any)=>mixer.createFlavor(F.name, parseInt(F.percent), F.type)),
      juiceStrength = data.juiceStrength,
      nicotineStrength = data.nicotineStrength

      let juice = mixer.createJuice(name, parseInt(totalVolume), flavors, parseInt(juiceStrength), parseInt(nicotineStrength))
      juice.setRatio(data.VG)

      mixer.setActive(juice)

      console.log(mixer.getJSON())

      this.$data.display = 'output'
    },
    handleDisplaySelection(select_for, selected) {
      if (select_for === 'display') this.$data.display = selected
    }
  }
})
export default class JuiceMixer extends Vue {
[x: string]: any;
}
</script>
