import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Champ from '../components/Champ'
import DetailChamp from '../components/DetailChamp'
import Example from '../components/Example'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/champ',
      name: 'champ',
      component: Champ
    },
    {
      path: '/detailChamp',
      name: 'detailChamp',
      component: DetailChamp
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    }
  ]
})
