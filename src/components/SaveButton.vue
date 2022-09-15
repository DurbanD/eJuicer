<template>
    <div class="save-btn-container">
      <div id="save-btn" @click="handleClick">{{text}}</div>
    </div>
</template>

<style scoped>

  .save-btn-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  #save-btn {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 100%;
    width: 100%;
  }

</style>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component({
    components: {
    },
    props: ['text'],
    methods: {
      handleClick(event) {
        this.$emit('save_click_notice')
      }
    }
  })
  export default class SaveButton extends Vue {
[x: string]: any;
}
  </script>