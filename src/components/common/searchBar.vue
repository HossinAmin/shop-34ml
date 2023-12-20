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
    class="w-full flex items-center bg-inputBg px-3 py-2 gap-0.5 rounded-full"
  >
    <img class="mr-2" :src="searchIcon" />
    <input
      class="flex-1 bg-transparent border-none outline-none rounded placeholder-placeholder"
      type="text"
      :value="props.modelValue"
      @input="(e:Event) => handleInput(e)"
      :placeholder="props.placeholder"
    />
  </div>
</template>
