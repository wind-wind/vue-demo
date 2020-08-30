import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import toast from './components/common/toast'

import { mu } from './common/mu'
import { el } from './common/el'

mu(Vue)
el(Vue)

Vue.use(toast)

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})

// Vue.prototype.$event = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
