import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import Home from '@/components/Home'
import BindingBlade from '@/components/6-BindingBlade'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path: '/6-BindingBlade',
            name: 'BindingBlade',
            component: BindingBlade
        },
        {
            path:'/calculator/',
            name: 'Calculator',
            component: Calculator
        },
    ]
})