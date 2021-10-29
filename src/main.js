import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/es'
import vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel'
import ErrorComponent from './components/ErrorComponent.vue'
import Home from './components/Home.vue'
import Quienes from './components/Quienes.vue'
import Ofrecemos from './components/Ofrecemos.vue'
import Galeria from './components/Galeria.vue'
import Inscripciones from './components/Inscripciones.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vuelidate)
Vue.use(VueCarousel)

Vue.use((vueMoment), {
    moment
})
const routes = [
    { path: '/', component: Home },
    { path: '/inicio', component: Home },
    { path: '/quienes-somos', component: Quienes },
    { path: '/que-ofrecemos', component: Ofrecemos },
    { path: '/galeria', component: Galeria },
    { path: '/inscripciones', component: Inscripciones },
    { path: '*', component: ErrorComponent },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')