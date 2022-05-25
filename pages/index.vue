<template>
  <div class="pt-12">
    <div class="fixed body w-screen h-screen"></div>
    <div class="p-10 bg-white">
      <div>Home</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  name: 'ShopIndex',
  layout: 'nav',
})
export default class Index extends Vue {
  
}
</script>
