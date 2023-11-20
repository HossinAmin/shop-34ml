<script setup lang="ts">
import FilterList from "./filterList.vue";

import useCategory from "~/composables/useCategory.ts";

const { categories, fetchCategories } = useCategory();

fetchCategories();
</script>

<template>
  <FilterList title="Category" :list="categories?.data" />
</template>
