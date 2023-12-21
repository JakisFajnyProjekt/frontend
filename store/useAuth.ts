import { defineStore } from 'pinia'
import { axiosInstance } from '@/utils/axios.config'
import Cookies from 'js-cookie';
export const useAuth = defineStore('auth', {

    state: () => ({
        loggedIn: false as boolean,
        token: null as any,
        isLoadingButton: false as boolean,
        errorValue: null as string | null,
    }),

    persist: true,
    // getters: {
    //     loggedIn: () => Cookies.get('token') ? true : false,
    //     token: () => Cookies.get('token') as any,
    // },

    actions: {
        async login(email: string, password: string) {
            try {
                console.log('test');
                this.isLoadingButton = true;
                await new Promise((resolve) => setTimeout(resolve, 600));
                const res = await axiosInstance.post("/auth/login", { email, password });
                // Cookies.set('token', res.data.token);
                // ...
                this.token = res.data.token
                this.loggedIn = true
                // Cookies.set('token', this.token)
                window?.location?.replace("/restauracje");
            } catch (error: any) {
                console.log(error);
                // ...
            } finally {
                this.isLoadingButton = false;
            }
        },

        // async login1(email: string, password: string) {
        //     try {
        //         console.log('test')
        //         this.isLoadingButton = true
        //         await new Promise((resolve) => setTimeout(resolve, 600));
        //         const res = await axiosInstance.post("/auth/login", { email, password })
        //         // this.token = res.data.token
        //         // this.loggedIn = true
        //         // Cookies.set('token', this.token)
        //         // useRouter().push('/restauracje')
        //         window?.location?.replace("/restauracje");
        //     }
        //     catch (error: any) {
        //  console.log(error)    
        //         this.isLoadingButton = false;
        //         if (error.response.data.errors.PASSWORD) {
        //             this.errorValue = "Błędne hasło, spróbuj ponownie";
        //         } else if (error.response.data.errors.EMAIL) {
        //             this.errorValue = "Użytkownik o tym adresie e-mail nie istnieje";
        //         } else {
        //             this.errorValue = "Błędny adres e-mail lub  hasło";
        //         }
        //     }
        //     finally {
        //         this.isLoadingButton = false
        //     }
        // },
        async register(){

        },
        logout() {
            // this.loggedIn = false
            // Cookies.remove('token')
            // this.token = null;
            window?.location?.replace("/");
            // useRouter().push('/')
        }
    }
})

// W Pinii, wartości są odczytywane tylko przy pierwszym utworzeniu sklepu i 
// nie są automatycznie aktualizowane, gdy dane zewnętrzne(takie jak Cookies) 
// się zmieniają.Aby rozwiązać ten problem, możesz użyć gettera, który będzie 
// dynamicznie odczytywał wartość Cookies.get('token') za każdym razem,
// gdy loggedIn lub token zostanie odczytane. Wtedy usuwamy token oraz loggedIn 
// ze state i dajemy je do getters, przypisując domyslą wartośc z cookie