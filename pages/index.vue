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
            <!--product image-->
            <div>
<<<<<<< HEAD
              <img :src="productImage" class="rounded-lg" />
=======
              <img :src="previewImage(site.Product.ProductImage[0].data)" />
>>>>>>> 1100de4a4f86a89fa3f11b10f6577bcc11e5ec00
            </div>

            <div class="w-auto">
              <!--product name-->
              <div class="mt-5 mb-7 mx-6 space-y-3">
                <div class="font-bold text-xl md:text-3xl">
                  {{ site.Product.name }}
                </div>
                {{price}}
              </div>

              <!--product option-->
              <div class="mx-6 mb-10">
                <div class="font-bold text-lg mb-4">Product options</div>
                <div
                  class="grid grid-cols-2 gap-2 lg:grid-cols-3 col-span-5 justify-items-center productoptions"
                >
                  <div
                    v-for="option in site.Product.ProductOption"
                    :key="option.id"
                  >
                    <div
                      class="mb-3 option cursor-pointer"
                      @click="selectProductOption(option)"
                    >
                      <div
                        class="rounded-lg overflow-hidden border-2"
                        :class="
                          selectedItemId == option.id
                            ? 'optionactive'
                            : 'border-transparent'
                        "
                      >
                        <img
                          :src="previewImage(option.dataImage)"
                          class="object-cover h-36 w-36"
                        />
                        <div
                          class="text-center p-2 text-xs text-white bg-gray-500"
                        >
                          {{ option.name }}
                        </div>
                        <!-- <div
                          class="text-center p-2 bg-red-500 text-xs text-white"
                        >
                          {{ option.price }} บาท
                        </div> -->
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
                    class="w-full mt-auto rounded-lg font-bold text-white text-center cursor-pointer buybutton md:flex"
                    @click.prevent="addToCart()"
                  >
                    <div class="w-full p-4">เพิ่มลงตะกร้าสินค้่า</div>
                  </div>
                </div>
              </div>

              <!--cart -->
              <div class="mx-6 mb-10">
                <div class="font-bold">ตะกร้าสินค้า</div>
                <h1 v-if="cartItem.length == 0" class="">ไม่มีสินค้า</h1>
                <table class="table-auto">
                  <tbody>
                    <tr v-for="(cart, index) in cartItem" :key="cart.ref">
                      <td>{{ cart.name }} X {{ cart.quantity }} ชิ้น</td>
                      <td>ราคารวม {{ cart.price }} บาท</td>
                      <td>
                        <button
                          class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          @click="deleteCartItem(index)"
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="font-semibold text-black">
                      <th scope="row" class="text-semi-bold space-x-2">
                        ยอดรวมสินค้่า
                      </th>
                      <td class="px-3">{{ cartTotalAmount }} ชิ้น</td>
                      <td class="px-3">ราคา {{ cartTotalPrice }} บาท</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <!-- show form order-->
          <div v-show="showFormOrder">
            <!--input customer-->
            <div class="mb-10 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
              <div class="mx-4 lg:mx-0">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="ชื่อลูกค้า"
                  rules="required"
                >
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
                    <span class="text-red-500 py-1 px-2">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="เบอร์โทรศัพท์"
                  rules="required"
                >
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
                    <span class="text-red-500 py-1 px-2">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="อีเมล"
                  rules="required"
                >
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="name"
                    >
                      อีเมล
                    </label>
                    <input
                      id="name"
                      v-model="customerEmail"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="อีเมล"
                    />
                    <span class="text-red-500 py-1 px-2">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="ที่อยู่"
                  rules="required"
                >
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
                    <span class="text-red-500 py-1 px-2">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
                <!--test-->
              </div>

              <div class="mx-4 lg:mx-0">
                <div
                  class="rounded-lg bg-gray-50 w-full py-4 px-4 flex flex-row gap-x-4 items-center"
                >
                  <div class="w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src="https://www.kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png"
                    />
                  </div>
                  <div class="flex flex-col justify-center">
                    <div class="text-sm font-light">KASIKORN</div>
                    <div class="text-lg">ชื่อ นามสกุล</div>
                    <div class="text-lg">xxx-xxxx-xxx</div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-center items-center w-full mt-4">
                    <label
                      for="dropzone-file"
                      class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
                    >
                      <div
                        class="flex flex-col justify-center items-center pt-5 pb-6"
                      >
                        <svg
                          aria-hidden="true"
                          class="mb-3 w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500">
                          <span class="font-semibold">อัพโหลดสลิป</span>
                        </p>
                        <p class="text-xs text-gray-500">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        class="hidden"
                        @change="onFileChange($event)"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              class="w-full p-4 rounded-xl text-lg font-bold text-white text-center cursor-pointer buybutton"
              @click.prevent="showFormOrder ? confirmOrder() : confirmCart()"
            >
              {{ showFormOrder == true ? 'ยืนยันการสั่งซื้อ' : 'สั่งซื้อ' }}
            </button>
          </div>

          <!-- footer-->
          <div class="w-full flex flex-col justify-center mt-10 pb-32 md:pb-0">
            <img
              src="../assets/image/upforsale-bw.png"
              class="h-8 w-10 object-contain mx-auto"
            />
            <div class="text-xs font-light mx-auto" style="color: #d7d7d7">
              web salepage by upforsale.shop
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {{site.Product.ProductOption}} -->
    <!-- {{options}} -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator';

interface ProductOption {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  dataImage: string;
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
  domain: string;
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  customerAddress: string;
  orderDetail: OrderDetail[];
}

@Component({
  name: 'salepage',
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
          dataImage: '',
        },
      ],
    },
  };

  customerName: string = '';
  customerPhoneNumber: string = '';
  customerEmail: string = '';
  customerAddress: string = '';
  customerPaymentSlip: any = null;
  orderDetail: OrderDetail[] = [];

  customerPaymentSlipPreview: string = '';
  showFormOrder = false;

  selectedItem?: ProductOption;
  selectedItemId: number = 0;

  cartItem: ProductCart[] = [];

  cartTotalAmount: number = 0;
  cartTotalPrice: number = 0;

  deleteCartItem(index: number) {
    this.cartItem.splice(index, 1);
  }

  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.error) {
      console.log('error page');
    }
  }

  onFileChange(e: any) {
    e.preventDefault();
    const files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    if (files) {
      this.customerPaymentSlipPreview = URL.createObjectURL(files[0]);
      URL.revokeObjectURL(files);
    } else {
      this.customerPaymentSlipPreview = '';
    }
    this.customerPaymentSlip = files[0];
  }

  addToCart() {
    if (!this.selectedItem) {
      this.$swal.fire({
        text: 'โปรดเลือกสินค้าก่อนใส่ตะกร้า',
        icon: 'info',
        toast: true,
        position: 'top-right',
      });
    } else {
      const cart = this.cartItem.findIndex(
        (ct) => ct.productOptionId === this.selectedItem?.id
      );

      if (cart >= 0) {
        this.cartItem[cart].price += this.selectedItem.price * this.quantity;
        this.cartItem[cart].quantity += this.quantity;
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
    }
  }

  confirmCart() {
    if (this.cartItem.length < 1) {
      this.$swal.fire({
        title: 'ข้อมูลไม่ครบ',
        text: 'โปรดเพิ่มสินค้าลงตะกร้า',
        icon: 'warning',
        toast: true,
        position: 'top-right',
      });
    } else {
      this.showFormOrder = true;
    }
  }

  async confirmOrder() {
    if (this.showFormOrder && this.cartItem.length > 0) {
      if (this.customerName === '') {
        this.$swal.fire({
          title: 'ข้อมูลไม่ครบ',
          text: 'โปรดกรอกชื่อผู้ซื้อ',
          icon: 'warning',
          toast: true,
          position: 'top-right',
        });
      } else if (this.customerPhoneNumber === '') {
        this.$swal.fire({
          title: 'ข้อมูลไม่ครบ',
          text: 'โปรดกรอกเบอร์โทรศัพท์ผู้ซื้อ',
          icon: 'warning',
          toast: true,
          position: 'top-right',
        });
      } else if (this.customerEmail === '') {
        this.$swal.fire({
          title: 'ข้อมูลไม่ครบ',
          text: 'โปรดกรอกอีเมลผู้ซื้อ',
          icon: 'warning',
          toast: true,
          position: 'top-right',
        });
      } else if (this.customerAddress === '') {
        this.$swal.fire({
          title: 'ข้อมูลไม่ครบ',
          text: 'โปรดกรอกที่อยู่',
          icon: 'warning',
          toast: true,
          position: 'top-right',
        });
      } else if (this.customerPaymentSlip === null) {
        this.$swal.fire({
          title: 'ข้อมูลไม่ครบ',
          text: 'โปรดแนบสลิปการโอนเงิน',
          icon: 'warning',
          toast: true,
          position: 'top-right',
        });
      } else {
        this.orderDetail = this.cartItem.map((a) => {
          return {
            productId: a.productId,
            productOptionId: a.productOptionId,
            quantity: a.quantity,
            priceAmount: a.price,
          };
        });

        const data: CreateOrderDto = {
          domain: this.site.domain,
          customerAddress: this.customerAddress,
          customerEmail: this.customerEmail,
          customerName: this.customerName,
          customerPhoneNumber: this.customerPhoneNumber,
          orderDetail: this.orderDetail,
        };
        const formData = new FormData();
        formData.append('customerPaymentSlip', this.customerPaymentSlip);
        formData.append('order', JSON.stringify({ ...data }));

        const response = await this.$api.order.createOrder(formData);
        console.log(response);

        if (response.success && response.data) {
          this.$swal
            .fire({
              title: 'ซื้อสินค้าสำเร็จ',
              text: 'ระบบจะทำการส่งรายการสินค้าให้กับอีเมลของท่าน',
              icon: 'success',
            })
            .then(() => {
              window.location.reload();
            });
        }
      }
    }
  }

  selectProductOption(productOption: ProductOption) {
    this.selectedItem = productOption;
    this.selectedItemId = productOption.id;
  }

  async fetch() {
    const windowLocation = window.location.hostname.split('.')[0];

    console.log('windowLocation', windowLocation);

<<<<<<< HEAD
    const response = await this.$api.site.getSiteByDomain('xver');
=======
    const response = await this.$api.site.getSiteByDomain(windowLocation);
>>>>>>> 1100de4a4f86a89fa3f11b10f6577bcc11e5ec00
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

  @Watch('cartItem')
  onPropertyChanged(currentvalue: ProductCart[]) {
    this.cartTotalAmount = currentvalue.reduce(
      (pv, crv) => pv + crv.quantity,
      0
    );
    this.cartTotalPrice = currentvalue.reduce((pv, crv) => pv + crv.price, 0);
  }

  previewImage(params: any) {
    return 'data:image/png;base64,' + params;
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
<<<<<<< HEAD
.optionactive {
  /* outline: 2px; */
  border-color: #FFC24C;
=======

.option:active {
  outline: 2px;
  outline-color: black;
>>>>>>> 1100de4a4f86a89fa3f11b10f6577bcc11e5ec00
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
