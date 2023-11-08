import axios from 'axios'

const API_URL = 'http://localhost:8080/api';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        // "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Credentials': 'true',
        Accept: "application/json",
        credentials: false,
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,

    }
})
