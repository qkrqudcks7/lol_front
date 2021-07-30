import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Champ from '../components/Champ'
import DetailChamp from '../components/DetailChamp'
import Main from '../components/Main'
import DetailMatch from '../components/DetailMatch'
import BoardList from '../components/BoardList'
import OneBoard from '../components/OneBoard'
import WriteBoard from '../components/WriteBoard'
import ModifyBoard from '../components/ModifyBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
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
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detailMatch',
      name: 'detailMatch',
      component: DetailMatch
    },
    {
      path: '/boardList',
      name: 'boardList',
      component: BoardList
    },
    {
      path: '/oneBoard',
      name: 'oneBoard',
      component: OneBoard
    },
    {
      path: '/writeBoard',
      name: 'writeBoard',
      component: WriteBoard
    },
    {
      path: '/modifyBoard',
      name: 'modifyBoard',
      component: ModifyBoard
    }

  ]
})
