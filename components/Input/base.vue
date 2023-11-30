<template>
  <div class="relative flex flex-col w-full">
    <div
      class="absolute h-[45px]"
      :class="{ 'test-active': errorMessage ? true : false }"
      :style="{ borderColor: color }"
    >
      <Icon
        :name="props.icon"
        size="24"
        class="mt-[10px] mx-auto flex w-full ml-[12px]"
        :color="isError(errorMessage ? false : true, color)"
      />
    </div>
    <input
      v-on="handlers"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :label="label"
      class="base-input"
      :style="{ 'border-color': color }"
      @focus="inputFocus"
      @blur="inputBlur"
    />
    <p v-if="props.hasError" class="text-red-500 text-[13px] bg-white mt-1">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { modes } from "@/utils/interactionModes";
const color = ref("#9B9B9B") as any;

// const hasError = ref(false);
const inputFocus = () => {
  color.value = "#2BB069";
};

const inputBlur = () => {
  color.value = "#9B9B9B";
};

const props = defineProps({
  name: {
    type: String,
  },
  error: {
    type: Boolean || null,
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
  hasError: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
  },
  mode: {
    type: String,
    default: "aggressive",
  },
});

const { meta, value, errorMessage, handleChange, handleBlur } = useField(
  props.name as any,
  null as any,
  {
    validateOnValueUpdate: false,
  }
);
const handlers = computed(() => {
  const on: Record<string, any> = {
    blur: handleBlur,
    input: [(e: any) => handleChange(e, false)],
  };

  const triggers = modes[props.mode]({
    errorMessage,
    meta,
  });

  triggers.forEach((t: any) => {
    if (Array.isArray(on[t])) {
      on[t].push(handleChange);
    } else {
      on[t] = handleChange;
    }
  });

  return on;
});
watch(props as any, (newValue) => {
  if (newValue.error == true) {
    color.value = "#ef4444";
  } else {
    color.value = "#9B9B9B";
  }
});
</script>

<style scoped>
.test-active {
  border-right: 1px solid red !important;
}
</style>
