<template>
  <div class="w-full pb-12">
    <AddProductModal
      v-if="dialog.enable"
      v-model="dialog.enable"
      :product-options="productOptions"
      @addProduct="addProduct"
    ></AddProductModal>
    <Placeholder v-model="productMainPic" height="510"></Placeholder>
    <div class="py-4">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div>
      <form-product ref="productForm"></form-product>
    </div>
    <div class="grid grid-cols-2 grid-flow-col gap-24">
      <div class="w-full">
        <Placeholder
          v-model="productPicNumberTwo"
          :height="'386'"
        ></Placeholder>
        <h3 class="mt-12 mb-4 text-[24px] font-bold text-gray-900">
          PRODUCT OPTION
        </h3>
        <div class="mb-12 flex justify-start gap-4">
          <div v-for="(option, index) in productOptions" :key="index">
            <div
              class="bg-[#3C3F42] px-8 py-3 text-white rounded-[10px] uppercase"
            >
              {{ option.text }}
            </div>
          </div>
          <div class="inline">
            <input
              v-model="productOption"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[50%] p-3 mr-2"
              placeholder="type text"
              required
            />
            <button
              class="bg-[#D2D2D2] px-4 py-3 rounded-[10px]"
              @click="addProductOption"
            >
              +
            </button>
          </div>
        </div>
        <MyButton @click="dialog.enable = true">ADD PRODUCT</MyButton>
      </div>
      <div class="w-full">
        <Placeholder
          v-model="productPicNumberThree"
          :height="'386'"
        ></Placeholder>

        <h3 class="mt-12 mb-4 text-[24px] font-bold text-gray-900">CODE</h3>
        <div class="mb-12 flex justify-start gap-4">
          <div v-for="(code, index) in codes" :key="index">
            <div
              class="bg-[#3C3F42] px-8 py-3 text-white rounded-[10px] uppercase"
            >
              {{ code }}
            </div>
          </div>
          <div class="inline">
            <input
              v-model="code"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[50%] p-3 mr-2"
              placeholder="type text"
              required
            />
            <button
              class="bg-[#D2D2D2] px-4 py-3 rounded-[10px]"
              @click="addCode"
            >
              +
            </button>
          </div>
        </div>
        <MyButton @click="clearAttribute">CLEAR ATTRIBUTE</MyButton>
      </div>
    </div>
    <div class="w-full my-12">
      <MyButton color="#195C9B" @click="createSalepage"
        >CREATE SALEPAGE</MyButton
      >
    </div>
    <div class="py-4">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <product-list-table :products="products"></product-list-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Placeholder from '@/components/Placeholder.vue';
import FormProduct from '~/components/FormProduct.vue';
import MyButton from '~/components/MyButton.vue';
import ProductListTable from '~/components/ProductListTable.vue';
import AddProductModal from '@/components/__Modal/AddProductModal.vue';
@Component({
  components: {
    FormProduct,
    MyButton,
    Placeholder,
    ProductListTable,
    AddProductModal,
  },
})
export default class Index extends Vue {
  productOption = '';
  code = '';
  productOptions = [] as Array<any>;
  dialog = {
    enable: false,
  };

  productMainPic: File | null = null;
  productPicNumberTwo = null;
  productPicNumberThree = null;
  products = [] as Array<any>;
  codes = [] as Array<any>;

  addProductOption() {
    //* Regex replace white space to camelCase
    // const model = this.productOption
    //   .replace(/\s(.)/g, function (match, group1) {
    //     return group1.toUpperCase();
    //   })
    //   .replace(/\s/g, '')
    //   .replace(/^(.)/, function (match, group1) {
    //     return group1.toLowerCase();
    //   });
    this.productOptions.push({
      text: this.productOption,
      // model: model.toLowerCase().trim(),
      placeholder: `type in ${this.productOption}`,
      value: '',
    });
    this.productOption = '';
  }

  //* เขียนเชื่อมต่อกับหลังบ้านได้เลย
  // กด create sale page เเล้วเอาข้อมูลไปเเสดง
  createSalepage() {
    window.open('/createSalepage/product/1', '_blank');
  }

  addCode() {
    this.codes.push(this.code);
    this.code = '';
  }

  clearAttribute() {
    // let productForm = this.$refs.productForm as any;
    this.codes = [];
    this.productOptions = [];
    this.code = '';
    this.productOption = '';
    // productForm.clearForm();
  }

  addProduct(data: any) {
    const productForm = this.$refs.productForm as any;
    const price =
      data.modelList.find((item: any) => item.model === 'price')?.value || 0;
    const amount =
      data.modelList.find((item: any) => item.model === 'inStock')?.value || 0;
    const options = data.modelList.filter(
      (item: any) => item.model !== 'price' && item.model !== 'inStock'
    );

    this.products.push({
      productId: Date.now(),
      // productMainPic: URL.createObjectURL(this.productMainPic as File),
      productName: productForm.productName,
      productDetail: productForm.productDetail,
      productAmount: amount,
      productPrice: price,
      productOptions: options,
    });
    console.log(this.products);

    this.dialog.enable = false;
  }

  async created() {
    const result = await this.$api.site.getSites();
    console.log('result', result);
  }
}
</script>
