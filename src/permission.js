import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {Message} from 'element-ui'
import {getToken} from '@/utils/auth' // getToken from cookie

NProgress.configure({showSpinner: false})// NProgress configuration

const whiteList = ['/login'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//   store.commit('changeRouter')
//   if(!localStorage.getItem("Token")){
//     if(to.path == "/login"){
//       next()
//     }else{
//       next({ path: '/login' })
//     }
//   }else{
//     if(to.path == "/login"){
//       next({path:"/"})
//     }else{
//       next()
//     }
//   }
// })
router.beforeEach((to, from, next) => {
  store.commit('changeRouter')
  if (!localStorage.getItem("Token")) {
    if (to.path == "/login") {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    if (to.path == "/login") {
      next({path: "/"})
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
