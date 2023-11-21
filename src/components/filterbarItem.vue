<script setup lang="ts">
import { PropType } from "vue";
import closeIcon from "~/assets/icons/close.svg";
import { Brand, Category } from "~/types/response";
import IconButton from "./common/iconButton.vue";

defineProps({
  item: {
    type: Object as PropType<Category | Brand>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-surface rounded flex justify-center items-center gap-2 p-2">
    <span>{{ item.title }}</span>

    <icon-button @click="$emit('remove')" :icon="closeIcon" />
  </div>
</template>
