import Vue from 'vue'
import App from './App.vue'
import "@ironsrc/fusion-ui/native/vue"
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
