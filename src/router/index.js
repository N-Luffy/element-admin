import Vue from 'vue'
import Cookies from 'js-cookie'
import Router from 'vue-router'
import { constantRoutes } from './router'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '../utils/auth'
import store from '../store' // get token from cookie
// import getPageTitle from '../utils/get-page-title'

Vue.use(Router)

/**
 * 创建路由
 * @returns {VueRouter}
 */
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const route = createRouter()

/**
 * 重置路由
 */
export function resetRouter() {
  const newRouter = createRouter()
  route.matcher = newRouter.matcher
}

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

route.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // // set page title
  // document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = (store.getters.roles && store.getters.roles.length > 0 || store.getters.administrator === true)
      if (hasRoles) {
        if ((Cookies.get('locking') === '1' || localStorage.CookieLocking === '1') && to.name !== 'locking') { // 判断当前是否是锁定状态
          next({
            replace: true,
            name: 'locking'
          })
          next({ path: '/locking' })
          NProgress.done()
        } else if ((Cookies.get('locking') === '0' || localStorage.CookieLocking === '0') && to.name === 'locking') {
          next(false)
          NProgress.done()
        } else {
          next()
        }
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { roles, administrator } = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', { roles, administrator })
          // dynamically add accessible routes
          route.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

route.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

export default route
