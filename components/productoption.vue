<template>
  <div>
    <!-- <img :src="optionimg" class="h-5 w-5"> -->
    {{optionname}}
    <!-- hi -->
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'nuxt-property-decorator';
export default class Productoption extends Vue {
  @Prop() optionname!: any;
  @Prop() optionimg!: any;






  mounted(){
    // console.log(this.option);
    // console.log('hi');
    
  }
}
</script>
