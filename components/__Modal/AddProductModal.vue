<template>
  <div
    v-show.transition.opacity="show"
    style="background-color: rgba(0, 0, 0, 0.8)"
    class="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full overflow-scroll mt-12"
  >
    <div class="p-3 md:p-5 max-w-5xl mx-auto absolute left-0 right-0 2xl:top-[15%]">
      <div class="shadow w-full rounded-lg bg-white block p-5 md:p-8">
        <div class="flex justify-between items-center">
          <h2 class="font-bold text-2xl text-gray-800 uppercase">
            Add product
          </h2>
          <button
            class="bg-red-600 text-white active:bg-red-700 text-sm font-bold uppercase p-3 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            @click="show = false"
          >
            X
          </button>
        </div>

        <div class="mt-4 pt-6 border-t">
          <div class="border-1">
            <div class="md:flex flex-row mb-6 gap-8">
              <div class="basis-1/2">
                <div
                  v-for="(item, index) in modelListComputed"
                  :key="index"
                  class="block pb-8"
                >
                  <label
                    :for="item.model"
                    class="block mb-2 text-[24px] font-bold text-gray-900"
                    >{{ item.text }}</label
                  >
                  <input
                    :id="item.model"
                    v-model="item.value"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    :placeholder="item.placeholder"
                    required
                  />
                </div>
              </div>
              <div class="w-full">
                <Placeholder
                  v-model="productOptionImage"
                  height="442"
                ></Placeholder>
              </div>
            </div>
            <div class="w-full">
              <MyButton color="#195C9B" @click="addProduct">ADD</MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, VModel, Prop } from 'nuxt-property-decorator';
import MyButton from '@/components/MyButton.vue';
import Placeholder from '@/components/Placeholder.vue';
@Component({
  name: 'AddProductModal',
  components: { MyButton, Placeholder },
})
export default class AddProductModal extends Vue {
  @VModel({ type: Boolean }) show!: Boolean;

  @Prop({ type: Array, default: [] }) readonly productOptions!: Array<any>;

  productOptionImage: File | null = null;

  modelList: Array<any> = [
    {
      text: 'Price',
      model: 'price',
      placeholder: 'type pricing',
      value: '',
    },
    {
      text: 'Amount in stock',
      model: 'inStock',
      placeholder: 'type in stock',
      value: '',
    },
  ];

  get modelListComputed() {
    return [...this.productOptions, ...this.modelList];
  }

  addProduct() {
    this.$emit('addProduct', {
      modelList: [
        ...this.modelListComputed,
        this.productOptionImage && {
          // text: 'Image',
          model: 'image',
          placeholder: 'input image',
          value: URL.createObjectURL(this.productOptionImage),
        },
      ],
    });
  }
}
</script>

<style></style>
