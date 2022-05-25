<template>
  <div class="pt-12">
    <div class="fixed body w-screen h-screen"></div>
    <div
      class="p-10 bg-white text-center lg:w-10/12 mx-auto h-48 flex rounded-md mt-10"
    >
      <span class="my-auto mx-auto text-gray-300">commercial banner</span>
    </div>
    <div
      class="w-full lg:w-10/12 xl:w-8/12 bg-white h-80 lg:mx-auto rounded-md align-middle mt-10"
    >
      <div class="flex">
        <div v-if="menu1" class="w-full text-center p-5 menuactive text-xs md:text-base font-semibold">
          Manage Your Sale Page
        </div>
        <div
          v-if="menu1 == false" @click="menu1 = true , menu2 = false"
          class="w-full text-center p-5 menu1 cursor-pointer text-xs md:text-base font-semibold"
          style="background-color: #ececec"
        >
          Manage Your Sale Page
        </div>
        <div v-if="menu2" class="w-full text-center p-5 menuactive text-xs md:text-base font-semibold">
          Manage Order
        </div>
        <div
          v-if="menu2 == false" @click="menu1 = false , menu2 = true"
          class="w-full text-center p-5 menu2 cursor-pointer text-xs md:text-base font-semibold"
          style="background-color: #ececec"
        >
          Manage Order
        </div>
      </div>
      <div v-if="menu1" class="p-5 md:p-10">
        <BaseCard />
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
  //   name: 'ShopIndex'
  menu1 = true;
  menu2 = false;
  
}
</script>
<style scoped>
.body {
  background-color: #f6f6f6;
  z-index: -1;
}
.box {
  width: 100%;
}
@media (min-width: 1024px) {
  .box {
    width: 900px;
  }
}
.box {
  width: 100%;
}
.box {
  width: 900px;
}
.menuactive {
  border-radius: 6px 6px 0px 0px;
}
.menu1 {
  border-radius: 6px 0px 0px 0px;
}
.menu2 {
  border-radius: 0px 6px 0px 0px;
}
</style>
