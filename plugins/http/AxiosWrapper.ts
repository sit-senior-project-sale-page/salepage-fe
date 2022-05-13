import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { EndpointCommonResponse } from '~/types/types';
interface IAxiosWrapper {
  get: (...configs: [string, any]) => Promise<any>;
  post: (...configs: [string, any]) => Promise<any>;
  put: (...configs: [string, any]) => Promise<any>;
  delete: (...configs: [string, any]) => Promise<any>;
}

export default class AxiosWrapper implements IAxiosWrapper {
  private axiosInstance!: AxiosInstance;
  private readonly prefix: string;
  constructor(axiosInstance: any, prefix: string) {
    this.axiosInstance = axiosInstance;
    this.prefix = prefix;
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    try {
      const response = await this.axiosInstance.get(this.prefix + url, config);
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  async post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await this.axiosInstance.post(
        this.prefix + url,
        data,
        config
      );
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  async patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await this.axiosInstance.patch(
        this.prefix + url,
        data,
        config
      );
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  async put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await this.axiosInstance.put(
        this.prefix + url,
        data,
        config
      );
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  async delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await this.axiosInstance.delete(
        this.prefix + url,
        config
      );
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  interceptor<T>(res: AxiosResponse): {
    success: boolean;
    data?: T;
    message?: string;
  } {
    const data: EndpointCommonResponse = res.data;
    if (data && data.statusCode === 200) {
      return { success: true, data: data.data, message: data.message };
    } else {
      return {
        success: false,
        message: data.message || this.messageTransalater(data.statusCode),
      };
    }
  }

  private messageTransalater(status: number): string {
    switch (status) {
      case 400:
        return 'ข้อมูลผิดผลาด';
      case 401:
        return 'ไม่มีสิทธิ์เข้าถึง';
      case 403:
        return 'ไม่สามารถเข้าถึง';
      case 409:
        return 'ข้อมูลไม่ตรงกัน';
      case 410:
        return 'ข้อมูลหาย';
      case 418:
        return 'เซิฟวอร์กำลังชงชา';
      case 500:
        return 'เกิดปัญหาทางเซิฟเวอร์';
      default:
        return 'ผิดผลาด';
    }
  }
}
