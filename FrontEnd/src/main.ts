import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
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
  faSeedling,
  faArrowUpRightFromSquare,
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons'
import App from '@/App.vue'

// import "@/index.css"
import '@/assets/tailwind.css'

import router from '@/router.js'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { BiInstagram, BiTwitter, BiYoutube, BiLinkedin, BiFacebook } from 'oh-vue-icons/icons'

addIcons(BiInstagram, BiTwitter, BiYoutube, BiLinkedin, BiFacebook)

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
library.add(faArrowUpRightFromSquare)
library.add(faCircleQuestion)

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
  .use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('v-icon', OhVueIcon)
  .mount('#app')
