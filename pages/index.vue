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
                <img :src="productImage" />
              </div>
            </div>
            <div class="w-auto">
              <div class="mt-5 mb-7 mx-6 space-y-3">
                <div class="font-bold text-xl md:text-3xl">
                  {{ site.Product.name }}
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
                      class="mb-3 option cursor-pointer"
                      @click="selectProductOption(option)"
                    >
                      <img
                        :src="productImage"
                        class="object-cover h-36 w-36"
                        style="border-radius: 12px 12px 0 0"
                      />
                      <div
                        class="text-center p-2 text-xs text-white bg-gray-500"
                      >
                        {{ option.name }}
                      </div>
                      <div
                        class="text-center p-2 bg-red-500 text-xs text-white rounded-b-lg"
                      >
                        {{ option.price }} บาท
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

                  <div
                    class="w-full h-12 ml-8 mt-auto rounded-lg font-bold text-white text-center cursor-pointer buybutton md:flex"
                    @click.prevent="addToCart()"
                  >
                    <div class="mx-auto my-auto">Add To Cart</div>
                  </div>
                </div>
              </div>

              <div class="mx-6 mb-10 md:hidden">
                <div class="font-bold text-lg">ตะกร้าสินค้า</div>
                <h1 v-if="!cartItem">ไม่มีสินค้า</h1>
                <table class="table-auto">
                  <tbody>
                    <tr v-for="(cart, index) in cartItem" :key="cart.ref">
                      <td>{{ cart.name }} X {{ cart.quantity }} ชิ้น</td>
                      <td>ราคารวม {{ cart.price }} บาท</td>
                      <td>
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          @click="deleteCartItem(index)"
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div>
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="name"
                    >
                      ชื่อลูกค้า
                    </label>
                    <input
                      id="name"
                      v-model="customerName"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="ชื่อลูกค้า"
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="name"
                    >
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      id="name"
                      v-model="customerPhoneNumber"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เบอร์โทรศัพท์"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                      ที่อยู่ในการจัดส่งสินค้า
                      <textarea
                        v-model="customerAddress"
                        class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="5"
                        placeholder="Textarea"
                      ></textarea>
                    </label>
                  </div>
                </div>

                <button
                  class="w-full p-4 rounded-xl text-lg font-bold text-white text-center cursor-pointer buybutton"
                  @click.prevent="buy()"
                >
                  ยืนยันการสั่งซื้อ
                </button>
              </div>
            </div>
          </div>

          <div class="mx-6 mb-10 hidden md:block">
            <div class="font-bold text-lg">Product details</div>
            <div class="mt-4">{{ site.Product.detail }}</div>
          </div>

          <div class="mx-6 mb-10 hidden md:block">
            <div class="font-bold text-lg">ตะกร้าสินค้า</div>
            <h1 v-if="cartItem.length == 0">ไม่มีสินค้า</h1>
            <table class="table-auto">
              <tbody>
                <tr v-for="(cart, index) in cartItem" :key="cart.ref">
                  <td>{{ cart.name }} X {{ cart.quantity }} ชิ้น</td>
                  <td>ราคารวม {{ cart.price }} บาท</td>
                  <td>
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      @click="deleteCartItem(index)"
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  ชื่อลูกค้า
                </label>
                <input
                  id="name"
                  v-model="customerName"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="ชื่อลูกค้า"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  เบอร์โทรศัพท์
                </label>
                <input
                  id="name"
                  v-model="customerPhoneNumber"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  ที่อยู่ในการจัดส่งสินค้า
                  <textarea
                    v-model="customerAddress"
                    class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="5"
                    placeholder="Textarea"
                  ></textarea>
                </label>
              </div>
            </div>

            <button
              class="w-full p-4 rounded-xl text-lg font-bold text-white text-center cursor-pointer buybutton"
              @click.prevent="buy()"
            >
              ยืนยันการสั่งซื้อ
            </button>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

interface ProductOption {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
}

interface ProductImage {
  id: number;
  name: string;
  data: string;
  productId: number;
}

interface Product {
  id: number;
  name: string;
  discountCode?: any;
  detail: string;
  ProductImage: ProductImage[];
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

interface ProductCart {
  productId: number;
  productOptionId: number;
  ref: number;
  name: string;
  quantity: number;
  price: number;
}
interface OrderDetail {
  productId: number;
  productOptionId: number;
  quantity: number;
  priceAmount: number;
}

interface CreateOrderDto {
  customerName: string;
  customerPhoneNumber: string;
  customerAddress: string;
  customerPaymentSlip: string;
  totalAmount: number;
  orderDetail: OrderDetail[];
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
      id: 1,
      name: '',
      discountCode: null,
      detail: '',
      ProductImage: [],
      ProductOption: [
        {
          id: 1,
          name: '',
          price: 1,
          discountPrice: 1,
        },
      ],
    },
  };

  customerName: string = '';
  customerPhoneNumber: string = '';
  customerAddress: string = '';
  customerPaymentSlip: string = 'empthy';
  totalAmount: number = 0;
  orderDetail: OrderDetail[] = [];

  showFormOrder = false;

  selectedItem!: ProductOption;

  cartItem: ProductCart[] = [];

  deleteCartItem(index: number) {
    this.cartItem.splice(index, 1);
  }

  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.error) {
      console.log('error page');
    }
  }

  addToCart() {
    if (!this.selectedItem) {
      this.$swal.fire('โปรดเลือกสินค้า');
    } else {
      this.cartItem.push({
        ref: new Date().getTime(),
        productId: this.site?.Product.id,
        productOptionId: this.selectedItem.id,
        name: this.selectedItem.name,
        quantity: this.quantity,
        price: this.selectedItem.price * this.quantity,
      });
    }

    console.log(this.cartItem);
  }

  async buy() {
    if (this.cartItem.length < 1) {
      this.$swal.fire('โปรดเพิ่มสินค้าลงตะกร้า');
    }

    this.showFormOrder = true;
    console.log('cartItem', this.cartItem);
    console.log(this.customerName);
    console.log(this.customerAddress);
    console.log(this.customerPhoneNumber);
    console.log(this.customerPaymentSlip);
    this.totalAmount = this.cartItem.reduce(
      (partialSum, a) => partialSum + a.price,
      0
    );
    this.orderDetail = this.cartItem.map((a) => {
      return {
        productId: a.productId,
        productOptionId: a.productOptionId,
        quantity: a.quantity,
        priceAmount: a.price,
      };
    });
    console.log(this.totalAmount);
    console.log(this.orderDetail);

    const data: CreateOrderDto = {
      customerAddress: this.customerAddress,
      customerName: this.customerName,
      customerPaymentSlip: this.customerPaymentSlip,
      customerPhoneNumber: this.customerPhoneNumber,
      totalAmount: this.totalAmount,
      orderDetail: this.orderDetail,
    };

    const response = await this.$api.order.createOrder(data);
    console.log(response);

    if (response.success && response.data) {
      this.$swal.fire('ซื้อสินค้าสำเร็จ');
    }
  }

  selectProductOption(productOption: ProductOption) {
    this.selectedItem = productOption;
  }

  async fetch() {
    const windowLocation = 'panus2544.dmr.co.th'.split('.')[0];

    console.log('windowLocation', windowLocation);

    const response = await this.$api.site.getSiteByDomain(windowLocation);
    console.log('response', response);

    if (response.success && response.data) {
      this.site = response.data;
    } else {
      this.$swal.fire(response.message);
    }
    // console.log('result', this.site);
    return response;
  }

  get siteComputed() {
    return this.site;
  }

  get productImage() {
    return 'data:image/png;base64,' + this.site?.Product?.ProductImage[0]?.data;
  }

  minprice = Math.min(
    ...this.site.Product.ProductOption.map((item) => item.price)
  );

  maxprice = Math.max(
    ...this.site.Product.ProductOption.map((item) => item.price)
  );

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
