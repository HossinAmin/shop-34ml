<script setup lang="ts">
defineProps({
  text: {
    type: String,
  },
});
</script>

<template>
  <button
    class="text-white px-4 py-2 rounded bg-primary border border-primary focus:outline-none focus:ring focus:border-primary"
  >
    {{ text }}
  </button>
</template>
