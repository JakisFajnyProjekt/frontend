
import Cookies from 'js-cookie';
import { useAuth } from "@/store/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const isAuth = Cookies.get('auth')
    const authState = useAuth()
    if (!isAuth) {
        Cookies.set('auth', 'false')
    
    }

    // if (authState.loggedIn && !token) {
    //     setTimeout(() => {
    //         authState.logout()
    //     }, 100)
    // }
});

