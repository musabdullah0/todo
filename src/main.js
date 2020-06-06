import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueFire from 'vuefire'
import './firebase'

Vue.use(VueFire)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
