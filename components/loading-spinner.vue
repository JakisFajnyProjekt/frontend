<template>
  <div class="flex justify-center">
    <div 
    class="loader w-20 h-20" 
    :style="{fontSize: props.border + 'px', width: props.width + 'px', height: props.height + 'px'}"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
width: {
    type: Number,
    required: false,
     default: 26,
  },
  height: {
    type: Number,
    required: false,
     default: 26,
  },
  border:{
type: Number,
    required: false,
    default: 3,
  }
})
</script>

<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
}
.loader {
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>