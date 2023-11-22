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
    class="flex justify-center items-center gap-2 text-white px-4 py-2 rounded bg-primary border border-primary"
  >
    <img
      v-if="preIcon"
      class="w-6 aspect-square"
      :src="preIcon"
      alt="close-icon"
    />

    <span>
      {{ text }}
    </span>
  </button>
</template>
