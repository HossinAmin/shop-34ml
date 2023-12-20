<script setup lang="ts">
import { Brand } from "~/types/response";
import FilterList from "./filterList.vue";

import useBrand from "~/composables/useBrand";
import { useSelectedBrandsStore } from "~/store/useSelectedBrandsStore";

const { brands, fetchBrands } = useBrand();
const selectedBrandsStore = useSelectedBrandsStore();

const handelSelectBrand = (checked: boolean, brand: Brand) => {
  if (checked) {
    selectedBrandsStore.addBrand(brand);
  } else {
    selectedBrandsStore.removeBrand(brand);
  }
};

fetchBrands();
</script>

<template>
  <FilterList title="Brands" :list="brands?.data" @select="handelSelectBrand" />
</template>
