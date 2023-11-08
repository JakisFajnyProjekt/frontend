<template>
  <div>
    <h2 class="mb-[34px]">Rejestracja</h2>
    <Form @submit="updateCompany" :validation-schema="schemaCompany">
      <!-- v-slot="{ values, meta }" -->
      <InputBase
        name="name"
        placeholder="Imię i nazwisko"
        type="text"
        icon="solar:user-outline"
      />
      <InputBase
        name="e-mail"
        placeholder="E-mail"
        type="text"
        icon="solar:letter-linear"
        class="mt-[12px]"
      />
      <div class="relative">
        <InputBase
          name="passwortd"
          :type="currentType1"
          placeholder="Hasło"
          icon="solar:key-minimalistic-linear"
          class="mt-[12px]"
        />
        <p
          @click="changePasswordType(1)"
          class="absolute right-[21px] top-[13px] cursor-pointer"
        >
          <Icon
            class=" "
            v-if="currentType1 == 'password'"
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
      <div class="relative">
        <InputBase
          name="passwortdwsd"
          :type="currentType2"
          placeholder="Powtórz hasło"
          icon="solar:key-minimalistic-linear"
          class="mt-[12px]"
        />
        <p
          @click="changePasswordType(2)"
          class="absolute right-[21px] top-[13px] cursor-pointer"
        >
          <Icon
            class=" "
            v-if="currentType2 == 'password'"
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
      <div class="flex w-full ">
        <p to="/" class="text-[14px] family mt-[24px]"
          >Akceptuję politykę prywatności</p
        >
      </div>
      <div class="relative pt-[16px]">
        <button class="primary-button" type="submit" v-if="!isLoadingButton">Zarejestruj się</button>
        <button class="primary-button" type="submit" v-else><loading-spinner /></button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { Form, Field, useForm } from "vee-validate";
const loginError = ref<any>("I chuj nie zalogowało się");
// const loginError = ref<any>(null);
const currentType1 = ref("password");
const currentType2 = ref("password");
const isLoadingButton = ref(false);

const changePasswordType = (inputNumber: number) => {
  if (inputNumber === 1) {
    currentType1.value = currentType1.value === "password" ? "text" : "password";
  } else if (inputNumber === 2) {
    currentType2.value = currentType2.value === "password" ? "text" : "password";
  }
};

const updateCompany = (values: any) => {
  alert("Update Company" + values.name);
};
const schemaCompany = yup.object().shape({
  name: yup
    .string()
    .test("valid-name", "Nieprawidłowa nazwa działalności", (value) => {
      if (!value) return true;
      const nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-zA-ZĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9\s]*$/u;
      return nameRegex.test(value);
    })
    .max(35, "Nazwa działalności nie może mieć więcej niż 35 znaków")
    .required("Pole wymagane"),
});
</script>

<style scoped></style>

