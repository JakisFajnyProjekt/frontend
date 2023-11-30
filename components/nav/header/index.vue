<template>
    <div>
<NavHeaderUser v-if="loggedIn"/>
<NavHeaderQuest v-else />
    </div>
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useAuth} from "@/store/useAuth"

const authState = useAuth()
const {loggedIn} = storeToRefs(authState)
</script>

<style scoped>

</style>