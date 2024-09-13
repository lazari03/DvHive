import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment as farComment } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import router from './router.js'
import Alpine from 'alpinejs'
import App from './App.vue'

window.Alpine = Alpine
Alpine.start()

library.add(farComment, faPhone, farEnvelope, faLocationDot)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
