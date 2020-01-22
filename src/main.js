import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBiohazard, faBrain, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faBiohazard)
library.add(faBrain)
library.add(faChartPie)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
