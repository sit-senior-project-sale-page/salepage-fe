<template>
  <div class="">
    <div class="fixed body w-screen h-screen top-0"></div>
    <div class="w-full pb-12 px-5 md:px-12 xl:px-32">
      <AddProductModal
        v-if="dialog.enable"
        v-model="dialog.enable"
        :product-options="productOptions"
        @addProduct="addProduct"
      ></AddProductModal>
      <Placeholder v-model="productMainPic" height="510"></Placeholder>
      <div class="py-10">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div>
        <form-product ref="productForm"></form-product>
      </div>
      <div class="">
        <div class="grid md:grid-cols-2 gap-10">
          <Placeholder v-model="productPicNumberTwo" :height="'386'" />
          <Placeholder v-model="productPicNumberThree" :height="'386'" />
        </div>
        <div class="py-10">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="grid lg:grid-cols-2 gap-10">
          <div class="w-full bg-white p-5 py-8 rounded-lg">
            <h3 class="mb-4 text-[24px] font-bold text-gray-900">
              PRODUCT OPTION
            </h3>
            <div class="mb-12 justify-start gap-4">
              <div class="flex flex-wrap w-full space-x-3">
                <div v-for="(option, index) in productOptions">
                  <div
                    class="bg-[#3C3F42] px-8 py-3 text-white rounded-[10px] uppercase mb-2"
                  >
                    {{ option.text }}
                  </div>
                </div>
                <div>
                  <input
                    v-model="productOption"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-36 p-3 mr-2"
                    placeholder="attribute title"
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
            </div>
            <div class="md:flex md:space-x-2 space-y-2 md:space-y-0">
              <button
                class="text-white font-bold py-4 px-4 rounded-lg w-full"
                style="background-color: #ffb937"
                @click="dialogHandle()"
              >
                ADD PRODUCT OPTION
              </button>
              <button
                class="font-bold py-4 px-4 rounded-lg w-full buttonborder"
                @click="clearAttribute"
              >
                CLEAR ALL ATTRIBUTE
              </button>
            </div>
          </div>

          <div class="w-full bg-white p-5 py-8 rounded-lg">
            <h3 class="mb-4 text-[24px] font-bold text-gray-900">
              PROMOTION CODE
            </h3>
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
                  placeholder="code"
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
            <button
              class="font-bold py-4 px-4 rounded-lg w-full buttonborder"
              @click="clearCode"
            >
              CLEAR ALL CODE
            </button>
          </div>
        </div>
      </div>
      <div v-if="products.length > 0">
        <div class="py-10">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <product-list-table :products="products"></product-list-table>
      </div>
      <div class="py-10">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="w-full my-12">
        <MyButton
          v-if="products.length == 0"
          color="#CACACA"
          class="cursor-not-allowed"
          >CREATE SALEPAGE</MyButton
        >
        <MyButton
          v-if="products.length > 0"
          color="#195C9B"
          @click="createSalepage"
          >CREATE SALEPAGE</MyButton
        >
      </div>
    </div>
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
  layout: 'loggedinNav',
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

  dialogHandle() {
    if (
      this.productMainPic != null &&
      this.productPicNumberTwo != null &&
      this.productPicNumberThree != null
    ) {
      this.dialog.enable = true;
    } else {
      window.alert('Please fill all form before add a product options');
    }
  }

  addProductOption() {
    if (this.productOption.length > 0) {
      //* Regex replace white space to camelCase
      const model = this.productOption
        .replace(/\s(.)/g, function (match, group1) {
          return group1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (match, group1) {
          return group1.toLowerCase();
        });
      this.productOptions.push({
        text: this.productOption,
        model: model.toLowerCase().trim(),
        placeholder: `type in ${this.productOption}`,
        value: '',
      });
      this.productOption = '';
    }
  }

  // createSalepage() {
  //   window.open('/createSalepage/product/1', '_blank');
  // }

  addCode() {
    if (this.code.length > 0) {
      this.codes.push(this.code);
      this.code = '';
    }
  }

  clearAttribute() {
    // let productForm = this.$refs.productForm as any;
    // this.codes = [];
    this.productOptions = [];
    // this.code = '';
    this.productOption = '';
    // productForm.clearForm();
  }

  clearCode() {
    this.codes = [];
    this.code = '';
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
      productMainPic: URL.createObjectURL(this.productMainPic as File),
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
<style scoped>
.buttonborder {
  color: #ffb937;
  border: 2px solid #ffb937;
}
.body {
  background-color: #f6f6f6;
  z-index: -1;
}
</style>
