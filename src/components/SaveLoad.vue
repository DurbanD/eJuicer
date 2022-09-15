<template>
    <div id="file-io-container">
        <SaveButton text="Save" @save_click_notice="handleSaveClick" />
        <!-- <LoadButton text="Load" @load_click_notice="handleLoadClick" /> -->
    </div>
</template>

<style scoped>
  #file-io-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;

    border: 1px solid black;
    background: rgba(240,240,250,0.8);

    padding: 0;
    margin: 6px 9px;
    height: 2rem;
    width: 10%;
  }

</style>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SaveButton from './SaveButton.vue';
  import LoadButton from './LoadButton.vue';
  
  @Component({
    components: {
        SaveButton, 
        LoadButton
    },
    props: ['mixer'],
    methods: {
      handleSaveClick() {
        function download(data:any, filename:string, type:string) {
          const file = new Blob([data], {type: type}),
            a = document.createElement("a"),
            url = URL.createObjectURL(file);
          
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();

          setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
          }, 0); 
        }
        let jsonData = this.$props.mixer.getJSON(),
          name = `${this.$props.mixer.active.name.replaceAll(' ', '_')}.json`,
          type = 'application/json'
        return download(jsonData, name, type)
      },
      async handleLoadClick(data) {
        if (data.type !== 'application/json') return
        console.log('Full eJuice Recipe loading functionality is not yet implemented')
        console.log(data)
        return
      }
    }
  })
  export default class SaveLoad extends Vue {
[x: string]: any;
}
  </script>