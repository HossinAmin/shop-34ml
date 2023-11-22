<script setup lang="ts">
import { Brand } from "~/types/response";
import FilterList from "./filterList.vue";

import useBrand from "~/composables/useBrand";

const { brands, selectedBrands, fetchBrands } = useBrand();

const handelSelectBrand = (checked: boolean, category: Brand) => {
  if (checked) {
    selectedBrands.value.push(category);
  } else {
    selectedBrands.value = selectedBrands.value.filter(
      (item) => item.id !== category.id
    );
  }
};

fetchBrands();
</script>

<template>
  <FilterList title="Brands" :list="brands?.data" @select="handelSelectBrand" />
</template>
