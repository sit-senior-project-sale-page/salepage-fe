import AxiosWrapper from './AxiosWrapper';
import SiteEndpoint from './endpoints/Site';

export default class ApiService {
  private axiosWrapper: AxiosWrapper;
  readonly site: SiteEndpoint;

  constructor(axiosWrapper: AxiosWrapper) {
    this.axiosWrapper = axiosWrapper;
    this.site = new SiteEndpoint(axiosWrapper);
  }
}
