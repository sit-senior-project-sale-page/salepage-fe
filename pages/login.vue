<template>
  <div class="pt-12">
    <!-- <div class="fixed body w-screen h-screen"></div> -->
    <div
      class="p-10 flex flex-col text-center space-y-5 rounded-xl md:shadow-lg md:w-96 mt-12 mx-auto"
    >
      <div class="text-xl font-semibold">Login</div>
      <input
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="Username"
        name="username"
        class="bg-gray-100 rounded p-2 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-outline focus:shadow ring-offset-2"
      />
      <input
        minlength="6"
        maxlength="100"
        type="text"
        placeholder="Password"
        name="password"
        class="bg-gray-100 rounded p-2 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-outline focus:shadow ring-offset-2"
      />
      <nuxt-link to="shopindex">
        <button
          class="p-2 text-white rounded-lg w-full"
          style="background-color: #4da9ff"
        >
          Login
        </button></nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  name: 'ShopIndex',
  layout: 'nav',
})
export default class Login extends Vue {}
</script>
