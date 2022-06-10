import Endpoint from './Endpoint';

enum APIS {
  GET_SITE = '/api/site',
  POST_SITE = '/api/site',
}

export default class SiteEndpoint extends Endpoint {
  async getSites() {
    return await this.axiosWrapper
      .get(APIS.GET_SITE)
      .then((res) => this.axiosWrapper.interceptor<any>(res));
  }

  async getSiteById(id: number) {
    const res = await this.axiosWrapper.get(APIS.GET_SITE + `/${id}`);
    return this.axiosWrapper.interceptor<any>(res);
  }

  async createSite(oldPassword: string, newPassword: string) {
    const payload = { oldPassword, newPassword };
    const res = await this.axiosWrapper.post(APIS.POST_SITE, payload);
    return this.axiosWrapper.interceptor<any>(res);
  }
}
