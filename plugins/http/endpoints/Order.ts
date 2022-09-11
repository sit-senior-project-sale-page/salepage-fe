import Endpoint from './Endpoint';

enum APIS {
  POST_ORDER = '/order',
}

export default class OrderEndpoint extends Endpoint {
  async createOrder(payload: object) {
    const res = await this.axiosWrapper.post(APIS.POST_ORDER, payload);
    return this.axiosWrapper.interceptor<any>(res);
  }
}
