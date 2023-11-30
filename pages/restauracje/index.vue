<template>
  <NuxtLayout name="default">
    <div class="flex place-items-center justify-between">
<h1>restauracje</h1>
<!-- {{ token ? true : false }} -->
{{ res  }}
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { axiosInstance } from '@/utils/axios.config'
definePageMeta({
   middleware: "auth",
});

// const {token, resetToken } = useUser();
try{
    const res = (await axiosInstance.get("/restaurants")) as any;
} catch(e) {
    console.error(e)
}
    // token.value = res.data.token;
</script>

<style scoped>

</style>