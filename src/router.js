import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Dashboard from './components/customer/Dashboard'
import Invoice from './components/customer/Invoice'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/customer',
            component: Dashboard,
            children: [
                {
                    path: '',
                    redirect: 'invoice'
                },
                {
                    path: 'invoice',
                    component: Invoice
                }
            ]
        }
    ]
})