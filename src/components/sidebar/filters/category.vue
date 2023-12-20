<script setup lang="ts">
import { Category } from "~/types/response";
import FilterList from "./filterList.vue";

import useCategory from "~/composables/useCategory.ts";
import { useSelectedCategoriesStore } from "~/store/useSelectedCategoriesStore";

const { categories, fetchCategories } = useCategory();
const selectedCategoriesStore = useSelectedCategoriesStore();

const handelSelectCategory = (checked: boolean, category: Category) => {
  if (checked) {
    selectedCategoriesStore.addCategory(category);
  } else {
    selectedCategoriesStore.removeCategory(category);
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
