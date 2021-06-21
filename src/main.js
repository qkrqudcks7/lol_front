import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueMoment from 'vue-moment'

Vue.use(VueMoment)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
