<template>
    <div>
        <!-- {{ loggedIn }}
        {{ token }} -->
        {{  cookie.loggedIn  }}
        {{ cookie }}
       {{  useAuth.loggedIn }}
<NavHeaderUser v-if="cookie ? true : false"/>
<NavHeaderQuest v-else />
    </div>
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useAuth} from "@/store/useAuth"

const cookie = useCookie('auth')
// test.val
// const authState = useAuth()
// const {loggedIn, token} = storeToRefs(authState)
// const isLoggedIn = authState.loggedIn;
// const userToken = authState.token;
</script>

<style scoped>

</style>