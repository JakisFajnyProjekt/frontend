import axios from 'axios'
import Cookies from 'js-cookie';
const API_URL = 'http://localhost:8080/api';
// const API_URL = 'http://16.170.229.196/api'
export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
         Authorization: `Bearer ${Cookies.get('token') || ''}`,

    }
})