import Vue from 'vue'
import Quasar from 'quasar'
import App from './App.vue'
import store from './store'
import router from './router'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/roboto-font/roboto-font.css'

import { Notify, Dialog, Loading } from 'quasar'

Vue.use(Quasar, {
  config: {
    brand: {
      primary: '#1976D2',
      secondary: '#26A69A',
      accent: '#9C27B0',
      dark: '#1D1D1D',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    },
    notify: {
      position: 'top-right',
      timeout: 2500,
      textColor: 'white'
    }
  },
  plugins: {
    Notify,
    Dialog,
    Loading
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
