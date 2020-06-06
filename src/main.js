import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import * as VueFire from 'vuefire'
import './firebase'
import { firestorePlugin } from 'vuefire'


// Vue.use(VueFire)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
