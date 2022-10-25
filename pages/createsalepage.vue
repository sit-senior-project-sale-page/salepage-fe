<template>
  <div class="pt-5">
    <NavBar></NavBar>
    <div
      class="rounded-3xl mx-auto my-12"
      style="width: 860px; background-color: #f5f5f5"
    >
      <div class="grid grid-cols-3 justify-center min-w-full p-4">
        <div
          class="text-sm cursor-pointer my-auto left-0 block w-full pl-3"
          style="color: #1d74c5"
        >
          Back
        </div>
        <div
          class="font-semibold cursor-default w-full text-center my-auto"
          style="color: #0f385f"
        >
          Create Sale Page
        </div>
      </div>
      <div class="p-10 space-y-5">
        <div class="flex">
          <div class="space-y-5">
            <div>
              <div class="text-sm text-gray-600">domain name</div>
              <div>
                <input
                  type="text"
                  class="rounded-md p-2 px-3 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-blue-300 ring-offset-2"
                  placeholder="hihi.com"
                />
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-600">product name</div>
              <div>
                <input
                  type="text"
                  class="rounded-md p-2 px-3 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-blue-300 ring-offset-2"
                  placeholder="Super Serum"
                />
              </div>
            </div>
          </div>
          <div class="pl-10">
            <div class="flex justify-between">
              <div class="text-sm text-gray-600">product photos</div>
              <div
                class="text-sm text-gray-600 cursor-pointer"
                style="color: #1d74c5"
              >
                add +
              </div>
            </div>
            <div class="flex space-x-5 w-full overflow-y-auto rounded-xl">
              <img
                src="https://cf.shopee.co.th/file/ea4efac6adc6a9341c829c376258644c"
                class="h-28 w-28 object-cover rounded-xl mx-auto"
              />
              <img
                src="https://cf.shopee.co.th/file/ea4efac6adc6a9341c829c376258644c"
                class="h-28 w-28 object-cover rounded-xl mx-auto"
              />
              <img
                src="https://cf.shopee.co.th/file/ea4efac6adc6a9341c829c376258644c"
                class="h-28 w-28 object-cover rounded-xl mx-auto"
              />
              <img
                src="https://cf.shopee.co.th/file/ea4efac6adc6a9341c829c376258644c"
                class="h-28 w-28 object-cover rounded-xl mx-auto"
              />
              <img
                src="https://cf.shopee.co.th/file/ea4efac6adc6a9341c829c376258644c"
                class="h-28 w-28 object-cover rounded-xl mx-auto"
              />
              <img
                src="https://cf.shopee.co.th/file/ea4efac6adc6a9341c829c376258644c"
                class="h-28 w-28 object-cover rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="text-sm text-gray-600">product detail</div>
          <div>
            <textarea
              maxlength="1000"
              cols="38"
              rows="12"
              placeholder="Text here"
              class="bg-white text-sm rounded-lg px-4 py-2 resize-none w-full focus:outline-none focus:ring-1 focus:ring-blue-300 ring-offset-2"
            />
          </div>
        </div>
        <div>
          <div class="text-sm text-gray-600 mb-3">product options</div>
          <div class="space-y-2">
            <OptionCreateCard />
            <div class="grid grid-cols-8">
              <div
                class="h-16 w-16 object-cover rounded-lg text-xs text-white flex cursor-pointer"
                style="background-color: #142e46"
              >
                <div class="mx-auto my-auto text-center text-gray-400">attach photo</div>
              </div>
              <div class="my-auto col-span-2 pr-3 ">
                <input
                  type="text"
                  class="rounded-md p-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300 ring-offset-2"
                  placeholder="option name"
                />
              </div>
              <div class="my-auto pr-3 ">
                <input
                  type="number"
                  class="rounded-md p-2 px-3 text-sm w-20 focus:outline-none focus:ring-1 focus:ring-blue-300 ring-offset-2"
                  placeholder="price"
                />
              </div>
              <div
                class="text-sm text-gray-600 cursor-pointer my-auto"
                style="color: #1d74c5"
              >
                add +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';
import OptionCreateCard from '~/components/OptionCreateCard.vue';
export default {
  components: { NavBar, OptionCreateCard },
  data(){
    return{
        image: null,
    }
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickImage(event) {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.artistImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
      this.selectedImage = event.target.files[0];
    },
  }
};
</script>
<style scoped>
</style>