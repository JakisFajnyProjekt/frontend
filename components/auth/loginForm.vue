<template>
    <div>
  <h2 class="mb-[34px]">Logowanie</h2>
      <Form @submit="updateCompany" :validation-schema="schemaCompany">
        <!-- v-slot="{ values, meta }" -->
        <InputBase
          name="name"
          placeholder="dwa"
          type="text"
          icon="solar:letter-linear"
          :hasError="false"
        />
        <div class="relative">
          <InputBase
            name="passwortd"
            :type="currentType"
            placeholder="dwa"
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
            <p class="family text-[14px] text-red-500">{{ loginError }}</p>
          </div>
          <button class="primary-button" type="submit" v-if="!isLoadingButton">
            Zaloguj się
          </button>
          <button class="primary-button" type="submit" v-else><loading-spinner /></button>
        </div>
      </Form>
      <div class="flex w-full justify-start family mt-5 gap-2">
        <p>Nie masz konta ?</p>
        <NuxtLink to="/" class="primary-color font-semibold">Zarejestruj się</NuxtLink>
      </div>
    </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { Form, Field, useForm } from "vee-validate";
const loginError = ref<any>("I chuj nie zalogowało się");
// const loginError = ref<any>(null);
const currentType = ref("password");
const isLoadingButton = ref(false);

const changePasswordType = () => {
  if (currentType.value == "password") {
    currentType.value = "text";
    return "password";
  } else if (currentType.value == "text") {
    currentType.value = "password";
  }
};
const updateCompany = (values: any) => {
  alert("Update Company" + values.name);
};
// const schemaCompany = yup.object().shape({
//   name: yup
//     .string()
//     .test("valid-name", "Nieprawidłowa nazwa działalności", (value) => {
//       if (!value) return true;
//       const nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-zA-ZĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9\s]*$/u;
//       return nameRegex.test(value);
//     })
//     .max(35, "Nazwa działalności nie może mieć więcej niż 35 znaków")
//     .required("Pole wymagane"),
// });
</script>

<style scoped>

</style>\