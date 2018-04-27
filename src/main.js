import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customers from './pages/Customers.vue'
import Products from './pages/Products.vue'
import LatestPurchases from './pages/LatestPurchases.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/customers' },
  { path: '/customers', component: Customers },
  { path: '/customers/:id', component: LatestPurchases },
  { path: '/products', component: Products }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
