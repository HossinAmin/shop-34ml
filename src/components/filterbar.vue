<script setup lang="ts">
import filterIcon from "~/assets/icons/filter.svg";

import { useProductsStore } from "~/store/useProductsStore";
import { useSelectedBrandsStore } from "~/store/useSelectedBrandsStore";
import { useSelectedCategoriesStore } from "~/store/useSelectedCategoriesStore";

import FilterbarItem from "./filterbarItem.vue";

import { computed } from "vue";

const productsStore = useProductsStore();
const selectedCategoriesStore = useSelectedCategoriesStore();
const selectedBrandsStore = useSelectedBrandsStore();

const filterCount = computed(() => {
  const count =
    selectedBrandsStore.selectedBrandsLength +
    selectedCategoriesStore.selectedCategoriesLength;
  if (count > 0) {
    return `(${count})`;
  }
  return null;
});
</script>

<template>
  <div class="flex flex-col md:flex-row items-start md:items-center">
    <button
      class="bg-transparent mr-4 border-none md:border-black md:border-solid md:border-[1px] md:rounded md:p-2 text-black md:flex md:items-center p-0"
    >
      <img class="hidden md:inline" :src="filterIcon" alt="filter-icon" />
      <span class="font-bold md:hidden"> Filters {{ filterCount }} </span>
      <span class="hidden md:inline">Hide Filters</span>
    </button>

    <!-- list -->
    <div class="flex items-center md:max-w-[45%] max-w-full">
      <div class="overflow-x-auto scrollbar-hidden">
        <div class="flex justify-start items-center gap-2 flex-nowrap">
          <FilterbarItem
            v-for="category in selectedCategoriesStore.selectedCategories"
            :item="category"
            @remove="selectedCategoriesStore.removeCategory(category)"
          />
          <FilterbarItem
            v-for="brand in selectedBrandsStore.selectedBrands"
            :item="brand"
            @remove="selectedBrandsStore.removeBrand(brand)"
          />
        </div>
      </div>

      <p class="px-2 whitespace-nowrap">
        {{ productsStore.productsCount }} Items
      </p>
    </div>
  </div>
</template>

<style>
/* hide scroll bar */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>
