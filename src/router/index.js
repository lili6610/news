import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/helloworld'
    },
    {
      path: '/',
      component: ()=>import('../components/common/home'),
      children:[
        {
          path:'/helloworld',
          component:()=>import('../components/HelloWorld')
        },
        {
          path:'/second',
          component:()=>import('../components/second')
        }
      ]
    },
  ]
})
