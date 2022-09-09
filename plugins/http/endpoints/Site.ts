import Endpoint from './Endpoint';

enum APIS {
  GET_SITE = '/site',
  GET_SITE_DOMAIN = '/site/domain',
  POST_SITE = '/site',
}

export default class SiteEndpoint extends Endpoint {
  async getSites() {
    return await this.axiosWrapper
      .get(APIS.GET_SITE)
      .then((res) => this.axiosWrapper.interceptor<any>(res.data));
  }

  async getSiteByDomain(domain: string) {
    const res = await this.axiosWrapper.get(
      APIS.GET_SITE_DOMAIN + `/${domain}`
    );
    return this.axiosWrapper.interceptor<any>(res);
  }

  async createSite(data: object) {
    const payload = { data };
    const res = await this.axiosWrapper.post(APIS.POST_SITE, payload);
    return this.axiosWrapper.interceptor<any>(res);
  }
}
