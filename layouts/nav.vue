<template>
  <div>
    <div class="w-full h-12 nav fixed" style=""></div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class NavBar extends Vue {}
</script>
<style scoped>
.nav {
    background-color: rgb(255, 185, 55)
}

</style>
