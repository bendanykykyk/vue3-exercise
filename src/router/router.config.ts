import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ROOT', // 这里如果写Home 就有坑，一直处于选中状态
    component: () => import('@/views/layouts/index.vue'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/home/index.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      },
      {
        path: '/demo',
        name: 'Dome',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/dome/index.vue'),
        meta: { title: '案例', keepAlive: false, showTab: true }
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/test/index.vue'),
        meta: { title: '测试', keepAlive: false, showTab: true }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/mine/index.vue'),
        meta: { title: '我的', keepAlive: false, showTab: true }
      }
    ]
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: () => import(/* webpackChunkName: "about" */ '@/views/userLogin/index.vue'),
    meta: { title: '用户登录', keepAlive: false, showTab: false }
  },
  {
    path: '/userRegister',
    name: 'UserRegister',
    component: () => import(/* webpackChunkName: "about" */ '@/views/userRegister/index.vue'),
    meta: { title: '用户注册', keepAlive: false, showTab: false }
  },
  {
    path: '/rem',
    name: 'Rem',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Rem.vue'),
    meta: { title: 'Rem', keepAlive: false, showTab: true }
  },
  {
    path: '/scssConfig',
    name: 'ScssConfig',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ScssConfig.vue'),
    meta: { title: 'ScssConfig', keepAlive: false, showTab: true }
  },
  {
    path: '/storage',
    name: 'Storage',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Storage/index.vue'),
    meta: { title: 'Storage使用', keepAlive: false, showTab: true }
  }
]
