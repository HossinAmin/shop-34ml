<script setup lang="ts">
defineProps(["icon", "text"]);
</script>

<template>
  <div class="flex gap-1 items-center">
    <img class="w-6 aspect-square" :src="icon" :alt="text" />
    <p>{{ text }}</p>
  </div>
</template>
