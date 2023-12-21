<template>
  <!-- TODO:zmienic napisy na modalach/alertach na lopkalizacje -->
  <ModalDown :modalActive="isOpenMobile" :height="500" title="Quiz" @close="isCloseMobile">
  </ModalDown>
    <ModalAlert
    :modalActive="isOpenDesktop"
    name="Premium"
    title="Brak dostępu"
    status="error"
    des="Ta część serwisu jest dostępna wyłącznie dla użytkowników z pakietem Premium. Wykup subskrypcję aby zyskać dostęp do tej sekcji"
    closeButton="Zamknij"
    @close="isAlert"
    actionButton="Zobacz pakiety"
    />
  <div class="w-full flex-col justify-center">
    <div class="xl:pt-7 xl:px-10 lg:px-6 lg:pt-6 px-4 sm:pt-4 pt-2 flex w-full justify-between family place-items-center">
      <NuxtLink to="/restauracje">
        <p class="text-[38px] font-semibold">LOGO</p>
      </NuxtLink>
      <div class="xl:w-[850px] md:w-full md:px-10 md:shrink-1 hidden md:flex">
        <InputBase
          name="search"
          placeholder="Znajdź restauracje w Twojej okolicy..."
          icon="fluent:search-32-regular"
        />
      </div>
      <div class="place-items-center gap-10 show-button shrink-0">
        <div class="flex place-items-center gap-[7px] cursor-pointer show-location" @click="isAlert()">
          <Icon
            name="solar:map-point-outline"
            class="mb-[4px]"
            size="21"
            color="#2BB069"
          />
          <p class="family text-[#2BB069] text-[17px]">{{ location }}</p>
        </div>
        <NuxtLink to="/konto" class="flex gap-3 place-items-center">
             <Icon name="ph:user" class="" size="25" />
          <p class="text-[18px]">Moje konto</p>
        </NuxtLink>
        <button @click="authState.logout">click</button>
      </div>
      <div class="place-items-center gap-5 show-icon">
        <NuxtLink to="/logowanie" class="w-full">
          <Icon name="solar:cart-large-minimalistic-linear" size="27" />
        </NuxtLink>
        <NuxtLink
          to="/konto"
          class="w-full bg-[#F0F0F1] border-transparent rounded-[99999px] h-full py-[11px] px-[13px]"
        >
          <Icon name="ph:user" class="" size="24" />
        </NuxtLink>
      </div>
    </div>
    <div class="md:mt-4  w-full flex shrink-0 px-4 md:px-6 xl:px-10 place-items-center gap-[4px] show-location-small"  @click="isModal()">
      <Icon name="solar:map-point-outline" class="mb-[3px]" size="18" color="#2BB069" />
      <p class="family text-[#2BB069] md:text-[17px] md:text-[15px]">{{ location }}</p>
    </div>
    <div class="w-full flex shrink-1 md:hidden lg:px-10 px-4 mt-[32px]">
      <InputBase
        name="search"
        placeholder="Znajdź restauracje w Twojej okolicy..."
        icon="fluent:search-32-regular"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { axiosInstance } from "@/utils/axios.config";
import {storeToRefs} from 'pinia'
import {useAuth} from "@/store/useAuth"
const location = ref("Warszawa, ul. Złota 44");
const isOpenMobile = ref(false);
const isOpenDesktop = ref(false)
const router = useRouter();


const authState = useAuth()



const isCloseMobile = () => {
  isOpenMobile.value = false;
};
const isModal = () => {
  if (window.screen.width <= 600) {
    isOpenMobile.value = true
  } else {
    isOpenDesktop.value = true
  }
};

const isAlert = () => {
    isOpenDesktop.value =! isOpenDesktop.value 
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .show-icon {
    display: flex;
  }
  .show-button {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .show-icon {
    display: none;
  }
  .show-button {
    display: flex;
  }
}

@media screen and (min-width: 1200px) {
  .show-location {
    display: flex;
  }
    .show-location-small {
    display: none;
  }
}
@media screen and (max-width: 1200px) {
  .show-location-small {
    display: flex;
  }
    .show-location {
    display: none;
  }
}
</style>
