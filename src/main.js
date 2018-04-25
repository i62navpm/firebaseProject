import '@/assets/style/main.scss'
import '@/firebase'

import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuefire from 'vuefire'
import { sync } from 'vuex-router-sync'

import router from '@/router'
import store from '@/store'

import App from '@/components/App.vue'

sync(store, router)
Vue.use(Vuetify)
Vue.use(Vuefire)

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

if (process.env.NODE_ENV === 'development') window.vm = vm
Vue.config.productionTip = false
