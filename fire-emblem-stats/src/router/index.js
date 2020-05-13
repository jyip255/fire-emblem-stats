import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path:'/calculator/',
            name: 'Calculator',
            component: Calculator
        }
    ]
})