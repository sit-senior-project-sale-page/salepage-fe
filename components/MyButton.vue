<template>
  <button
    class="w-full px-4 py-4 font-bold text-white rounded-lg "
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
