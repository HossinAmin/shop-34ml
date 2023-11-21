<script setup lang="ts">
defineProps(["icon", "text"]);
</script>

<template>
  <div class="flex gap-1 items-center">
    <img class="lg:w-6 w-5 object-fill aspect-square" :src="icon" :alt="text" />
    <p class="hidden md:inline-block">{{ text }}</p>
  </div>
</template>
