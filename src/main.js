import './assets/main.css'

import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import App from '@/App.vue'

// import "@/index.css"
import '@/assets/tailwind.css'

import router from '@/router.js'

library.add(faSearch)

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: (h) => h(App)
// }).$mount('#app')

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
