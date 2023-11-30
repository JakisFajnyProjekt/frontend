<template>
  <NuxtLayout name="default">
    <div class="flex place-items-center justify-between">
<h1>moje konto</h1>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

definePageMeta({
   middleware: "auth",
});

</script>

<style scoped></style>
