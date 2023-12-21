<template>
  <div>
    <h2 class="mb-[34px]">Logowanie</h2>
    <Form @submit="loginUser" @click="clearError">
      <!-- <Field name="email"/>
      <Field name="password"/> -->
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

          <p class="family text-[14px] text-red-500">{{ loginError }}</p>
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
import  axios  from "axios"
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
const { isLoadingButton, errorValue} = storeToRefs(authState)

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

const loginIn = async (values: any) => {
  const data = {
    email: values.email,
    password: values.password,
  };
    try {

  // isLoadingButton.value = true;
console.log(data)

// const { data: count } = await useFetch("http://localhost:8080/api/auth/login", values)
    const res = (await axios.post("https://jfp.onrender.com/api/auth/login", data));
console.log(res)
//     // await new Promise((resolve) => setTimeout(resolve, 1000));
// console.log(values)
//     const res = (await axios.post("http://localhost:8080/api/auth/login", values)) as any;
//     // token.value = res.data.token;
//     console.log(res);
// // console.log(data)

//     router.push('/restauracje')
  } 
  catch (error: any) {
      console.error("Wystąpił błąd podczas logowania:", error);
  }
//   console.error("Odpowiedź z serwera:", error.response); // Dodaj
//     // console.log(error)
//   //   isLoadingButton.value = false;

//   //   if (error.response.data.errors.PASSWORD) {
//   //     errorPassword.value = true;
//   //     loginError.value = "Błędne hasło, spróbuj ponownie";
//   //   } else if (error.response.data.errors.EMAIL) {
//   //     errorEmail.value = true;
//   //     loginError.value = "Nie znaleziono użytkownika";
//   //   } else {
//   //     errorEmail.value = true;
//   //     errorPassword.value = true;
//   //     loginError.value = "Uzupełnij login i hasło";
//     }
  // } finally {
  //   isLoadingButton.value = false;
  // }
}

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
