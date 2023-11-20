<script setup lang="ts">
import SearchBar from "~/components/common/searchBar.vue";
import useBrand from "~/composables/useBrand";

import { ref } from "vue";

const { brands, fetchBrands } = useBrand();

const searchQuery = ref("");

fetchBrands();
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-text font-bold text-base">Brand</h3>
    <SearchBar
      v-model:model-value="searchQuery"
      placeholder="Search by brand"
    />
    <div v-if="brands" class="flex flex-col gap-3">
      <!-- item -->
      <div v-for="brand in brands.data" class="flex gap-1">
        <input class="w-4" type="checkbox" />
        <p>{{ brand.title }}</p>
      </div>
    </div>
  </div>
</template>
