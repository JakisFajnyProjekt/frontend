<template>
  <NavHeader />
  <div class="w-[1500px]  mx-auto mb-[170px]">
    {{ counter }}
    <div class="w-full flex justify-between mt-[84px] place-items-center">
      <div class="border-l-[7px] border-[#2BB069] pl-[38px] h-[430px] pt-7">
        <h1>Twoje ulubione restauracje</h1>
        <p class="text-[33px] font-semibold mb-2 family">na wyciągnięcie ręki</p>
        <p class="text-[#9D9D9D] family mt-[16px] font-light leading-[26px]">
          Dzięki naszej aplikacji, możesz wybierać spośród <br />ulubionych dań z
          lokalnych restauracji i cieszyć się<br />
          nimi w zaciszu własnego mieszkania
        </p>
        <div class="flex gap-3 mt-[24px]">
          <div class="w-[300px]">
            <InputBase
              name="e-mail"
              placeholder="Twoja lokalizacja..."
              type="text"
              icon="solar:map-point-outline"
              class="w-[200px]"
            />
          </div>
          <div class="w-[110px]">
            <button class="primary-button">Szukaj</button>
          </div>
        </div>
      </div>
      <img src="../assets/file/Hero_desktop.png" class="h-[500px]" />
    </div>
    <div class="flex justify-between mt-[220px] gap-[124px]">
      <div class="w-[440px] shrink-0">
        <h2>Szybka dostawa prosto do Twoich drzwi</h2>
        <p class="text-[#9D9D9D] family mt-[16px] font-light leading-[26px]">
       Zamawiaj swoje ulubione dania w kilku kliknięciach z <br>dostawą do domu. Priorytetem jest dla nas <br>zapewnienie ci szybkiej dostawy z wybranej przez <br>Ciebie restauracji
        </p>
         <div class="w-[190px] mt-6 shrink-1">
            <button class="primary-button">Przeczytaj więcej</button>
          </div>
      </div>
      <div class="bg-slate-200 h-[300px] rounded-xl w-full">
        <!-- sasa -->

      </div>
    </div>
        <div class="flex flex-col  mt-[220px]  w-full">
      <!-- <div class="w-[440px] shrink-0 te"> -->
        <h2 class="text-center">Światowe marki <br>w jednym miejscu</h2>
      <!-- </div> -->
      <div class="grid grid-cols-3 grid-rows-2 gap-[32px] mx-10 mt-[42px]">
        <div class="bg-slate-200 h-[230px] rounded-xl w-full">
          <!-- sasa -->
        </div>
          <div class="bg-slate-200 h-[230px] rounded-xl w-full">
          <!-- sasa -->
        </div>  <div class="bg-slate-200 h-[230px] rounded-xl w-full">
          <!-- sasa -->
        </div>  <div class="bg-slate-200 h-[230px] rounded-xl w-full">
          <!-- sasa -->
        </div>  <div class="bg-slate-200 h-[230px] rounded-xl w-full">
          <!-- sasa -->
        </div>  <div class="bg-slate-200 h-[230px] rounded-xl w-full">
          <!-- sasa -->
        </div>
      </div>
    </div>
  </div>
  <NavBottom />
</template>

<script setup lang="ts">
const counter = useCookie('counter') as any
</script>

<style scoped></style>
