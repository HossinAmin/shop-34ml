<script setup lang="ts">
const linkButtons = [
  "Grocery",
  "Electronics",
  "Clothing",
  "Furniture",
  "Toys & Video games",
  "Baby",
  "Beauty",
  "Personal Car",
  "Pets",
  "Sports",
  "Stationery",
  "Brands",
];
</script>

<template>
  <div
    class="w-full flex justify-center gap-10 bg-surface border-b-subtitle border-b-[1px] py-3"
  >
    <div v-for="button in linkButtons" class="font-bold">
      {{ button }}
    </div>
  </div>
</template>
