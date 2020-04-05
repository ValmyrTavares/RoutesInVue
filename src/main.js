import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import pageLoading from './components/pageLoading'

Vue.config.productionTip = false
Vue.component("pageLoading", pageLoading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
