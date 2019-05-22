/** When your routing table is too long, you can split it into small modules **/

import Layout from '../../views/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  alwaysShow: true,
  name: 'Nested',
  meta: { title: '路由嵌套', icon: 'nested', roles: ['Nested'] },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: '菜单 1', roles: ['Menu1'] },
      redirect: '/nested/menu1/menu1-1',
      alwaysShow: true,
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: '菜单 1-1', roles: ['Menu1-1'] }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          alwaysShow: true,
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: '菜单 1-2', roles: ['Menu1-2'] },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: { title: '菜单 1-2-1', roles: ['Menu1-2-1'] }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              name: 'Menu1-2-2',
              meta: { title: '菜单 1-2-2', roles: ['Menu1-2-2'] }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: { title: '菜单 1-3', roles: ['Menu1-3'] }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '菜单 2', roles: ['Menu2'] }
    }
  ]
}

export default nestedRouter
