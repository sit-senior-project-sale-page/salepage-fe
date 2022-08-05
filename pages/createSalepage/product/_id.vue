<template>
  <div class="w-full px-5 pb-12 md:px-12 xl:px-32">
    <div class="fixed top-0 left-0 w-screen h-screen body"></div>
    <Placeholder
      type="preview"
      height="510"
      :imagePreview="productMainPic"
    ></Placeholder>
    <div class="py-5">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="grid gap-12 my-12 lg:grid-cols-2">
      <div class="w-full">
        <Placeholder
          type="preview"
          height="400"
          :imagePreview="productPicNumberTwo"
        ></Placeholder>
      </div>
      <div class="w-full">
        <h2 class="mb-4 text-[24px] font-bold text-gray-900">
          {{ productName }}
        </h2>
        <p v-html="productDetail"></p>
      </div>
    </div>
    <Placeholder
      type="preview"
      height="510"
      :imagePreview="productPicNumberThree"
    ></Placeholder>
    <div class="py-5">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="grid gap-12 my-12 lg:grid-cols-2">
      <div class="w-full">
        <Placeholder
          type="preview"
          height="400"
          :imagePreview="getImageFromProductOption"
        ></Placeholder>
      </div>
      <div class="w-full">
        <h2 class="mb-4 text-[24px] font-bold text-gray-900">Product Option</h2>
        <select
          name="options"
          id="options"
          class="w-full h-10 px-2 text-gray-600 border border-gray-300 rounded-lg cursor-pointer sm:w-3/4 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow ring-offset-2"
          v-model="productOption"
        >
          <option value="">Select</option>
          <template v-for="(option, index) in getListProductOptions">
            <option :value="option">{{ option }}</option>
          </template>
        </select>
        <h2 class="my-4 text-[24px] font-bold text-gray-900">Amount</h2>
        <input
          type="text"
          class="w-full p-2 bg-white rounded sm:w-3/4 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-outline focus:shadow ring-offset-2"
          placeholder="type your number"
        />
        <h2 class="my-4 text-[24px] font-bold text-gray-900">Promotion Code</h2>
        <input
          type="text"
          class="w-full p-2 bg-white rounded sm:w-3/4 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-outline focus:shadow ring-offset-2"
          placeholder="type your number"
        />
        <h2 class="my-4 text-right text-[24px] font-bold">
          {{ productPrice }} ฿
        </h2>
      </div>
    </div>
    <MyButton color="#195C9B">BUY</MyButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Placeholder from '~/components/Placeholder.vue';

@Component({
  layout: 'loggedinNav',
  components: {
    Placeholder,
  },
})
export default class Product extends Vue {
  productMainPic: string =
    '/images/FW_2021_330ml_900x900_67b53c22-56f2-47f2-ae5d-8674c4de886d_600x.webp';
  productPicNumberTwo: string = '/images/1.5lt-bottle-ad2.jpg';
  productPicNumberThree: string = '/images/OFM0002857_X2.jpeg';

  productOptions = [
    {
      text: 'สี',
      model: 'สี',
      placeholder: 'type in สี',
      value: 'ขาว',
    },
    {
      text: 'ขนาด',
      model: 'ขนาด',
      placeholder: 'type in ขนาด',
      value: 'ใหญ่',
    },
    {
      text: 'Image',
      model: 'image',
      placeholder: 'input image',
      value: 'blob:http://localhost:3000/69910684-6bc0-4fa8-8df8-57dad5ffdbe7',
    },
  ] as Array<any>;

  productPrice: number = 200;
  productName: string = 'Product Name';
  productOption: string = ''; //* ใช้สำหรับเลือก Select
  productDetail: string = `
รีวิวสรุป ส่วนประกอบแบบละเอียดยิบ<br />
✅Anti-oxidant : Aquatide / Leontopodium Alpinum Callus Culture Extract<br />
✅Moisterizer/humectant เพิ่มความชุ่มชื้น : Sodium Hyaluronate / Glycerin / Biosaccharide Gum-2<br />
✅Soothing ปรอบประโรม ลดระคายเคือง : Allantoin / Aloe<br />
✅พร้อม filer sunscreen ถึง 3 ตัว มั่นใจปกป้องผิว จาก UVA UVB ได้แน่นอน<br />
✅Seorak Hot Spring Waterน้ำแร่จากบ่อน้ำร้อนธรรมชาติ อุดมไปด้วยแร่ธาตุกว่า 20 ชนิด<br />
ไม่มีสเตียรอยด์`;

  get getListProductOptions(): Array<any> {
    return this.productOptions
      .filter((item: any) => item.model !== 'image')
      .map((item: any) => `${item.text} : ${item.value}`);
  }

  //* สามารถดึงรูปภาพตอนใส่ Product Option แล้วใช้ Computed
  get getImageFromProductOption(): String {
    let image = {
      'สี : ขาว': '/images/1.5lt-bottle-ad2.jpg',
    } as any;

    if (!image[this.productOption]) return '/images/preview-icon.png';
    return image[this.productOption];
  }
}
</script>

<style scoped>
.body {
  background-color: #f6f6f6;
  z-index: -1;
}
</style>
