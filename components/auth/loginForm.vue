<template>
  <div>
    <h2 class="mb-[34px]">Logowanie</h2>
    <Form @submit="loginUser" @click="clearError">
      <InputBase
      name="email"
      :error="errorValue?.includes('e-mail')"
        placeholder="E-mail"
        type="text"
        icon="solar:letter-linear"
        :hasError="false"
      />
      <div class="relative">
        <InputBase
        name="password"
        :error="errorValue?.includes('hasło')"
          :type="currentType"
          placeholder="Hasło"
          :hasError="false"
          icon="solar:key-minimalistic-linear"
          class="mt-[21px]"
        />
        <p
          @click="changePasswordType()"
          class="absolute right-[21px] top-[13px] cursor-pointer"
        >
          <Icon
            class=" "
            v-if="currentType == 'password'"
            name="solar:eye-linear"
            size="25"
            color="#CCCCCC"
          />
          <Icon
            class="mt-[2px]"
            v-else
            name="solar:eye-closed-linear"
            size="25"
            color="#CCCCCC"
          />
        </p>
      </div>
      <div class="flex w-full justify-end">
        <NuxtLink to="/" class="text-[13px] text-[#878787] family mt-[10px]"
          >Nie pamiętam hasła</NuxtLink
        >
      </div>
      <div class="relative pt-[48px]">
        <div class="absolute top-1.5">
          <p class="family text-[14px] text-red-500">{{ errorValue}}</p>

          <!-- <p class="family text-[14px] text-red-500">{{ loginError }}</p> -->
        </div>
        <button class="primary-button" type="submit" v-if="!isLoadingButton">
          Zaloguj się
        </button>
        <button class="primary-button-loading" type="submit" v-else>
          <loading-spinner />
        </button>
      </div>
    </Form>
    <div class="flex w-full justify-start family mt-5 gap-2">
      <p>Nie masz konta ?</p>
      <NuxtLink to="/rejestracja" class="primary-color font-semibold"
        >Zarejestruj się</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, useForm } from "vee-validate"
import { axiosInstance } from "@/utils/axios.config"
import {storeToRefs} from 'pinia'
import {useAuth} from "@/store/useAuth"
const loginError = ref<any>(null)
const currentType = ref("password")
import Cookies from 'js-cookie';
const test = Cookies.get('token')
// const isLoadingButton = ref(false)
const router = useRouter()
// const token = useCookie("token") as any
const errorEmail = ref(null) as any
const errorPassword = ref(null) as any

const authState = useAuth()
const { isLoadingButton, errorValue, token, loggedIn} = storeToRefs(authState)

const changePasswordType = () => {
  if (currentType.value == "password") {
    currentType.value = "text";
    return "password";
  } else if (currentType.value == "text") {
    currentType.value = "password";
  }
};


const loginUser = async(values:any)=>{
  await authState.login(values.email, values.password)
}

// const loginIn = async (values: any) => {
//   const data = {
//     email: values.email,
//     password: values.password,
//   };

//   isLoadingButton.value = true;

//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     const res = (await axiosInstance.post("/auth/login", data)) as any;
//     token.value = res.data.token;
//     router.push('/restauracje')
//   } 
//   catch (error: any) {
//     isLoadingButton.value = false;

//     if (error.response.data.errors.PASSWORD) {
//       errorPassword.value = true;
//       loginError.value = "Błędne hasło, spróbuj ponownie";
//     } else if (error.response.data.errors.EMAIL) {
//       errorEmail.value = true;
//       loginError.value = "Nie znaleziono użytkownika";
//     } else {
//       errorEmail.value = true;
//       errorPassword.value = true;
//       loginError.value = "Uzupełnij login i hasło";
//     }
//   } finally {
//     isLoadingButton.value = false;
//   }
// };

const clearError = () => {
  setTimeout(()=>{
  errorValue.value = null;
  },500)
  // loginError.value = null;
  // errorPassword.value = null;
  // errorEmail.value = null;
};
</script>

<style scoped></style>
