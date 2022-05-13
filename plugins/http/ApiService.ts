import AxiosWrapper from './AxiosWrapper';

export default class ApiService {
  private axiosWrapper: AxiosWrapper;
 
  constructor(axiosWrapper: AxiosWrapper) {
    this.axiosWrapper = axiosWrapper;
  }
}
