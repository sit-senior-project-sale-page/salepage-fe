<template>
    <div class="flex p-5 px-10 h-28 fixed w-screen top-0">
      <img
        src="../assets/image/upforsale.png"
        class="h-10 md:h-16 mx-auto md:mx-0 top-5 left-10 absolute"
      />
      <div v-if="toggle" class="text-center font-semibold mx-auto my-auto">
        <div class="text-xs">Welcome back Jiraphat!</div>
        <div class="flex">
          <img
            src="https://cf.shopee.co.th/file/0626618d42bae52b9eedc95d97abf714_tn"
            class="h-5 md:h-10 mx-auto md:mx-0 rounded-full"
            style="border-width: 0.5px; border-color: #e9e9e9"
          />
          <div class="my-auto pl-2">Let’s manage terryofficial.th</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      toggle: true,
    }
  },
  mounted(){
    console.log(window.location.pathname);
    if ( window.location.pathname != '/shopmanage'){
      this.toggle = false;
    }
  }
}
</script>
<style scoped>
.bg{
  background-color: rgba(255, 255, 255, 0.6);
  filter: blur(8px);
}
</style>