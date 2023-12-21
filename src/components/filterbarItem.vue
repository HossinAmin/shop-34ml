<script setup lang="ts">
import { Brand, Category } from "~/types/response";

import closeIcon from "~/assets/icons/close.svg";

import { PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<Category | Brand>,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center justify-center gap-2 rounded bg-surface p-2 text-xs"
  >
    <span class="whitespace-nowrap">{{ item.title }}</span>
    <img
      class="min-w-5 aspect-square cursor-pointer"
      @click="$emit('remove')"
      :src="closeIcon"
    />
  </div>
</template>
