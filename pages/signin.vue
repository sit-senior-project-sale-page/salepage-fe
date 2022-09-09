<template>
  <div class="h-screen flex flex-col">
  <div class="fixed w-screen h-screen" style="background-color: #0f385f; z-index: -10;"></div>
    <!-- <div class="fixed body w-screen h-screen"></div> -->
    <!-- <div class="px-8 w-screen py-6 absolute">
      <img
        src="../assets/image/upforsale.png"
        class="h-14 md:h-20 mx-auto md:mx-0"
      />
    </div> -->
    <div
      class="p-8 sm:p-12 flex flex-col text-left rounded-2xl mx-5 sm:mx-auto my-auto box"
      style="background-color: #142e46"
    >
      <div class="text-2xl sm:text-3xl font-bold text-white">Sign in</div>
      <input
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="Username"
        name="username"
        class="bg-gray-100 rounded-md p-2 sm:p-3 mt-4 sm:mt-6 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-outline focus:shadow ring-offset-2 text-sm"
      />
      <input
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="Password"
        name="password"
        class="bg-gray-100 rounded-md p-2 sm:p-3 mt-4 sm:mt-6 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-outline focus:shadow ring-offset-2 text-sm"
      />
      <div class="mt-5 sm:mt-7">
        <nuxt-link to="shopindex">
          <button
            class="p-3 sm:p-4 text-white rounded-md w-full font-medium"
            style="background-color: #ffb730"
          >
            Sign in
          </button></nuxt-link
        >
        <div class="text-xs text-white mt-3">
          <span style="color: #a8a8a8">New here? </span>
          <nuxt-link to="signup">
            <span class="hover:underline cursor-pointer"
              >Sign up now.</span
            ></nuxt-link
          >
        </div>
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
export default class Login extends Vue {}
</script>
<style scoped>
@media (min-width: 450px) {
  .box {
    width: 425px;
  }
}
</style>
