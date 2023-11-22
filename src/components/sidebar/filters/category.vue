<script setup lang="ts">
import { Category } from "~/types/response";
import FilterList from "./filterList.vue";

import useCategory from "~/composables/useCategory.ts";

const { categories, selectedCategories, fetchCategories } = useCategory();

const handelSelectCategory = (checked: boolean, category: Category) => {
  if (checked) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value = selectedCategories.value.filter(
      (item) => item.id !== category.id
    );
  }
};

fetchCategories();
</script>

<template>
  <FilterList
    title="Category"
    :list="categories?.data"
    @select="handelSelectCategory"
  />
</template>
