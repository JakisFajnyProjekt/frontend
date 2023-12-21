<template>
  <NuxtLayout name="default">
    <div class="flex place-items-center justify-between">
<h1>restauracje</h1>
<!-- {{ store. loggedIn}} -->
<!-- {{ token ? true : false }} -->
{{ data }}
{{  test }}
{{ cookie.token }}
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import axios from "axios"
import {storeToRefs} from 'pinia'
import {useAuth} from "@/store/useAuth"
import { axiosInstance } from '@/utils/axios.config'
definePageMeta({
   middleware: "auth",
});
const store = useAuth()
// const {loggedIn, token} = storeToRefs(useAuth())
// const {token, resetToken } = useUser();
const data = null as any
let test = null as any
const cookie = useCookie('auth') as any
try{
    const res = await axiosInstance.get("/restaurants",{
      // headers:{
      //   Authorization: 'Bearer' + cookie.value.token,
      // }
    })
    data.value = res.data
} catch (error:any) {
  console.error("Błąd:", error.message);
  console.error("Status odpowiedzi:", error.response ? error.response.status : 'Brak informacji');
  console.error("Dane odpowiedzi:", error.response ? error.response.data : 'Brak informacji');
}

    // token.value = res.data.token;
</script>

<style scoped>

</style>