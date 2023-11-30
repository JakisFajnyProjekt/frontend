import Cookies from 'js-cookie';
import { storeToRefs } from "pinia";
import { useAuth } from "@/store/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = Cookies.get('token')
    const authState = useAuth()
    const { loggedIn } = storeToRefs(authState)
    if (!loggedIn.value) {
        return navigateTo('/')
    }
    if (loggedIn.value && token ? false : true) {
        setTimeout(() => {  
            authState.logout()
        }, 100)
    }


})
