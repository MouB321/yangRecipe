import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index.vue'], resolve),
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bottomBar',
      name: 'bottomBar',
      component: resolve => require(['@/components/BottomBar.vue'], resolve),
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: resolve => require(['@/pages/recommend/recommend.vue'], resolve),
      meta: {
        title: '推荐',
        tabBar: true
      }
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: resolve => require(['@/pages/warehouse/warehouse.vue'], resolve),
      meta: {
        title: '仓库',
        tabBar: true
      }
    },
    {
      path: '/feast',
      name: 'feast',
      component: resolve => require(['@/pages/feast/feast.vue'], resolve),
      meta: {
        title: '待定',
        tabBar: true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['@/pages/my/my.vue'], resolve),
      meta: {
        title: '我的',
        tabBar: true
      }
    },
  ]
})
