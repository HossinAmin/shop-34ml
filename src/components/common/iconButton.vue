<script setup lang="ts">
defineProps(["icon", "text"]);
</script>

<template>
  <div class="flex gap-1 items-center">
    <img
      v-if="icon"
      class="md:min-w-6 min-w-5 aspect-square"
      :src="icon"
      :alt="text"
    />
    <p v-if="text" class="hidden md:inline-block">{{ text }}</p>
  </div>
</template>
