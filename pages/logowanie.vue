<template>
  <NuxtLayout name="default">
    <div class="flex place-items-center justify-between">
      <div class="w-[345px]">
        <AuthLoginForm/>
      </div> 
      <div class="">
        <img src="../assets/file/Auth_hero.png" class="h-[500px]"/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "user",
});
</script>

<style scoped></style>
