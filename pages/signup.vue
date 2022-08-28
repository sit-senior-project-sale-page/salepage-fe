<template>
  <div class="flex flex-col pt-24 mb-44 text-center">
    <div class="font-semibold text-xl" v-if="state == 1">
      Start your membership
    </div>
    <div class="font-semibold text-xl" v-if="state == 2">
      Just a few more step!
    </div>
    <div class="font-semibold text-xl" v-if="state == 3">Last step</div>

    <div class="flex justify-center mt-5">
      <div
        v-if="state == 1"
        class="w-12 h-12 text-white rounded-full flex"
        style="background-color: #0f385f"
      >
        <span class="mx-auto my-auto">1</span>
      </div>
      <div
        v-if="state > 1"
        class="w-12 h-12 text-white rounded-full flex"
        style="background-color: #35c502"
      >
        <span class="mx-auto my-auto">✔</span>
      </div>

      <div
        v-if="state == 1"
        class="w-32 my-auto"
        style="height: 1.5px; background-color: #0f385f"
      />
      <div
        v-if="state > 1"
        class="w-32 my-auto"
        style="height: 1.5px; background-color: #35c502"
      />

      <div
        v-if="state == 1"
        class="w-12 h-12 text-white rounded-full flex"
        style="border-width: 1.5px; border-color: #0f385f; color: #0f385f"
      >
        <span class="mx-auto my-auto">2</span>
      </div>
      <div
        v-if="state == 2"
        class="w-12 h-12 text-white rounded-full flex"
        style="background-color: #0f385f"
      >
        <span class="mx-auto my-auto">2</span>
      </div>
      <div
        v-if="state > 2"
        class="w-12 h-12 text-white rounded-full flex"
        style="background-color: #35c502"
      >
        <span class="mx-auto my-auto">✔</span>
      </div>

      <div
        v-if="state <= 2"
        class="w-32 my-auto"
        style="height: 1.5px; background-color: #0f385f"
      />
      <div
        v-if="state > 2"
        class="w-32 my-auto"
        style="height: 1.5px; background-color: #35c502"
      />

      <div
        v-if="state != 3"
        class="w-12 h-12 text-white rounded-full flex"
        style="border-width: 1.5px; border-color: #0f385f; color: #0f385f"
      >
        <span class="mx-auto my-auto">3</span>
      </div>
      <div
        v-if="state == 3"
        class="w-12 h-12 text-white rounded-full flex"
        style="background-color: #0f385f"
      >
        <span class="mx-auto my-auto">3</span>
      </div>
    </div>
    <div
      class="flex justify-center mt-5 -ml-8 space-x-24"
      style="color: #0f385f"
    >
      <div class="">create account</div>
      <div class="">choose plan</div>
      <div class="">payment</div>
    </div>

    <div
      id="state1"
      v-if="state == 1"
      class="flex flex-col mt-20 mx-auto text-left"
      style="width: 480px; transition-duration: 0.25s"
    >
      <div class="text-3xl font-semibold">Create account</div>
      <div class="mt-3 text-sm font-light">
        Just a few more steps and you're done! <br />
        We hate paperwork, too.
      </div>
      <input
        v-model="email"
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="E-mail"
        name="email"
        class="bg-white rounded-md p-3 mt-6 text-sm"
        style="border-width: 1.5px; border-color: #000000"
      />
      <input
        v-model="pw"
        minlength="6"
        maxlength="100"
        type="password"
        placeholder="Password"
        name="password"
        class="bg-white rounded-md p-3 mt-6 text-sm"
        style="border-width: 1.5px; border-color: #000000"
      />
      <button
        class="p-4 text-white rounded-md font-medium mt-10 mx-auto"
        @click="state += 1"
      >
        Next
      </button>
    </div>

    <div
      id="state2"
      v-if="state == 2"
      class="flex flex-col mt-20 mx-auto text-left"
      style="width: 800px; transition-duration: 0.25s"
    >
      <div class="text-3xl font-semibold">Choose your plan</div>
      <div
        class="mt-10 text-sm font-light rounded-2xl p-10"
        style="border-color: #000000; border-width: 1.5px"
      >
        <div class="text-xl font-semibold mb-5">Monthly subscribtion</div>
        <div class="grid grid-cols-3">
          <div></div>
          <div
            v-if="plan == 'ms'"
            class="p-2 px-4 mx-auto rounded-lg text-center text-white font-semibold cursor-pointer plan1"
          >
            Single Plan
          </div>
          <div
            v-if="plan != 'ms'"
            @click="plan = 'ms'"
            class="p-2 px-4 mx-auto rounded-lg text-center text-white font-semibold cursor-pointer deselect1"
          >
            Single Plan
          </div>
          <div
            v-if="plan == 'me'"
            class="p-2 px-4 mx-auto rounded-lg text-center text-white font-semibold cursor-pointer plan1"
          >
            Exclusive Plan
          </div>
          <div
            @click="plan = 'me'"
            v-if="plan != 'me'"
            class="p-2 px-4 mx-auto rounded-lg text-center text-white font-semibold cursor-pointer deselect1"
          >
            Exclusive Plan
          </div>
        </div>

        <div class="grid grid-cols-3 my-5">
          <div class="font-light my-auto">Price</div>
          <div
            v-if="plan == 'ms'"
            class="mx-auto rounded-lg text-center text-xl font-medium plan2"
          >
            299 THB
          </div>
          <div
            v-if="plan != 'ms'"
            class="mx-auto rounded-lg text-center text-xl font-medium deselect2"
          >
            299 THB
          </div>
          <div
            v-if="plan == 'me'"
            class="mx-auto rounded-lg text-center text-xl font-medium plan2"
          >
            1299 THB
          </div>
          <div
            v-if="plan != 'me'"
            class="mx-auto rounded-lg text-center text-xl font-medium deselect2"
          >
            1299 THB
          </div>
        </div>

        <div
          class="w-full my-auto"
          style="height: 0.5px; background-color: #000000"
        />

        <div class="grid grid-cols-3 mt-5">
          <div class="font-light my-auto">SalePage Amount</div>
          <div
            v-if="plan == 'ms'"
            class="mx-auto rounded-lg text-center text-xl font-medium plan2"
          >
            1
          </div>
          <div
            v-if="plan != 'ms'"
            class="mx-auto rounded-lg text-center text-xl font-medium deselect2"
          >
            1
          </div>
          <div
            v-if="plan == 'me'"
            class="mx-auto rounded-lg text-center text-xl font-medium plan2"
          >
            5
          </div>
          <div
            v-if="plan != 'me'"
            class="mx-auto rounded-lg text-center text-xl font-medium deselect2"
          >
            5
          </div>
        </div>
      </div>
      <button
        class="p-4 text-white rounded-md font-medium mt-10 mx-auto"
        @click="state += 1"
      >
        Next
      </button>
      <div
        class="mx-auto text-gray-400 hover:text-gray-600 px-3 py-2 mt-5 cursor-pointer"
        @click="state -= 1"
      >
        Back
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  name: 'ShopIndex',
  layout: 'logo',
})
export default class Login extends Vue {
  state = 1;
  state1 = true;
  state2 = false;
  state3 = false;

  email = '';
  pw = '';
  plan = 'ms';

  slider = document.querySelector('.gallery');
  isDown = false;
  startX = '';
  scrollLeft = '';

  mounted() {
    //   slider = document.querySelector(".gallery");
    // isDown = false;
    // startX = '';
    // scrollLeft = '';
    // console.log('hi');

    // this.slider.addEventListener('mousedown', (e) => {
    // this.isDown = true;
    //   this.slider.classList.add('active');
    //   this.startX = e.pageX - slider.offsetLeft;
    //   this.scrollLeft = this.slider.scrollLeft;
    // });
    // this.slider.addEventListener('mouseleave', () => {
    //   this.isDown = false;
    //   this.slider.classList.remove('active');
    // });
    // this.slider.addEventListener('mouseup', () => {
    //   this.isDown = false;
    //   this.slider.classList.remove('active');
    // });
    // this.slider.addEventListener('mousemove', (e) => {
    //   if (!this.isDown) return;
    //   e.preventDefault();
    //   const x = e.pageX - this.slider.offsetLeft;
    //   const SCROLL_SPEED = 3;
    //   const walk = (x - this.startX) * SCROLL_SPEED;
    //   this.slider.scrollLeft = this.scrollLeft - walk;
    // });
  }
}

// export default {
//   data(){
//     return {

//     }
//   },
//   mounted(){
//     const slider = document.querySelector(".gallery");
//     let isDown = false;
//     let startX;
//     let scrollLeft;
//     slider.addEventListener("mousedown", (e) => {
//       isDown = true;
//       slider.classList.add("active");
//       startX = e.pageX - slider.offsetLeft;
//       scrollLeft = slider.scrollLeft;
//     });
//     slider.addEventListener("mouseleave", () => {
//       isDown = false;
//       slider.classList.remove("active");
//     });
//     slider.addEventListener("mouseup", () => {
//       isDown = false;
//       slider.classList.remove("active");
//     });
//     slider.addEventListener("mousemove", (e) => {
//       if (!isDown) return;
//       e.preventDefault();
//       const x = e.pageX - slider.offsetLeft;
//       const SCROLL_SPEED = 3;
//       const walk = (x - startX) * SCROLL_SPEED;
//       slider.scrollLeft = scrollLeft - walk;
//     });
//   }
// }
</script>
<style>
button {
  background-color: #ffb730;
  transition-duration: 0.25s;
  width: 480px;
}
button:hover {
  background-color: #faac1c;
}
.plan1 {
  background-color: #0f385f;
  transition-duration: 0.25s;
}
.plan2 {
  color: #0f385f;
  transition-duration: 0.25s;
}
.deselect1 {
  background-color: #c5d4e1;
  transition-duration: 00.25s;
}
.deselect1:hover {
  background-color: #89a9c8;
  transition-duration: 0.25s;
}
.deselect2 {
  color: #c5d4e1;
  transition-duration: 00.25s;
}

#choice2:hover .deselect2 {
  color: #89a9c8 !important;
}
</style>
