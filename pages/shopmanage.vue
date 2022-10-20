<template>
  <div class="flex flex-col pt-28">
    <NavBar/>
    <div
      class="rounded-3xl mx-auto mt-12"
      style="width: 860px; height: 480px; background-color: #f5f5f5"
    >
      <div class="flex justify-center min-w-full p-4 space-x-20">
        <div
          v-if="toggle"
          class="font-semibold cursor-pointer pb-3"
          style="
            border-bottom-width: 2.5px;
            border-color: #0f385f;
            color: #0f385f;
          "
        >
          Manage Your Sale Page
        </div>
        <div
          @click="this.peep()"
          v-if="toggle == false"
          class="font-semibold cursor-pointer"
          style="color: #959595"
        >
          Manage Your Sale Page
        </div>

        <div
          v-if="toggle == false"
          class="font-semibold cursor-pointer pb-3"
          style="
            border-bottom-width: 2.5px;
            border-color: #0f385f;
            color: #0f385f;
          "
        >
          Manage Order
        </div>
        <div
          @click="this.peep()"
          v-if="toggle"
          class="font-semibold cursor-pointer"
          style="color: #959595"
        >
          Manage Order
        </div>
      </div>

      <!-- manage salepage -->
      <div id="salepage" class="grid grid-cols-3 p-10 px-16">
        <div class="flex flex-col text-center pb-8">
          <div>
            <img
              src="https://cf.shopee.co.th/file/ea4efac6adc6a9341c829c376258644c"
              class="h-28 w-28 object-cover rounded-xl mx-auto"
            />
          </div>
          <div class="pt-3 text-sm">Terry Sleeping Mask</div>
        </div>

        <div
          class="h-28 w-28 object-cover rounded-xl mx-auto text-4xl text-white flex"
          style="background-color: #142e46"
        >
          <div class="mx-auto my-auto">+</div>
        </div>
      </div>

      <!-- manage order -->
      <div id="order"
        class="grid grid-cols-2 p-11 overflow-y-auto hidden"
        style="height: 380px"
      >
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-mt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -mt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>

        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-pt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -pt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-mt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -mt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-mt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -mt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-pt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -pt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-pt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -pt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-mt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -mt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-mt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -mt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-pt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -pt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-pt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -pt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-mt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -mt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-mt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -mt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
        <div
          style="
            border-width: 1px;
            border-color: #dfdfdf;
            width: 380px;
            height: 70px;
          "
          class="bg-white rounded-xl mx-auto p-3 px-5 flex space-x-3 justify-center mb-3"
        >
          <div class="font-bold text-center text-xs my-auto">
            <div>18 Sep</div>
            <div class="-pt-1">2022</div>
          </div>
          <div class="font-bold text-left text-sm my-auto">
            <div style="font-size: 10px">
              <span class="font-light">order number:</span>
              <span style="color: #ffc24c">3905483</span>
            </div>
            <div class="font-semibold -pt-1" style="color: #0f385f">
              Jiraphat Phulprapha
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              TOTAL
            </div>
            <div style="color: #ffc24c" class="font-semibold text-sm">
              1299 ฿
            </div>
          </div>
          <div class="text-center my-auto">
            <div class="font-light" style="color: #8f8f8f; font-size: 10px">
              PARCEL STATUS
            </div>
            <div style="color: #35c502" class="font-semibold text-sm">
              SHIPPED
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- order detail -->
    <OrderDetail class="hidden"></OrderDetail>
  </div>
</template>
<script>
import { method } from 'lodash';
import Logo from '../layouts/logo.vue';
import OrderDetail from '~/components/OrderDetail.vue';
export default {
  components: { Logo, OrderDetail },
  data() {
    return {
      toggle: true,
    };
  },
  mounted() {
    // console.log(this.toggle);
  },
  method: {
    peep() {
      if (this.toggle == true) {
        this.toggle = false;
      } else {
        this.toggle = true;
      }
    },
  },
};
</script>
<style scoped></style>
