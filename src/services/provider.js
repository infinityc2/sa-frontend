import axios from 'axios'

const SERVER_URL = 'http://localhost:9000'

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000
})

export default {
    getTool: () => instance.get('tool/name', {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    getToolType: () => instance.get('tool/type', {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    getBrand: () => instance.get('computer/brand', {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    getComputerType: () => instance.get('computer/type', {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    loginCustomer: (data) => instance.post('customer/login', {
        email: data.email,
        password: data.password
    }),

    // incomplete
    register: (data) => instance.post('customer/register', {
        email: data.email,
        password: data.password,
        phone: data.phone
    }),

    // incomplete
    findInvoiceByCustomer: (data) => instance.get('invoice/' + data.email, {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    findInvoiceAll: () => instance.get('invoice/menu', {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    findInvoiceById: (data) => instance.get('invoice/' + data.id, {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    postInvoice: (data) => instance.post('invoice/repair/' + data.tools, {
        brand: data.brand,
        type: data.type,
        email: data.email,
        phone: data.phone,
        symptom: data.symptom,
        customer: data.customer,
        sentDate: data.sentDate
    })
}