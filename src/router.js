import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import(/* webpackChunkName: "about" */ './views/Vip.vue'),
    },
    {
      path: '/lateList',
      name: 'lateList',
      component: () => import(/* webpackChunkName: "about" */ './views/LateList.vue'),
    },
    {
      path: '/cmt/',
      name: 'cmt',
      component: () => import(/* webpackChunkName: "about" */ './views/Cmt.vue'),
    },
    {
      path: '/category/',
      name: 'category',
      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue'),
    },
    {
      path: '/my/',
      name: 'my',
      component: () => import(/* webpackChunkName: "about" */ './views/My.vue'),
    },
    {
      path: '/sheets/',
      name: 'sheets',
      component: () => import(/* webpackChunkName: "about" */ './views/Sheets.vue'),
    },
    {
      path: '/search/',
      name: 'search',
      component: () => import(/* webpackChunkName: "about" */ './views/Search.vue'),
    },
    {
      path: '/reg/',
      name: 'reg',
      component: () => import('./views/Register.vue'),
    },
  ]
})
