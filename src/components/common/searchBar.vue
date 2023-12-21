<script setup lang="ts">
import searchIcon from "~/assets/icons/search.svg";

const props = defineProps({
  modelValue: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emit("update:modelValue", inputValue);
};
</script>

<template>
  <div
    class="flex w-full items-center gap-0.5 rounded-full bg-inputBg px-3 py-2"
  >
    <img class="mr-2" :src="searchIcon" />
    <input
      class="flex-1 rounded border-none bg-transparent placeholder-placeholder outline-none"
      type="text"
      :value="props.modelValue"
      @input="(e: Event) => handleInput(e)"
      :placeholder="props.placeholder"
    />
  </div>
</template>
