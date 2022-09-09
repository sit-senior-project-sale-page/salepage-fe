<template>
  <div class="flex">
    <div
      class="fixed w-screen h-screen top-0"
      style="background-color: #0f385f; z-index: -10"
    ></div>
    <div
      class="p-5 pt-20 md:m-10 md:rounded-3xl md:p-10 bg-white lg:my-24 w-full box"
    >
      <div class="lg:flex">
        <div class="w-full lg:px-5">
          <div class="font-bold text-xl mb-4">Your order</div>
          <div class="p-3 rounded-xl flex" style="background-color: #f9f9f9">
            <img
              :src="previewimg"
              class="previewimg rounded-lg w-24 h-3w-24 object-cover"
            />
            <div class="pl-4 flex flex-col">
              <div
                class="w-48 overflow-hidden whitespace-nowrap text-ellipsis font-bold"
              >
                {{ productname }}
              </div>
              <div class="w-48 overflow-hidden whitespace-nowrap text-ellipsis">
                {{ optionname }}
              </div>
              <div
                class="w-48 overflow-hidden whitespace-nowrap text-ellipsis font-light text-xs"
              >
                quantity: {{ quantity }}
              </div>
              <div
                class="w-48 overflow-hidden whitespace-nowrap text-ellipsis font-light text-xs"
              >
                shipping fee: {{ shippingfee }} ฿
              </div>
              <div
                class="w-48 overflow-hidden whitespace-nowrap text-ellipsis font-bold mt-auto"
                style="color: #ffb730"
              >
                TOTAL: {{ total }} ฿
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-10">
            <div class="font-bold text-xl mb-4">Your Information</div>
            <input
              v-model="customername"
              minlength="6"
              maxlength="100"
              type="text"
              placeholder="name"
              name="customername"
              class="bg-white rounded-md p-3 text-sm"
              style="border-width: 1.5px; border-color: #000000"
            />
            <input
              v-model="customerphone"
              minlength="6"
              maxlength="100"
              type="text"
              placeholder="phone number"
              name="customerphone"
              class="bg-white rounded-md p-3 mt-3 text-sm"
              style="border-width: 1.5px; border-color: #000000"
            />
            <input
              v-model="email"
              minlength="6"
              maxlength="100"
              type="email"
              placeholder="email"
              name="email"
              class="bg-white rounded-md p-3 mt-3 text-sm"
              style="border-width: 1.5px; border-color: #000000"
            />
            <textarea
              v-model="address"
              minlength="6"
              maxlength="1000"
              cols="45"
              rows="8"
              type="text"
              placeholder="shipping address"
              name="address"
              class="bg-white rounded-md p-3 mt-3 text-sm resize-none"
              style="border-width: 1.5px; border-color: #000000"
            />
          </div>
        </div>

        <div class="flex flex-col mt-10 lg:mt-0 w-full lg:px-5">
          <div class="font-bold text-xl mb-2">Payment</div>
          <div class="font-light text-sm mb-4">tranfer to this account</div>
          <div class="p-5 rounded-xl flex" style="background-color: #f9f9f9">
            <div>
              <img
                v-if="bank == 'KASIKORNBANK'"
                src="../assets/image/banklogo/KASIKORNBANK.png"
                class="h-12 w-12 object-cover bank"
              />
              <img
                v-if="bank == 'BANGKOKBANK'"
                src="../assets/image/banklogo/BANGKOKBANK.png"
                class="h-12 w-12 object-cover bank"
              />
              <img
                v-if="bank == 'CITIBANK'"
                src="../assets/image/banklogo/CITIBANK.png"
                class="h-12 w-12 object-cover bank"
              />
              <img
                v-if="bank == 'GSB'"
                src="../assets/image/banklogo/GSB.png"
                class="h-12 w-12 object-cover bank"
              />
              <img
                v-if="bank == 'KRUNGSRI'"
                src="../assets/image/banklogo/KRUNGSRI.png"
                class="h-12 w-12 object-cover bank"
              />
              <img
                v-if="bank == 'KRUNGTHAI'"
                src="../assets/image/banklogo/KRUNGTHAI.png"
                class="h-12 w-12 object-cover bank"
              />
              <img
                v-if="bank == 'SCB'"
                src="../assets/image/banklogo/SCB.png"
                class="h-12 w-12 object-cover bank"
              />
              <img
                v-if="bank == 'TTB'"
                src="../assets/image/banklogo/TTB.png"
                class="h-12 w-12 object-cover bank"
              />
            </div>
            <div class="flex flex-col ml-5">
              <div class="font-bold text-xs">{{ bank }}</div>
              <div class="font-bold mt-2">{{ acname }}</div>
              <div class="font-bold">{{ acnum }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-28 lg:mt-16"></div>

      <div class="w-full flex flex-col justify-center mb-16 lg:hidden">
        <img
          src="../assets/image/upforsale-bw.png"
          class="h-8 w-10 object-contain mx-auto"
        />
        <div class="text-xs font-light mx-auto" style="color: #d7d7d7">
          web salepage by upforsale
        </div>
      </div>

      <div
        class="w-full h-12 rounded-lg font-bold text-white text-center cursor-pointer buybutton flex mx-auto"
      >
        <div class="mx-auto my-auto">Confirm order</div>
      </div>

      <div class="w-full hidden flex-col justify-center mt-24 lg:flex">
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
</template>
<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
export default class orderpage extends Vue {
  previewimg = 'https://cf.shopee.co.th/file/61a40ec6f8a1ad88938b13dea53b9193';
  productname = 'Terry Sleeping Mask';
  optionname = 'Double Pack';
  price = 1290;
  quantity = 2;
  shippingfee = 30;
  total = this.price * this.quantity + this.shippingfee;

  customername = '';
  customerphone = '';
  email = '';
  address = '';

  bank = 'KASIKORNBANK';
  acname = 'Jiraphat Phulprapha';
  acnum = '018-8-71788-8';

  selectedImage = null;
}
</script>
<style scoped>
@media (min-width: 768px) {
  .box {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .bank {
    width: 60px;
    height: 60px;
  }
  .previewimg {
    width: 110px;
    height: 110px;
  }
}
@media (min-width: 1024px) {
  .box {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  .buybutton{
    width: 500px;
  }
}
.buybutton {
  background-color: #195c9b;
  transition-duration: 0.25s;
}
.buybutton:hover {
  background-color: #0c4e8c;
}
</style>
