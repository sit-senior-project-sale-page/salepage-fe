<template>
  <div class="border-2 border-black rounded-md card flex">
    <img
      src="https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399"
      class="object-cover productimg"
    />
    <div class="p-3 w-full h-full flex flex-col">
      <div>
        <div class="text-lg font-semibold name"> {{web.domain}} </div>
        <a href="http://" class="underline name" style="color: #4da9ff"> {{web.domain}} </a>
      </div>
      <div class="flex space-x-2 w-full justify-end mt-auto">
        <div class="text-gray-400 underline cursor-pointer text-sm">Edit</div>
        <div class="text-gray-400 text-sm">|</div>
        <div class="text-gray-400 underline cursor-pointer text-sm">Delete</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({
  name: 'Card',
})

export default class Card extends Vue {
  @Prop() web!: any
}
</script>
<style scoped>
.productimg {
  border-radius: 4px 0px 0px 4px;
  aspect-ratio: 1 / 1;
  border-right: 2px solid black;
}
.name {
  white-space: nowrap;
  width: 175px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card {
  width: 325px;
  height: 125px;
}
</style>
