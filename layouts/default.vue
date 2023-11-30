<template>
    <div class="w-full">
        <NavHeader/>
            <div class="xl:max-w-[1150px] xl:px-0 lg:max-w-[1150px] lg:min-w-[700px] lg:shrink-1  mx-auto mt-[84px] family pb-[140px] px-4 flex">
            <slot/>
        </div>
        <NavBottom/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>