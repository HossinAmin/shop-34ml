<script setup lang="ts">
import FilterList from "./filterList.vue";

import useBrand from "~/composables/useBrand";

const { brands, fetchBrands } = useBrand();

fetchBrands();
</script>

<template>
  <FilterList title="Brands" :list="brands?.data" />
</template>
