<template>
  <div>
    <form>
      <div class="mb-6">
        <label
          for="product"
          class="block mb-2 text-[24px] font-bold text-gray-900"
          >Product</label
        >
        <input
          type="text"
          id="product"
          v-model="productName"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5"
          placeholder="Write your product's name"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="product"
          class="block mb-2 text-[24px] font-bold text-gray-900"
          >Detail</label
        >
        <textarea
          id="message"
          rows="4"
          v-model="productDetail"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-32"
          placeholder="Write your product’s detail"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class FormProduct extends Vue {
  productName: string = '';
  productDetail: string = '';

  clearForm() {
    this.productName = '';
    this.productDetail = '';
  }
}
</script>

<style></style>
