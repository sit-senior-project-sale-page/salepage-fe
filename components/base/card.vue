<template>
  <div class="border-2 border-black rounded-md w-96 h-36 flex">
    <img
      src="https://i.scdn.co/image/ab67616d0000b2739016f58cc49e6473e1207093"
      class="object-cover productimg"
    />
    <div class="p-5 w-full h-full flex flex-col">
      <div>
        <div class="text-lg font-semibold">Page Name</div>
        <a href="http://" class="underline" style="color: #4da9ff">link</a>
      </div>
      <div class="flex space-x-2 w-full justify-end mt-auto">
        <div class="text-gray-400 underline cursor-pointer text-sm">Edit</div>
        <div class="text-gray-400 text-sm">|</div>
        <div class="text-gray-400 underline cursor-pointer text-sm">Delete</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.productimg {
  border-radius: 4px 0px 0px 4px;
  aspect-ratio: 1 / 1;
  border-right: 2px solid black;
}
</style>
