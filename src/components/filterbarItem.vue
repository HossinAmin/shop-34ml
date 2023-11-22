<script setup lang="ts">
import { PropType } from "vue";
import closeIcon from "~/assets/icons/close.svg";
import { Brand, Category } from "~/types/response";

defineProps({
  item: {
    type: Object as PropType<Category | Brand>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-surface rounded flex justify-center items-center gap-2 p-2">
    <span class="whitespace-nowrap">{{ item.title }}</span>
    <img
      class="min-w-5 aspect-square cursor-pointer"
      @click="$emit('remove')"
      :src="closeIcon"
    />
  </div>
</template>
