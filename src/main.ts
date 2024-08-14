import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faAngleDown,
  faAngleUp,
  faLocationDot,
  faBuilding,
  faBriefcaseMedical,
  faCheck,
  faClock,
  faMoneyBills,
  faHandHoldingHand,
  faSeedling
} from '@fortawesome/free-solid-svg-icons'
import App from '@/App.vue'

// import "@/index.css"
import '@/assets/tailwind.css'

import router from '@/router.js'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

library.add(faSearch)
library.add(faAngleUp)
library.add(faAngleDown)
library.add(faLocationDot)
library.add(faBuilding)
library.add(faBriefcaseMedical)
library.add(faCheck)
library.add(faClock)
library.add(faMoneyBills)
library.add(faHandHoldingHand)
library.add(faSeedling)

const pinia = createPinia()
// new Vue({
//   router,
//   store,
//   vuetify,
//   render: (h) => h(App)
// }).$mount('#app')

createApp(App)
  .use(pinia)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
