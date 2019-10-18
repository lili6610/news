import request from '@/utils/request'
//文章列表
export function articleList() {
    return request({
      url: '/api/post/list',
      method: 'get'
    })
  }
