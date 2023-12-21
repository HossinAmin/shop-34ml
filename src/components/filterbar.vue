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
  <div class="flex flex-col items-start md:flex-row md:items-center">
    <button
      class="mr-4 border-none bg-transparent p-0 text-black md:flex md:items-center md:rounded md:border-[1px] md:border-solid md:border-black md:p-2"
    >
      <img class="hidden md:inline" :src="filterIcon" alt="filter-icon" />
      <span class="font-bold md:hidden"> Filters {{ filterCount }} </span>
      <span class="hidden md:inline">Hide Filters</span>
    </button>

    <!-- list -->
    <div class="flex max-w-full items-center md:max-w-[45%]">
      <div class="scrollbar-hidden overflow-x-auto">
        <div class="flex flex-nowrap items-center justify-start gap-2">
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

      <p class="whitespace-nowrap px-2">
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
