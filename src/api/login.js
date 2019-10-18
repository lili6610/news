import request from '@/utils/request'
//登录
export function login(form) {
    return request({
      url: '/api/user/login/',
      method: 'post',
      data:{
          username:form.username,
          password:form.password
      }
    })
  }