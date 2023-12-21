<script setup lang="ts">
defineProps({
  text: {
    type: String,
  },
  preIcon: {
    type: String,
  },
});
</script>

<template>
  <button
    class="flex items-center justify-center gap-2 rounded border border-primary bg-primary px-4 py-2 text-white"
  >
    <img
      v-if="preIcon"
      class="aspect-square w-6"
      :src="preIcon"
      alt="close-icon"
    />

    <span>
      {{ text }}
    </span>
  </button>
</template>
