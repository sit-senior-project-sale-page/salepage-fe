<template>
  <div class="pt-12">
    <div class="fixed body w-screen h-screen"></div>
    <div
      class="p-10 bg-white text-center sm:w-10/12 mx-auto h-48 flex rounded-md mt-10"
    >
      <span class="my-auto mx-auto">commercial banner</span>
    </div>
    <div class="box bg-white mx-auto rounded-md align-middle h-72 mt-10">
      <div class="flex">
        <div class="w-full text-center p-5 menuactive">
          Manage Your Sale Page
        </div>
        <div
          class="w-full text-center p-5 menu2"
          style="background-color: #ececec"
        >
          Manage Order
        </div>
      </div> 
      <div class="p-10">
          <BaseCard/>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
// import Card from '~/components/base/base/base/card.vue';
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
.body {
  background-color: #f6f6f6;
  z-index: -1;
}

.box {
  width: 900px;
}
.menuactive {
  border-radius: 6px 6px 0px 0px;
}
.menu2 {
  border-radius: 0px 6px 0px 0px;
}
</style>
