import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBiohazard,
  faBrain,
  faChartPie,
  faAddressCard,
  faBriefcase,
  faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ScrollView from 'vue-scrollview'

library.add(faBiohazard)
library.add(faBrain)
library.add(faChartPie)
library.add(faAddressCard)
library.add(faBriefcase)
library.add(faArrowCircleUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(ScrollView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
