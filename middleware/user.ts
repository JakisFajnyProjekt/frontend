import { storeToRefs } from "pinia";
import { useAuth } from "@/store/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authState = useAuth()
    const { loggedIn } = storeToRefs(authState)
    if (loggedIn.value) {
        return navigateTo('/restauracje')
    }

})
