<template>
  <div class="home">
    <JuiceMixer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JuiceMixer from '@/components/JuiceMixer.vue'; // @ is an alias to /src

@Component({
  components: {
    JuiceMixer,
  },
})
export default class Home extends Vue {}
</script>
