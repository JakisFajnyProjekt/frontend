<template>
    <div>
<button class="primary-button">
test
</button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

const props = defineProps({
  name: {
    type: String,
  },
    type: {
    type: String,
  },
  icon: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  mode: {
    type: String,
    default: "aggressive",
  },
});

const navigate = ()=>{
    router.push('/')
}
</script>

<style scoped>

</style>