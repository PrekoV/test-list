import axios from 'axios'

const API = axios.create({
    baseURL: 'http://api.jqestate.ru/v1/properties/country/',
})



export default API