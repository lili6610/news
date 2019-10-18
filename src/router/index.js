import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:()=>import('@/views/login/index')
    },
    {
      path:'/',
      redirect:'/dashboard'
    },
    {
      path: '/',
      component: ()=>import('@/components/common/home'),
      children:[
        {
          path:'/dashboard',
          component:()=>import('@/views/dashboard/index')
        },
        {
          path:'/news',
          component:()=>import('@/views/news/index')
        }
      ]
    },
  ]
})
