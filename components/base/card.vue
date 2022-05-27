<template>
  <div class="border-2 border-black rounded-md card flex">
    <img
      src="https://i.scdn.co/image/ab67616d0000b2739016f58cc49e6473e1207093"
      class="object-cover productimg"
    />
    <div class="p-3 w-full h-full flex flex-col">
      <div>
        <div class="text-lg font-semibold name">Page Name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit porro consequuntur illum ad nobis explicabo error facilis beatae suscipit quia repellendus et in animi similique laboriosam laborum, cum itaque modi.</div>
        <a href="http://" class="underline name" style="color: #4da9ff">link</a>
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
.name {
  white-space: nowrap;
  width: 175px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card {
  width: 325px;
  height: 125px;
}
</style>
