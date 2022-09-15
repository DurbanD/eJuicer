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
    width: 50%;
  }

  #save-btn {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

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
      //   function download(data:any, filename:string, type:string) {
      //     const file = new Blob([data], {type: type}),
      //       a = document.createElement("a"),
      //       url = URL.createObjectURL(file);
          
      //     a.href = url;
      //     a.download = filename;
      //     document.body.appendChild(a);
      //     a.click();

      //     setTimeout(function() {
      //       document.body.removeChild(a);
      //       window.URL.revokeObjectURL(url);  
      //     }, 0); 
      //   }

      //   let jsonData = this.$props.mixer.getJSON(),
      //     name = `${this.$props.mixer.active.name}.txt`,
      //     type = 'text/plain'
      //   return download(jsonData, name, type)
      // }
        this.$emit('save_click_notice')
      }
    }
  })
  export default class SaveButton extends Vue {
[x: string]: any;
}
  </script>