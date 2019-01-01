import User from './../components/user.vue'
import Home from './../components/home.vue'
import VueRouter from 'vue-router'

const routes = new Router({
    routes: [{
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/',
            component: Home,
            children: {

            }
        }
    ]
})

export default routes