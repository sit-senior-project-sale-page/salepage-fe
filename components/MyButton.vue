<template>
  <button
    class="text-white font-bold py-4 px-4 rounded-[10px] w-full"
    :style="{
      backgroundColor: color,
    }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    color: {
      type: String,
      default: '#FFC24C',
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
})
export default class MyButton extends Vue {}
</script>

<style></style>
