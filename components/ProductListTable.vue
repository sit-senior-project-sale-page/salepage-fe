<template>
  <div class="w-full bg-white">
    <div class="py-4 text-center bg-white">
      <h1 class="text-2xl font-bold text-gray-900 uppercase">Product List</h1>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-center text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-[#EDEDED]">
          <tr>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Amount</th>
            <th scope="col" class="px-6 py-3">Option</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b mt-2"
            v-for="(product, index) in products"
            :key="index"
          >
            <th class="flex justify-center py-4">
              <img
                :src="productOptionImage(product)"
                class="rounded-full object-cover w-16 h-16"
              />
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ product.productId }}
            </th>
            <td class="px-6 py-4">
              {{ product.productName }}
            </td>
            <td class="px-6 py-4">
              {{ product.productAmount }}
            </td>
            <td class="px-6 py-4">
              {{ productOptions(product) }}
            </td>
            <td class="px-6 py-4">{{ product.productPrice }}฿</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly products!: Array<any>;

  productOptions(product: any) {
    if (!product.productOptions) {
      return '-';
    }

    return product.productOptions.map((option: any) => option.text).join(', ');
  }

  productOptionImage(product: any) {
    let productImage = product.productOptions.find(
      (item: any) => item.model === 'image'
    );
    //* ไม่มี รูปภาพ
    if (!productImage) {
      return '/images/preview-icon.png';
    }

    return productImage.value;
  }
}
</script>

<style></style>
