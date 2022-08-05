<template>
  <div class="pt-12">
    <!-- <div class="fixed w-full"></div> -->
    <div class="bg-gray-700">
      <div class="bg-white colum-1">
        <div class="text-3xl font-bold">Let we help you to make your own SalePage</div>
        <button
          class="h-16 text-xl font-light text-center text-white rounded-lg w-72 bg-sky-700"
        >Get start with us - Sign in</button>
      </div>
      <div class="colum-2 lg:grid-cols-2">
        <div class="w-full">
        <Placeholder
          type="preview"
          height="400"
          :imagePreview="productPicNumberThree"
        ></Placeholder>
      </div>
        <div class="w-full"></div>
      </div>
      <div class="colum-3 bg-slate-500">colum - 3</div>
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
  productPicNumberThree: string = '/images/1.5lt-bottle-ad2.jpg';
}
</script>

<style scoped>
.colum-1 {
  width: 1440px;
  height: 594px;
}
.colum-2 {
  width: 1440px;
  height: 598px;
  background: #195c9b;
}
.colum-3 {
  width: 1440px;
  height: 598px;
}
</style>
