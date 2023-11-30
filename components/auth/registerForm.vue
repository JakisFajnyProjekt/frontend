<template>
  <div>
    <h2 class="mb-[34px]">Rejestracja</h2>
    <Form
      @submit="RegisterUser"
      :validation-schema="schemaUser"
      v-slot="{ errors }"
      @click="clearError"
    >
      <InputBase
        name="first_name"
        placeholder="Imię"
        type="text"
        icon="solar:user-outline"
      />
      <InputBase
        name="last_name"
        placeholder="Nazwisko"
        type="text"
        icon="solar:user-outline"
        class="mt-[12px]"
      />
      <InputBase
        name="email"
        placeholder="E-mail"
        :error="errorEmail"
        type="text"
        icon="solar:letter-linear"
        class="mt-[12px]"
      />
      <div class="relative">
        <InputBase
          name="password"
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
          name="password_confirmation"
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
      <div class="mt-4">
        <label for="acceptTerms" class="form-control custom-checkbox">
          <Field name="acceptTerms" type="checkbox" id="acceptTerms" :value="true" />
          <span class="custom-checkbox"></span>
          <span class="custom-checkbox-label"
            >Akceptuję regulamin i politykę prywatności</span
          >
        </label>
        <p class="text-red-500 text-[13px] bg-white mt-1">{{ errors.acceptTerms }}</p>
      </div>

      <div class="pt-[16px]">
        <p class="family text-[14px] text-red-500 mb-5">{{ registerError }}</p>
        <button class="primary-button" type="submit" v-if="!isLoadingButton">
          Zarejestruj się
        </button>
        <button class="primary-button-loading" type="submit" v-else>
          <loading-spinner />
        </button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { Form, Field, useForm } from "vee-validate";
const registerError = ref<any>(null) as any;
const currentType1 = ref("password");
const router = useRouter()
const currentType2 = ref("password");
const token = useCookie("token") as any;
const errorEmail = ref(null) as any;
const isLoadingButton = ref(false);

const changePasswordType = (inputNumber: number) => {
  if (inputNumber === 1) {
    currentType1.value = currentType1.value === "password" ? "text" : "password";
  } else if (inputNumber === 2) {
    currentType2.value = currentType2.value === "password" ? "text" : "password";
  }
};

const RegisterUser = async (values: any) => {
  const data = {
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    password: values.password,
  };
  isLoadingButton.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = (await axiosInstance.post("/auth/register", data)) as any;
    token.value = res.data.token
    router.push('/restauracje')
  } catch (error: any) {
    isLoadingButton.value = false;
    errorEmail.value = true;
    registerError.value = "Podany adres e-mail już istnieje";
  } finally {
    isLoadingButton.value = false;
  }
};
const clearError = () => {
  registerError.value = null;
  errorEmail.value = null;
};
const schemaUser = yup.object().shape({
  acceptTerms: yup.bool().required("Zgoda jest wymagana"),
  first_name: yup
    .string()
    .test("valid-name", "Nieprawidłowe imię", (value: any) => {
      if (!value) return true;
      const nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\s]*$/u;
      return nameRegex.test(value);
    })
    .max(20, "Imię nie może mieć więcej niż 20 znaków")
    .required("Uzupełnij swoję imię"),
  last_name: yup
    .string()
    .test("valid-name", "Nieprawidłowe nazwisko", (value: any) => {
      if (!value) return true;
      const nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\s]*$/u;
      return nameRegex.test(value);
    })
    .max(20, "Nazwisko nie może mieć więcej niż 20 znaków")
    .required("Uzupełnij swoję nazwisko"),
  email: yup
    .string()
    .test("valid-email", "Nieprawidłowy adres e-mail", (value) => {
      if (!value || value === "") return true;
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(value);
    })
    .required("Uzupełnij adres e-mail"),
  password: yup
    .string()
    .min(6, "Hasło musi mieć przynajmniej 6 znaków")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
      "Hasło musi zawierać przynajmniej jedną dużą literę i jeden znak specjalny"
    )
    .required("Uzupełnij hasło"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą być takie same") // Dodaj walidację na potwierdzenie hasła
    .required("Potwierdź hasło"),
});
</script>

<style scoped></style>
