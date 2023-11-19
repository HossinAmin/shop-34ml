<script setup lang="ts">
import SearchBar from "~/components/common/searchBar.vue";

import { ref } from "vue";
const searchQuery = ref("");
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-text font-bold text-xl">Brand</h3>
    <SearchBar
      v-model:model-value="searchQuery"
      placeholder="Search by brand"
    />
  </div>
</template>
