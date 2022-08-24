<template>
  <div>
    <div class="w-full h-12 nav fixed flex justify-end p-2 px-5 text-stone-500" style="color: #4d3d1e;">
      <div
        class="px-5 rounded-md hover:bg-white hover:bg-opacity-25 transition-all flex"
      >
        <div class="my-auto mx-auto">
          <nuxt-link to="/">Home</nuxt-link>
        </div>
      </div>
      <div
        class="px-5 rounded-md hover:bg-white hover:bg-opacity-25 transition-all flex"
      >
        <div class="my-auto mx-auto">
          <nuxt-link to="login">Login</nuxt-link>
        </div>
      </div>
    </div>
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
  background-color: #ffb730;
}

</style>
