import { Plugin } from '@nuxt/types';
import Helper from './Helper';

declare module 'vue/types/vue' {
  interface Vue {
    $helper: Helper;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $helper: Helper;
  }
  interface Context {
    $helper: Helper;
    $swal: (...any: any[]) => Promise<any>;
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $helper: Helper;
  }
}

const servicePlugin: Plugin = (context, inject) => {
  inject('helper', new Helper(context));
};

export default servicePlugin;
