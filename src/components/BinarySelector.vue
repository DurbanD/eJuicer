<template>
    <div id="type_select_container">
        <div v-if="types" :class="'type_select selected ' + 'select_type_' + types[0]" @click="switchActive">{{ capitalizeString(types[0]) }}</div>
        <div v-if="types" :class="'type_select ' + 'select_type_' + types[1]" @click="switchActive">{{ capitalizeString(types[1]) }}</div>
    </div>
</template>

<style scoped>
#type_select_container {
    display: flex;
    border: 1px solid black;
    border-radius: 3px;
    align-content: center;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    width: 100px;
    padding: 0;
    margin: 0.5rem;
}

#type_select_container:hover {
    background: rgba(0,0,200, 0.05);
}
.type_select {
    padding: 1px 3px;
    font-size: 0.7em;
    width: 100%;
    background: rgba(240,240,250,0.5);
}

.type_select:first-of-type {
    border-right: 1px solid black;
}
.selected {
    border: 1px solid rgba(75, 75, 200, 1);
    background: rgba(20,20,120, 0.8);
    color: white;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
  props: {
    select_for: String, 
    types : Array,
    default: String
  },
  data() {
    return {
        active: this.$props.default
    }
  },
  methods: {
    switchActive(event) {
        if (this.$data.active === this.$props.types[0]) this.$emit('binary_select', this.$props.select_for, this.$props.types[1])
        else if (this.$data.active === this.$props.types[1]) this.$emit('binary_select', this.$props.select_for, this.$props.types[0])
    },
    capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
  },
  watch:{
    default(newDefault, oldDefault) {
        if (newDefault !== oldDefault) {
            for (let node of document.querySelectorAll('.type_select')) node.classList.toggle('selected')
            this.$data.active = newDefault
        }
    }
  }
})
export default class BinarySelector extends Vue {
    select_for: string | undefined;
    switchActive: any;
    types: string[] | undefined;
    capitalizeString: any;
}
</script>