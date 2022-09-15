<template>
    <div class="load-container">
        <input type="file" name="load-input" id="load-input" v-if="clicked === true" ref="dataLoad">
        <div id="load-btn" @click="handleClick">Load</div>
    </div>
  </template>
  
<style scoped>
.load-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    border-left: 1px solid black;

    width: 50%;
    height: 100%;
}

#load-btn {
    border-left: 1px solid black;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

#load-input {
    padding: 0 6px;
}

</style>

  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component({
    data() {
        return {
            clicked: false
        }
    },
    components: {
    },
    props: [],
    methods: {
      handleClick(event) {
        if (this.$data.clicked) {
            event.preventDefault();
            if (!this.$refs.dataLoad) return
            let data = this.$refs.dataLoad.files[0]

            this.$emit('load_click_notice', data)
        }
        this.$data.clicked = true
      }
    }
  })
  export default class LoadButton extends Vue {
[x: string]: any;
}
  </script>