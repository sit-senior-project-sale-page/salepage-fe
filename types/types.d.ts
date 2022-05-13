export interface Dictionary<T> {
  [key: string]: T;
}

export interface EndpointCommonResponse {
  statusCode: number;
  data?: any;
  message: any;
}
export interface ValidationState {
  [key: string]: { validator?: (val: any) => boolean; validated: boolean };
}
