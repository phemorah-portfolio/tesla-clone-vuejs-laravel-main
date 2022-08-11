import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import index from './index'
import vuetify from './vuetify';
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash, faCamera, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import coreState from './coreState'

library.add(faPen, faTrash, faCamera, faSignOutAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuelidate)
Vue.use(VueRouter)
require('./bootstrap');

window.Vue = require('vue').default;


function loggedIn() {
    axios.get('api/user').then(response => {
        if(response.status >= 200 && response.status < 300){
          return true
        }
      })
}

//   routes.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       // this route requires auth, check if logged in
//       // if not, redirect to login page.
//       if (!loggedIn()) {
//         next({
//           path: '/login',
//           query: { redirect: to.fullPath }
//         })
//       } else {
//         next()
//       }
//     } else if(to.matched.some(record => record.meta.guest)) {
//       if (loggedIn()) {
//         next({
//           path: '/admin/categories',
//           query: { redirect: to.fullPath }
//         })
//       } else {
//         next()
//       }
//     } else {
//       next() // make sure to always call next()!
//     }
//   })

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        index
    },
    vuetify,
    store: coreState
});
