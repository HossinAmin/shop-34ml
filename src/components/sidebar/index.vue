<script setup lang="ts">
import categoryFilter from "~/components/sidebar/filters/category.vue";
import brandFilter from "~/components/sidebar/filters/brand.vue";
</script>

<template>
  <div class="hidden md:flex flex-col gap-20">
    <h2 class="px-2 text-text font-bold text-xl">Dining Room Tables</h2>
    <div class="flex flex-col gap-6">
      <category-filter />
      <brand-filter />
    </div>
  </div>
</template>
