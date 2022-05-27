<template>
  <div>
    <div
      class="relative bg-[#dedede] rounded-lg cursor-pointer box"
      @click="upload"
      v-if="!image && type === 'upload'"
    >
      <div class="arrow"></div>
      <div class="arrow-vertical"></div>
      <input
        type="file"
        class="hidden"
        ref="fileUpload"
        @change="onChangeFile"
      />
    </div>
    <div
      v-else
      class="rounded-lg"
      :style="{
        'background-image': `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        'background-position': 'center',
      }"
    >
      <div class="rounded-lg" style="backdrop-filter: blur(15px);">
        <img
          class="w-full object-contain box"
          :src="image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from 'nuxt-property-decorator';

@Component
export default class Placeholder extends Vue {
  @Prop({ type: String, default: 'upload' }) type!: string;
  // @Prop({ type: String, default: '510' }) height!: string;
  @Prop({ type: String, default: '' }) imagePreview!: string;

  fileUpload: File | null = null;

  get image() {
    if (this.imagePreview) return this.imagePreview;
    return this.fileUpload ? URL.createObjectURL(this.fileUpload) : '';
  }

  upload() {
    let fileUpload = this.$refs.fileUpload as any;
    fileUpload.click();
  }

  onChangeFile() {
    let fileUpload = this.$refs.fileUpload as any;
    this.fileUpload = fileUpload.files[0];
    this.$emit('input', fileUpload.files[0]);
  }
}
</script>

<style scoped>
.box {
  aspect-ratio: 16 / 9;
}
.arrow {
  position: absolute;
  width: 15px;
  height: 100px;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;

  background: #ffffff;
  border-radius: 20px;
  transform: rotate(-90deg);
}
.arrow-vertical {
  position: absolute;
  width: 15px;
  height: 100px;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;

  background: #ffffff;
  border-radius: 20px;
}
</style>
