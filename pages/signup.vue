<template>
  <div class="flex flex-col pt-32 md:pt-24 mb-44 text-center">
    <div class="font-semibold text-xl" v-if="state == 1">
      Start your membership
    </div>
    <div class="font-semibold text-xl" v-if="state == 1.5">
      Let we know you
    </div>
    <div class="font-semibold text-xl" v-if="state == 1.75">
      Let's get rich ;D
    </div>
    <div class="font-semibold text-xl" v-if="state == 2">
      Just a few more step!
    </div>
    <div class="font-semibold text-xl" v-if="state == 3">Last step</div>

    <div class="flex justify-center mt-5" style="transition-duration: 0.25s">
      <div
        v-if="state == 1 || state == 1.5 || state == 1.75"
        class="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex"
        style="background-color: #0f385f"
      >
        <span class="mx-auto my-auto">1</span>
      </div>
      <div
        v-if="state > 1.75"
        class="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex"
        style="background-color: #35c502"
      >
        <span class="mx-auto my-auto">✔</span>
      </div>

      <div
        v-if="state == 1 || state == 1.5 || state == 1.75"
        class="w-20 md:w-32 my-auto"
        style="height: 1.5px; background-color: #0f385f"
      />

      <div
        v-if="state > 1.75"
        class="w-20 md:w-32 my-auto"
        style="height: 1.5px; background-color: #35c502"
      />

      <div
        v-if="state == 1 || state == 1.5 || state == 1.75"
        class="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex"
        style="border-width: 1.5px; border-color: #0f385f; color: #0f385f"
      >
        <span class="mx-auto my-auto">2</span>
      </div>
      <div
        v-if="state == 2"
        class="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex"
        style="background-color: #0f385f"
      >
        <span class="mx-auto my-auto">2</span>
      </div>
      <div
        v-if="state > 2"
        class="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex"
        style="background-color: #35c502"
      >
        <span class="mx-auto my-auto">✔</span>
      </div>

      <div
        v-if="state <= 2"
        class="w-20 md:w-32 my-auto"
        style="height: 1.5px; background-color: #0f385f"
      />
      <div
        v-if="state > 2"
        class="w-20 md:w-32 my-auto"
        style="height: 1.5px; background-color: #35c502"
      />

      <div
        v-if="state != 3"
        class="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex"
        style="border-width: 1.5px; border-color: #0f385f; color: #0f385f"
      >
        <span class="mx-auto my-auto">3</span>
      </div>
      <div
        v-if="state == 3"
        class="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex"
        style="background-color: #0f385f"
      >
        <span class="mx-auto my-auto">3</span>
      </div>
    </div>
    <div
      class="flex justify-center mt-5 -ml-8 space-x-12 md:space-x-28"
      style="color: #0f385f; transition-duration: 0.25s"
    >
      <div class="text-sm pl-2 md:pl-0">create account</div>
      <div class="text-sm">choose plan</div>
      <div class="text-sm">payment</div>
    </div>

    <div
      id="state1"
      v-if="state == 1"
      class="flex flex-col mt-20 px-5 mx-auto text-left w-screen"
      style="transition-duration: 0.25s"
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
        type="email"
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
        @click="state += 0.5"
      >
        Next
      </button>
    </div>

    <div
      id="state1-5"
      v-if="state == 1.5"
      class="flex flex-col mt-20 px-5 mx-auto text-left w-screen"
      style="transition-duration: 0.25s"
    >
      <div class="text-3xl font-semibold">Shop information</div>
      <div class="mt-3 text-sm font-light">
        Don't worry, we won't do anything  <br />
        intruding on your privacy.
      </div>
      <input
        v-model="shopname"
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="shop name"
        name="shopname"
        class="bg-white rounded-md p-3 mt-6 text-sm"
        style="border-width: 1.5px; border-color: #000000"
      />
      <div class="flex">
      <input
        v-model="fname"
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="first name"
        name="first name"
        class="bg-white rounded-md p-3 mt-6 text-sm w-full mr-2"
        style="border-width: 1.5px; border-color: #000000"
      />
      <input
        v-model="lname"
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="last name"
        name="last name"
        class="bg-white rounded-md p-3 mt-6 text-sm w-full ml-2"
        style="border-width: 1.5px; border-color: #000000"
      /></div>
      <input
        v-model="phone"
        minlength="6"
        maxlength="100"
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="phone number"
        name="phone number"
        class="bg-white rounded-md p-3 mt-6 text-sm"
        style="border-width: 1.5px; border-color: #000000"
      />
      <input
        v-model="link"
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="link of shop social media account or contact"
        name="link"
        class="bg-white rounded-md p-3 mt-6 text-sm"
        style="border-width: 1.5px; border-color: #000000"
      />
      <div class="text-xs font-light mt-2" style="color: #AAAAAA;">ex. https://www.instagram.com/terryofficial.th/</div>
      <button
        class="p-4 text-white rounded-md font-medium mt-10 mx-auto"
        @click="state += 0.25"
      >
        Next
      </button>
      <div
        class="mx-auto text-gray-400 hover:text-gray-600 px-3 py-2 mt-5 cursor-pointer"
        @click="state -= 0.5"
      >
        Back
      </div>
    </div>
    <div
      id="state1-75"
      v-if="state == 1.75"
      class="flex flex-col mt-20 px-5 mx-auto text-left w-screen"
      style="transition-duration: 0.25s"
    >
      <div class="text-3xl font-semibold">Shop payment</div>
      <div class="mt-3 text-sm font-light">
        Please enter a bank account for <br />
        customer to pay. 
      </div>
      <select
        v-model="bank"
        minlength="6"
        maxlength="100"
        type="text"
        name="bankac"
        aria-placeholder="hi"
        class="bg-white rounded-md p-3 mt-6 text-sm cursor-pointer"
        style="border-width: 1.5px; border-color: #000000"
      >
      <option value="" disabled selected>bank</option>
      <option value="KASIKORNBANK">KASIKORNBANK</option>
      <option value="BANGKOKBANK">BANGKOKBANK</option>
      <option value="SCB">SCB</option>
      <option value="KRUNGSRI">KRUNGSRI</option>
      <option value="KRUNGTHAI">KRUNGTHAI</option>
      <option value="TTB">TTB</option>
      <option value="GSB">GSB</option>
      <option value="CITIBANK">CITIBANK</option>
    </select>
      <input
        v-model="acnum"
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="account number"
        name="bankac"
        class="bg-white rounded-md p-3 mt-6 text-sm"
        style="border-width: 1.5px; border-color: #000000"
      />
      <input
        v-model="acname"
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="account name"
        name="bankac"
        class="bg-white rounded-md p-3 mt-6 text-sm"
        style="border-width: 1.5px; border-color: #000000"
      />
      <button
        class="p-4 text-white rounded-md font-medium mt-10 mx-auto"
        @click="state += 0.25"
      >
        Next
      </button>
      <div
        class="mx-auto text-gray-400 hover:text-gray-600 px-3 py-2 mt-5 cursor-pointer"
        @click="state -= 0.25"
      >
        Back
      </div>
    </div>

    <div
      id="state2"
      v-if="state == 2"
      class="flex flex-col mt-20 mx-auto text-left px-5"
      style="transition-duration: 0.25s"
    >
      <div class="text-3xl font-semibold head">Choose your plan</div>

      <div
        class="mt-10 text-sm font-light rounded-2xl box"
        style="border-color: #000000; border-width: 1.5px"
      >
        <div class="text-xl font-semibold mb-5">Monthly subscribtion</div>
        <div class="grid grid-cols-3">
          <div></div>
          <div
            v-if="plan == 'ms'"
            class="p-2 md:px-4 mx-auto rounded-lg text-center text-white font-semibold cursor-pointer plan1"
          >
            Single Plan
          </div>
          <div
            v-if="plan != 'ms'"
            @click="plan = 'ms'"
            class="p-2 md:px-4 mx-auto rounded-lg text-center text-white font-semibold cursor-pointer deselect1"
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
        @click="state -= 0.25"
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
  shopname = ''
  fname = ''
  lname =''
  phone = ''
  link = ''
  bank = '' //ธนาคาร
  acnum = '' //เลขบช
  acname = '' //ชื่อบช
  plan = 'ms'; //ms = month single plan | me = month exclusive plan
}

</script>
<style scoped>
button {
  background-color: #ffb730;
  transition-duration: 0.25s;
  width: 100%;
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
@media (min-width: 480px) {
  #state1 {
    width: 480px;
  }
  #state1-5 {
    width: 480px;
  }
  #state1-75 {
    width: 480px;
  }
}
.box {
    padding: 15px;
  }
@media (min-width: 820px) {
  .box {
    width: 800px;
    padding: 40px;
  }
  .head {
    width: 800px;
  }
}

</style>
