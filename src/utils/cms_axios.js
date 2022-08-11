import axios from 'axios'
import { message } from 'antd'
// import Qs from 'qs'

export class HttpService {
  service = null
  // 默认请求体处理方法
  requestReslove = config => {
    config.headers['Authorization'] = localStorage.getItem('accessToken')
    return config
  }
  requestReject = error => {
    console.error('error:', error) // for debug
    Promise.reject(error)
  }
  // 默认返回体处理方法
  responseReslove = res => {
    if (res.status === 200) {
      const data = res.data
      if (data.code === 200 || data.code === 0) {
        // 默认把data抽离再返回，可以通过设置请求头返回完整的返回体
        if (res.config.headers['x-return-complete'] === true) {
          return Promise.resolve(data)
        } else {
          return Promise.resolve(data.data)
        }
      } else if (res.headers['content-type'] === 'application/octet-stream') {
        // 后端返回的是文件流，此时操作为下载文件。把整个res返回、不报错
        return Promise.resolve(res)
      } else if (res.config.headers['x-show-tips'] !== false) {
        
        // header中可以设置不展示提示窗
        message.error(data.message || data.msg);
      }
      return Promise.reject(
        new Error(data.message || data.msg || 'Error'),
      )
    } else {

      message.error('服务异常!');
      return Promise.reject(
        new Error(res.data.message || res.data.msg || 'Error'),
      )
    }
  }
  responseReject = error => {
    message.error('网络错误!');

    return Promise.reject(error)
  }

  constructor(config, requestReslove, requestReject, responseReslove, responseReject) {
    const axiosConfig = Object.assign(
      {
        timeout: 1000 * 45,
        paramsSerializer: function(params) {
          // return Qs.stringify(params, { arrayFormat: 'comma' })
        },
      },
      config,
    )
    this.service = axios.create(axiosConfig)
    this.addRequestFilter(requestReslove, requestReject).addResponseFilter(responseReslove, responseReject)
  }

  addRequestFilter(resloveFun = this.requestReslove, rejectFun = this.requestReject) {
    // request 拦截器 axios 的一些配置
    this.service.interceptors.request.use(resloveFun, rejectFun)
    return this
  }

  addResponseFilter(resloveFun = this.responseReslove, rejectFun = this.responseReject) {
    // respone 拦截器 axios 的一些配置
    this.service.interceptors.response.use(resloveFun, rejectFun)
    return this
  }
}

export default (...args) => new HttpService(...args).service
