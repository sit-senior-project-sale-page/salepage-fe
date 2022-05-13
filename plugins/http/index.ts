import { Plugin } from '@nuxt/types';
import AxiosWrapper from './AxiosWrapper';
import ApiService from './ApiService';

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosWrapper;
    $api: ApiService;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $http: AxiosWrapper;
    $api: ApiService;
  }
  interface Context {
    $http: AxiosWrapper;
    $api: ApiService;
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $http: AxiosWrapper;
    $api: ApiService;
  }
}

const servicePlugin: Plugin = (context, inject) => {
  const axios: AxiosWrapper = new AxiosWrapper(context.$axios, '/api');
  inject('http', axios);
  inject('api', new ApiService(axios));
};

export default servicePlugin;
