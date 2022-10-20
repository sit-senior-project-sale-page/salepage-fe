<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
// import Card from '~/components/base/base/base/card.vue';
@Component({
  name: 'ShopIndex',
  layout: 'loggedinNav',
})

// layout(context) {
//     return 'nav'
//   },
export default class ShopIndex extends Vue {
  //   name: 'ShopIndex'
  menu1 = true;
  menu2 = false;
  webs = [];

  async mounted() {
    const result = await this.$api.site.getSites();
    console.log('result', result);

    this.webs = result.data;
    console.log(this.webs);
  }
}
</script>
<style scoped>
.body {
  background-color: #f6f6f6;
  z-index: -1;
}
.box {
  width: 100%;
}
@media (min-width: 1024px) {
  .box {
    width: 900px;
  }
}
.box {
  width: 100%;
}
.box {
  width: 900px;
}
.menuactive {
  border-radius: 6px 6px 0px 0px;
}
.menu1 {
  border-radius: 6px 0px 0px 0px;
}
.menu2 {
  border-radius: 0px 6px 0px 0px;
}
</style>
