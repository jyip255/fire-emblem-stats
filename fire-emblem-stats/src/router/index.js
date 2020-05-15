import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import CharName from '@/components/CharName'
import Home from '@/components/Home'
import BindingBlade from '@/components/6-BindingBlade'

Vue.use(Router)

const Roy = {template: '<div>Roy</div'}
const Fir = {template: '<div>Roy</div'}

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
            component: BindingBlade,
            children: [
                {
                    path: 'Roy', name: 'Roy', component: Roy
                },
                {
                    path: 'Fir', name: 'Fir', component: Fir
                }
            ]
        },
        {
            path:'/calculator/',
            name: 'Calculator',
            component: Calculator,
            children: [
                {
                    path: ':id', component: CharName, props: true
                }
            ]
        },
    ]
})