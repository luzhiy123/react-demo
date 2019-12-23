import qs from "qs";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/",
  // 请求后的数据处理
  transformResponse: [
    function(data: AxiosResponse) {
      return data;
    },
  ],
  // 查询对象序列化函数
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paramsSerializer: function(params: any) {
    return qs.stringify(params);
  },
  // 请求超时时间
  timeout: 3000,
  // 跨域是否带token
  withCredentials: true,
  responseType: "json",
  // xsrf 设置
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  validateStatus: function(status: number) {
    return status >= 200 && status < 300;
  },
};
export default axiosConfig;
