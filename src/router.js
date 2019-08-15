import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/customer/Dashboard'
import Invoice from './components/customer/Invoice'
import Evaluation from './components/customer/Evaluation'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            path: '/register',
            component: Register
        },
        {
            path: '/customer/:user',
            component: Dashboard,
            children: [
                {
                    path: '',
                    redirect: 'invoice'
                },
                {
                    path: 'invoice',
                    component: Invoice
                },
                {
                    path: 'evaluation',
                    component: Evaluation
                }
            ]
        }
    ]
})