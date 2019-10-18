import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import router from '@/router'

//消息提示
var message = function(type,message){
  Message({
    showClose: true,
    message: message,
    type: type,
    duration: 1000
  })
}

// 创建axios实例
const service = axios.create({
  //baseURL: '/api' + process.env.BASE_API, // api 的 base_url
  //临时调整
  baseURL: process.env.BASE_API,
  // timeout: 50000// 请求超时时间
})
service.interceptors.request.use(
  config => {
    console.log(config);
    if (localStorage.getItem('Token')) {
      config.headers['Authorization'] = 'JWT ' + localStorage.getItem('Token')
      // config.headers['Authorization'] =sessionStorage.getItem('Token')
    }
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 20000) {
      return response
    } else {
      return response
    }
  },
  error => {
    if(!error.response){
      return Promise.reject(error)
    }
    else if(error.response.status == 500 || error.response.status == 504){
      message('error','network error')
    }else if(error.response.status == 403){
      message('error','permission denied')
    }else if(error.response.status == 401){
      message('error','token invalid')
      localStorage.removeItem('Token')
      router.push({name:'login'})
    }
    return Promise.reject(error)
  }
)

export default service
