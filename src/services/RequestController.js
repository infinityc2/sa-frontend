import axios from 'axios'

// END POINT
// 'https://repair-invoice-system-api.herokuapp.com'
// 'http://localhost:9000'
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
    findRequestByCustomer: (data) => instance.get('customer/' + data.id, {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    findRequestAll: () => instance.get('request/menu', {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    findRequestById: (data) => instance.get('request/' + data.id, {
        transformResponse: (response) => {
            return JSON.parse(response)
        }
    }),

    addRequest: (data) => instance.post('request/repair/' + data.tools, {
        brand: data.brand,
        type: data.type,
        email: data.email,
        phone: data.phone,
        symptom: data.symptom,
        customer: data.customer,
        sentDate: data.sentDate
    })
}