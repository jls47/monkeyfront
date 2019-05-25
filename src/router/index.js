import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import deleteform from '@/components/deleteform'
import editform from '@/components/editform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/delete',
      name: 'delete',
      component: deleteform
    },
    {
      path: '/edit',
      name: 'edit',
      component: editform
    }
  ]
})
