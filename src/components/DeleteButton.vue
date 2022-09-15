<template>
    <div class="delete-btn-container" @click="handleClick">
      <div class="delete-btn">-</div>
    </div>
  </template>

<style scoped> 
.delete-btn {
  font-weight: bolder;
  padding-bottom: 5px;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.delete-btn-container{
  border: 1px solid black;
  background: rgba(255, 255, 255, 1);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  cursor: pointer;
  color: darkred;
}

.delete-btn-container:hover {
  background: rgba(20, 10, 10, 0.9);
  border: 1px solid white;
  color: red;
}


</style>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component({
    components: {

    },
    props: ['idx'],
    methods: {
      handleClick(){
        this.$emit('delete', this.$props.idx)
      },
      showTrash(event) {
        event.target.innerHTML = `🔥`;
        event.target.style.color = 'fire'
      },
      noTrash(event) {
        event.target.innerHTML = '-'
      }
    }
  })
  export default class DeleteButton extends Vue {
[x: string]: any;
}
  </script>
  