import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'https://jfp.onrender.com/api';
const cookie = Cookies.get('auth') || null;

let axiosInstance: any;

if (cookie) {
    try {
        const parsedCookieValue = JSON.parse(cookie) as { token: string };
        const token = parsedCookieValue.token;
        axiosInstance = axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                Authorization: `Bearer ${token || ''}`,
            },
        });
    } catch (error) {
        console.error('Nie udało się sparsować ciasteczka jako JSON. Błąd:', error);
    }
} else {
    axiosInstance = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Access-Control-Allow-Headers': '*',
        },
    });
}

export { axiosInstance }; 