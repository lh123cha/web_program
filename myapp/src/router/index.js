import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../components/user/user'
import Register from'../components/user/register'
import Search from '../components/user/search'
import Admin from '../components/user/admin'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/user',
      name: 'user',
      component:User
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/admin',
      name:'admin',
      component:Admin
    }
  ]
})
