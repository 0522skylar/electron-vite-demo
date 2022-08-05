import axios from 'axios'
//平台项目B端CMS

const configEnv = 'http://localhost:80/admin/test'

export class HttpService {
  service: any = null;

  showError = null;
  // showError参数代表接口报错是否需要全局的错误提醒，默认值为true
  constructor(config, showError) {
    const axiosConfig = {
      baseURL: configEnv,
      timeout: 1000 * 60,
      ...config
    }

    this.service = axios.create(axiosConfig);
    this.showError = showError;
  }

  addRequestFilter() {
    // request 拦截器axios的一些配置
    this.service.interceptors.request.use(
      (config) => {
        config.headers.Authorization = '123'
        return config
      },
      (error) => {
        console.error('error', error)
        Promise.reject(error)
      }
    )

    return this;
  }

  addResponseFilter() {
    // respone 拦截器axios的一些配置
    this.service.interceptors.response.use(
      (res) => {
        console.log('res', res);

        if(res.status === 200) {
          const { data } = res;
          if(data.code === 200 || data.code === 0) {
            return Promise.resolve(data.data)
          }

          // 判断一下是否为二进制流
          if(res.data instanceof Blob) {
            return Promise.resolve(res.data)
          }

          if(this.showError) {
            alert(data.message || data.msg || 'Error')
          }

          return Promise.reject(new Error(data.message || data.msg || 'Error'))
        }

        alert('服务器异常！');
        return Promise.reject(new Error(res.data.msg || res.data.message || 'Error'))
      },

      (error) => {
        alert('网络错误！')
        return Promise.reject(error);
      }
    )

    return this;
  }

}

export default (conf, showError) => new HttpService(conf, showError).service;