import AxiosWrapper from './AxiosWrapper';
import SiteEndpoint from './endpoints/Site';
import OrderEndpoint from './endpoints/Order';

export default class ApiService {
  private axiosWrapper: AxiosWrapper;
  readonly site: SiteEndpoint;
  readonly order: OrderEndpoint;

  constructor(axiosWrapper: AxiosWrapper) {
    this.axiosWrapper = axiosWrapper;
    this.site = new SiteEndpoint(axiosWrapper);
    this.order = new OrderEndpoint(axiosWrapper);
  }
}
