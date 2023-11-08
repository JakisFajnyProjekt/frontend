<template>
  <div class="mx-10 my-7 flex justify-between family">
    <NuxtLink to="/">
      <p class="text-[38px] font-semibold">LOGO</p>
    </NuxtLink>
    <div class="flex place-items-center gap-7">
      <NuxtLink to="/logowanie">
          <p class="text-[18px]">Logowanie</p>
      </NuxtLink>
      <NuxtLink to="/rejestracja" class=" w-[154px]">
            <button class="primary-button">
                <p class="text-[18px]">Rejestracja</p>
            </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
// const test = router.currentRoute.value.name;
</script>

<style scoped>
.active {
  color: #2bb069;
}
</style>
