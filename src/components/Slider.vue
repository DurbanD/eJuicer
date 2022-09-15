<template>
    <div id="slider_container">
        <input type="range" min="0" max="100" v-model="currentValue" class="slider" id="myRange" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
    </div>
</template>
  
<style scoped>
#slider_container {
    width: 100%; /* Width of the outside container */

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
    
/* The slider itself */
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 10px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.8; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;

    border: 1px solid rgba(30,30,40,0.8);
    border-radius: 5px;
}

/* Mouse-over effects */
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb, .slider::-moz-range-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 10px; /* Set a specific slider handle width */
    height: 20px; /* Slider handle height */
    background: #04AA6D; /* Green background */
    cursor: pointer; /* Cursor on hover */
    border: 1px solid black;
}

</style>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
    props:['val'],
    data() {
        return {
            currentValue: this.$props.val
        }
    },
    methods: {
        handleMouseDown(event:Event) {
            const moveListener = event.target?.addEventListener('mousemove', (e)=> this.$emit('slider_update', this.$data.currentValue))
            if (moveListener) event.target?.addEventListener('mouseup', ()=> event.target?.removeEventListener('mousemove', moveListener))
            return
        },
        handleMouseUp(event) {
            return
        }
    },
    computed: {
    },
    watch: {
        val(newVal) {
            this.$data.currentValue = newVal
        }
    }
})
export default class Slider extends Vue {
[x: string]: any;
}
</script>
  