<template>
  <div>
    <Loading v-if="$fetchState.pending" />
    <div v-else>
      <div class="flex">
        <div
          class="fixed w-screen h-screen top-0"
          style="background-color: #0f385f; z-index: -10"
        ></div>
        <div
          class="md:m-10 md:rounded-3xl md:p-10 bg-white lg:my-24 w-full box"
        >
          <div class="md:flex">
            <div>
              <div>
                <img
                  :src="previewimg"
                  class="preview object-cover md:rounded-lg"
                />
              </div>
              <div
                class="p-3 px-6 rounded-xl mx-6 md:mx-auto my-6 md:flex hidden"
                style="background-color: #f6f6f6"
              >
                <img
                  :src="previewimg"
                  class="h-14 w-14 preview rounded-full object-cover"
                  style="outline-width: 1px; outline-color: #e9e9e9"
                />
                <div class="font-bold my-auto ml-5">
                  {{ site.domain }}
                </div>
              </div>
            </div>
            <div class="w-auto">
              <div class="mt-5 mb-7 mx-6 space-y-3">
                <div class="font-bold text-xl md:text-3xl">
                  {{ site.Product.name }}
                </div>
                <div
                  class="font-bold text-xl md:text-2xl xl:text-3xl"
                  style="color: #ffb730"
                >
                  <span v-if="select == ''">{{ price }} </span
                  ><span v-if="select != ''">{{ total }} ฿ </span>
                </div>
              </div>

              <div
                class="p-3 px-6 rounded-xl mx-6 md:mx-auto my-6 flex md:hidden"
                style="background-color: #f6f6f6"
              >
                <img
                  :src="logo"
                  class="h-14 w-14 rounded-full object-cover"
                  style="outline-width: 1px; outline-color: #e9e9e9"
                />
                <div class="font-bold my-auto ml-5">
                  {{ site.domain }}
                </div>
              </div>

              <div class="mx-6 mb-10 md:hidden">
                <div class="font-bold text-lg">Product details</div>
                <div class="mt-4">{{ site.Product.detail }}</div>
              </div>

              <div class="mx-6 mb-10">
                <div class="font-bold text-lg mb-4">Product options</div>
                <div
                  class="grid grid-cols-2 lg:grid-cols-3 col-span-5 justify-items-center productoptions"
                >
                  <div
                    v-for="option in site.Product.ProductOption"
                    :key="option.name"
                  >
                    <div
                      :id="option.name"
                      class="mb-3 option cursor-pointer border-solid border-2 border-orange-500 rounded-lg"
                      @click="
                        (select = option.name) +
                          (quantity = 1) +
                          (op = option.price) +
                          (total = option.price * quantity)
                      "
                    >
                      <img
                        src="https://inwfile.com/s-fn/mj7wnt.jpg"
                        class="object-cover h-36 w-36"
                        style="border-radius: 12px 12px 0 0"
                      />
                      <div
                        class="text-center p-2 text-xs text-white optionname"
                      >
                        {{ option.name }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-3 flex">
                  <div>
                    <div class="font-bold text-lg mb-4">Quantity</div>
                    <div class="flex">
                      <div
                        v-if="quantity == 1"
                        class="w-10 h-10 qbox1 flex cursor-default"
                        style="color: #f3f3f3"
                      >
                        <div class="mx-auto my-auto">-</div>
                      </div>
                      <div
                        v-if="quantity > 1"
                        class="w-10 h-10 qbox1 flex cursor-pointer"
                        style="color: #404040"
                        @click="(quantity -= 1) + (total = op * quantity)"
                      >
                        <div class="mx-auto my-auto">-</div>
                      </div>
                      <div
                        class="w-10 h-10 qbox2 text-lg flex"
                        style="color: #ffb730"
                      >
                        <div class="mx-auto my-auto">{{ quantity }}</div>
                      </div>
                      <div
                        class="w-10 h-10 qbox3 flex cursor-pointer"
                        style="color: #404040"
                        @click="(quantity += 1) + (total = op * quantity)"
                      >
                        <div class="mx-auto my-auto">+</div>
                      </div>
                    </div>
                  </div>

                  <div v-if="select != ''" class="ml-16 totalbox">
                    <div class="text-lg font-bold mb-4">Total price</div>
                    <div
                      class="text-xl font-bold h-10 flex"
                      style="color: #ffb730"
                    >
                      <div class="my-auto">{{ total }} ฿</div>
                    </div>
                  </div>

                  <div
                    class="w-full h-12 ml-8 mt-auto rounded-lg font-bold text-white text-center cursor-pointer buybutton hidden md:flex"
                  >
                    <div class="mx-auto my-auto">Add To Cart</div>
                  </div>
                </div>
              </div>

              <div class="mx-6 mb-10 md:hidden">
                <div class="font-bold text-lg">ตะกร้าสินค้า</div>
                <table class="table-auto">
                  <tbody>
                    <tr>
                      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                      <td>Malcolm Lockyer</td>
                      <td>1961</td>
                    </tr>
                    <tr>
                      <td>Witchy Woman</td>
                      <td>The Eagles</td>
                      <td>1972</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>Earth, Wind, and Fire</td>
                      <td>1975</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="mx-6 mb-10 hidden md:block">
            <div class="font-bold text-lg">Product details</div>
            <div class="mt-4">{{ site.Product.detail }}</div>
          </div>

          <div class="mx-6 mb-10 hidden md:block">
            <div class="font-bold text-lg">ตะกร้าสินค้า</div>
            <table class="table-auto">
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="w-full flex flex-col justify-center mt-10 pb-32 md:pb-0">
            <img
              src="../assets/image/upforsale-bw.png"
              class="h-8 w-10 object-contain mx-auto"
            />
            <div class="text-xs font-light mx-auto" style="color: #d7d7d7">
              web salepage by upforsale
            </div>
          </div>

          <div class="fixed bottom-0 w-screen p-3 pt-24 buybox md:hidden">
            <div
              class="w-full p-4 rounded-xl text-lg font-bold text-white text-center cursor-pointer buybutton"
            >
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

interface ProductOption {
  name: string;
  quantity: number;
  price?: number;
  discountPrice?: number;
}

interface Product {
  name: string;
  discountCode?: any;
  detail: string;
  ProductImage: any[];
  ProductOption: ProductOption[];
}

interface Site {
  domain: string;
  shortLink?: any;
  themeColor?: any;
  isSubDomain: boolean;
  lineAccountId: string;
  messengerAccountId: string;
  Product: Product;
}
@Component({
  name: 'salepage',
  //   layout: 'logo',
})
export default class salepage extends Vue {
  site: Site = {
    domain: '',
    shortLink: null,
    themeColor: null,
    isSubDomain: true,
    lineAccountId: '',
    messengerAccountId: '',
    Product: {
      name: '',
      discountCode: null,
      detail: '',
      ProductImage: [],
      ProductOption: [
        {
          name: '',
          quantity: 0,
          price: 0,
          discountPrice: 0,
        },
      ],
    },
  };

  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.error) {
      console.log('error page');
    }
  }

  async fetch() {
    // console.log(
    //   'location',
    //   window.location.hostname.split('.').slice(0, -2).join('.')
    // );
    // const windowLocation = window.location.hostname
    //   .split('.')
    //   .slice(0, -2)
    //   .join('.');

    const windowLocation = 'test-fe';

    const response = await this.$api.site.getSiteByDomain(windowLocation);

    if (response.success && response.data) {
      this.site = response.data;
    }
    // console.log('result', this.site);
    return response;
  }

  get siteComputed() {
    return this.site;
  }

  // web = 'test'
  options = [
    {
      optionname: 'Single Pack',
      optionimg:
        'https://lzd-img-global.slatic.net/g/p/2d7b627b9fd488c4435d5fa90acb709f.jpg_2200x2200q80.jpg_.webp',
      price: 690,
    },
    {
      optionname: 'Double Pack',
      optionimg:
        'https://cf.shopee.co.th/file/ec56c22580d0203c6c37cd64a08d401d',
      price: 1290,
    },
    {
      optionname: 'Test',
      optionimg:
        'https://miro.medium.com/max/1200/1*W5MGNZ16WYXSOxmHWNwmYw.png',
      price: 690,
    },
  ];

  previewimg = 'https://inwfile.com/s-fn/mj7wnt.jpg';

  minprice = Math.min(...this.options.map((item) => item.price));

  maxprice = Math.max(...this.options.map((item) => item.price));

  price = this.minprice + ' - ' + this.maxprice + ' ฿';

  quantity = 1;
  select = '';
  op = 0;
  total = 0;
  display = this.total + ' ฿';
}
</script>
<style scoped>
.preview {
  display: block;
  /* max-width:375px; */
  /* max-height:95px; */
  width: 100%;
  /* height: 375px; */
  object-fit: cover;
}
@media (min-width: 768px) {
  .preview {
    width: 300px !important;
  }
  .shop {
    width: 300px !important;
  }
  .productoptions {
    width: 300px !important;
  }
  .totalbox {
    display: none;
  }
}
@media (min-width: 1024px) {
  .preview {
    width: 375px !important;
  }
  .shop {
    width: 375px !important;
  }
  .productoptions {
    width: 480px !important;
  }
}
@media (min-width: 1030px) {
  .box {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }
}
.buybox {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
}
.optionname {
  background-color: #3c3f42;
  border-radius: 0 0 12px 12px;
}
.option:hover {
  outline: 2px;
  outline-color: black;
}
.option:active {
  outline: 2px;
  outline-color: black;
}
.qbox1 {
  border-radius: 10px 0 0 10px;
  border: 1px solid;
  border-color: #f3f3f3;
}
.qbox2 {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #f3f3f3;
}
.qbox3 {
  border-radius: 0 10px 10px 0;
  border: 1px solid;
  border-color: #f3f3f3;
}
.buybutton {
  background-color: #195c9b;
  transition-duration: 0.25s;
}
.buybutton:hover {
  background-color: #0c4e8c;
}
</style>
