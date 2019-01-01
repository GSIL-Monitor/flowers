import Vue from 'vue'
// import App from './App.vue'
import Login from './Login.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './router/index'
import axios from 'axios'

import './plugins/element.js'

Vue.prototype.$http = axios;
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
    router: router,
    render: h => h(Login)
}).$mount('#app')