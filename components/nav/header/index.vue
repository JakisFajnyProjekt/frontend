<template>
    <div>
<NavHeaderUser v-if="token"/>
<NavHeaderQuest v-else />
    </div>
</template>

<script setup lang="ts">
const token = useCookie('token') as any
</script>

<style scoped>

</style>