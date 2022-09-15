<template>
    <div id="RatioSelector_container">
        <div id="left-label" class="ratio-label">% PG</div>
        <input type="text" id="left-input" class="ratio-input" v-model="leftInput">

        <Slider :val="rightInput" @slider_update="handleSliderUpdate" />
        
        <input type="text" id="right-input" class="ratio-input" v-model="currentSliderValue" @change="rightSideChange">
        <div id="right-label" class="ratio-label">% VG</div>
    </div>
</template>
  
<style scoped>
#RatioSelector_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border: 1px solid black;

    background: rgba(0, 20, 30, 0.25);
    padding: 3px 6px;
    border-radius: 5px;
}

.ratio-label {
    padding: 3px;
}

.ratio-input {
    width: 25px;
    padding: 3px;
    margin: 3px 6px;

    text-align: center;
    border-radius: 50%;
    border: 1px solid black;
}
</style>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Slider from './Slider.vue';

@Component({
    components: {
        Slider
    },
    data() {
        return {
            currentSliderValue: 50
        }
    },
    methods: {
        handleSliderUpdate(val) {
            this.$data.currentSliderValue = val
            this.$emit('ratio_update', this.$data.currentSliderValue)
        },
        rightSideChange(event) {
            if (event.target && event.target.value) this.$data.currentSliderValue = event.target.value
        }
    },
    computed: {
        rightInput() {
            return this.$data.currentSliderValue
        },
        leftInput() {
            return 100 - this.$data.currentSliderValue
        }
    }
})
export default class RatioSelector extends Vue {
[x: string]: any;
}
</script>
  