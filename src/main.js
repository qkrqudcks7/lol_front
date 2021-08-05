// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMoment from 'vue-moment'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import CKEditor from 'ckeditor4-vue'
import 'vuetify/dist/vuetify.min.css'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faPen
} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faPen)

Vue.use(VueMoment)
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(CKEditor)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi'
    }
  }),
  template: '<App/>'
})
