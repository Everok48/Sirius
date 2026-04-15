import Vue from 'vue'
import VueRouter from 'vue-router'
import PartnersPage from '../views/PartnersPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PartnersPage',
    component: PartnersPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
