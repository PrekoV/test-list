import axios from 'axios'

const API = axios.create({
    baseURL: 'https://api.jqestate.ru/v1',
})



export default API