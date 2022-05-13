import AxiosWrapper from '../AxiosWrapper';

export default class Endpoint {
  protected readonly axiosWrapper: AxiosWrapper;
  constructor(axiosWrapper: AxiosWrapper) {
    this.axiosWrapper = axiosWrapper;
  }
}
