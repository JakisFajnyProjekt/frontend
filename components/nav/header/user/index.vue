<template>
  <div>
    user
    {{ token }}
    <p @click="logout">logout</p>
  </div>
</template>

<script setup lang="ts">
const token = useCookie("token") as any;

import { axiosInstance } from "@/utils/axios.config";

const router = useRouter();
const logout = async () => {
  await axiosInstance.get("/auth/logout");
  token.value = null;

  router.push("/logowanie");
};
</script>

<style scoped></style>
