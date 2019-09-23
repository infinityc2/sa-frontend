import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Register from './components/Register'
import Customer from './components/customer/Dashboard'
import Request from './components/customer/Request'
import Evaluation from './components/customer/Evaluation'
import CancelInvoice from './components/customer/CancelInvoice'
import Employee from './components/employee/Dashboard'
import Payment from './components/employee/Payment'
import Admin from './components/admin/Dashboard'
import AddEmployee from './components/admin/AddEmployee'

Vue.use(Router)

let router = new Router({
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
            component: Customer,
            children: [
                {
                    path: '',
                    redirect: 'request'
                },
                {
                    path: 'request',
                    component: Request
                },
                {
                    path: 'evaluation',
                    component: Evaluation
                },
                {
                    path: 'cancel',
                    component: CancelInvoice
                }
            ],
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/employee/:user',
            component: Employee,
            children: [
                {
                    path: '',
                    redirect: 'payment'
                },
                {
                    path: 'payment',
                    component: Payment
                }
            ],
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/admin/:user',
            component: Admin,
            children: [
                {
                    path: '',
                    redirect: 'addemployee'
                },
                {
                    path: 'addemployee',
                    component: AddEmployee
                }
            ],
            // meta: {
            //     requiresAuth: true
            // }
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.params.user && from.meta.requireAuth) {
//         next()
//     } else {
//         next('/login')
//     }
// })

export default router