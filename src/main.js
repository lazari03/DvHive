import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faComment as farComment} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import Home from './Home.vue'

library.add(farComment)

createApp(Home).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


