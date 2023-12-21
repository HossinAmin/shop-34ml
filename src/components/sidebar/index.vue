<script setup lang="ts">
import categoryFilter from "~/components/sidebar/filters/category.vue";
import brandFilter from "~/components/sidebar/filters/brand.vue";
</script>

<template>
  <div class="hidden flex-col gap-16 lg:flex">
    <h2 class="whitespace-nowrap px-2 text-xl font-bold text-text">
      Dining Room Tables
    </h2>
    <div class="flex flex-col gap-6">
      <category-filter />
      <brand-filter />
    </div>
  </div>
</template>
