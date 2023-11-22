<script setup lang="ts">
import categoryFilter from "~/components/sidebar/filters/category.vue";
import brandFilter from "~/components/sidebar/filters/brand.vue";
</script>

<template>
  <div class="hidden lg:flex flex-col gap-16">
    <h2 class="px-2 text-text font-bold text-xl whitespace-nowrap">
      Dining Room Tables
    </h2>
    <div class="flex flex-col gap-6">
      <category-filter />
      <brand-filter />
    </div>
  </div>
</template>
