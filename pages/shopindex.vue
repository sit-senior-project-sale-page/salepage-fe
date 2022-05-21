<template>
  <div class="">
    <div
      class="p-10 bg-slate-100 text-center sm:w-10/12 mx-auto my-5 h-48 flex rounded-md"
    >
      <span class="my-auto mx-auto">commercial banner</span>
    </div>
    <div class="box bg-slate-100 mx-auto rounded-md align-middle h-72">
      <div class="flex">
        <div class="w-full text-center p-5">Manage Your Sale Page</div>
        <div class="w-full text-center p-5">Manage Your Sale Page</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  name: 'ShopIndex',
  layout: 'nav',
})

// layout(context) {
//     return 'nav'
//   },
export default class ShopIndex extends Vue {
  // name: 'IndexPage',
}
</script>
<style scoped>
#body {
  background-color: aqua;
}
.box {
  width: 800px;
}
.menu1 {
  border-radius: 12px;
}
.menu2 {
}
</style>
