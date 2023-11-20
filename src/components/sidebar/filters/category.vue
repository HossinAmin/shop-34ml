<script setup lang="ts">
import SearchBar from "~/components/common/searchBar.vue";
import useCategory from "~/composables/useCategory.ts";

import { ref } from "vue";

const searchQuery = ref("");
const { categories, fetchCategories } = useCategory();

fetchCategories();
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-text font-bold text-base">Category</h3>
    <SearchBar
      v-model:model-value="searchQuery"
      placeholder="Search by category"
    />
    <div v-if="categories" class="flex flex-col gap-3">
      <!-- item -->
      <div v-for="category in categories.data" class="flex gap-1">
        <input class="w-4" type="checkbox" />
        <p>{{ category.title }}</p>
      </div>
    </div>
  </div>
</template>
