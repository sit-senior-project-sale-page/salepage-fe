<template>
  <div class="flex">
    <div
      class="fixed w-screen h-screen top-0"
      style="background-color: #0f385f; z-index: -10"
    ></div>
    <div class="md:m-10 md:rounded-3xl md:p-10 bg-white lg:my-24 w-full box">
      <div class="md:flex">
        <div>
          <div>
            <img :src="previewimg" class="preview object-cover md:rounded-lg" />
          </div>
          <div
            class="p-3 px-6 rounded-xl mx-6 md:mx-auto my-6 md:flex hidden"
            style="background-color: #f6f6f6"
          >
            <img
              :src="logo"
              class="h-14 w-14 rounded-full object-cover"
              style="outline-width: 1px; outline-color: #e9e9e9"
            />
            <div class="font-bold my-auto ml-5">{{ shopname }}</div>
          </div>
        </div>
        <div class="w-auto">
          <div class="mt-5 mb-7 mx-6 space-y-3">
            <div class="font-bold text-xl md:text-3xl">
              {{ productname }}
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
            <div class="font-bold my-auto ml-5">{{ shopname }}</div>
          </div>

          <div class="mx-6 mb-10 md:hidden">
            <div class="font-bold text-lg">Product details</div>
            <div class="mt-4">{{ detail }}</div>
          </div>
          <div class="mx-6 mb-10">
            <div class="font-bold text-lg mb-4">Product options</div>
            <div
              class="grid grid-cols-2 lg:grid-cols-3 col-span-5 justify-items-center productoptions"
            >
              <div v-for="option in this.options" :key="option">
                <div
                :id="option.optionname"
                  class="mb-3 option cursor-pointer"
                  @click="
                    (select = option.optionname) +
                      (quantity = 1) +
                      (op = option.price) +
                      (total = option.price * quantity)
                  "
                >
                  <img
                    :src="option.optionimg"
                    class="object-cover h-36 w-36"
                    style="border-radius: 12px 12px 0 0"
                  />
                  <div class="text-center p-2 text-xs text-white optionname">
                    {{ option.optionname }}
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3 flex">
              <!-- <div>{{ select }}</div> -->
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

              <div class="ml-16 totalbox" v-if="select != ''">
                <div class="text-lg font-bold mb-4">Total price</div>
                <div class="text-xl font-bold h-10 flex" style="color: #ffb730">
                  <div class="my-auto">{{ total }} ฿</div>
                </div>
              </div>

              <div
                class="w-full h-12 ml-8 mt-auto rounded-lg font-bold text-white text-center cursor-pointer buybutton hidden md:flex"
              >
                <div class="mx-auto my-auto">Buy Now</div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="mx-6 mb-10 hidden md:block">
        <div class="font-bold text-lg">Product details</div>
        <div class="mt-4">{{ detail }}</div>
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
          Buy Now
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  //   layout: 'logo',
})
export default class salepage extends Vue {
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
  previewimg =
    'https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/271755970_363997708867209_1939652208978762707_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=80WtpIKnmpMAX_pQTOG&_nc_ht=scontent.fbkk2-8.fna&oh=00_AT-Xhb0tUb0oQDUHTtA-xfZYk-vRtM7lk_kVq2sRard4lQ&oe=63161833';
  productname = 'Terry Sleeping Mask';

  minprice = Math.min(...this.options.map((item) => item.price));
  maxprice = Math.max(...this.options.map((item) => item.price));

  price = this.minprice + ' - ' + this.maxprice + ' ฿';

  logo =
    'https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/275056776_392457192687927_4001892562731960435_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2pVoevATVjEAX9a1JXy&_nc_ht=scontent.fbkk2-8.fna&oh=00_AT8OWoOUyTDBrvlSh6YAtFootP-_3OvZZQPKUkrZ0BCE6A&oe=63168663';
  shopname = 'terryofficial.th';
  detail =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.';
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
.buybutton{
  background-color: #195c9b;
  transition-duration: 0.25s;
}
.buybutton:hover {
  background-color: #0c4e8c
}
</style>
