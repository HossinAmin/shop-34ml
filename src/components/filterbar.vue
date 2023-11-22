<script setup lang="ts">
import filterIcon from "~/assets/icons/filter.svg";

import useProducts from "~/composables/useProducts";
import useCategory from "~/composables/useCategory";
import useBrand from "~/composables/useBrand";

import FilterbarItem from "./filterbarItem.vue";

import { computed } from "vue";

const { products } = useProducts();
const { selectedCategories } = useCategory();
const { selectedBrands } = useBrand();

const filterCount = computed(() => {
  const count = selectedBrands.value?.length + selectedCategories.value?.length;
  if (count > 0) {
    return `(${count})`;
  }
  return null;
});

const handelRemoveCategory = (id: string) => {
  selectedCategories.value = selectedCategories.value.filter(
    (item) => item.id !== id
  );
};

const handelRemoveBrand = (id: string) => {
  selectedBrands.value = selectedBrands.value.filter((item) => item.id !== id);
};
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
            v-for="category in selectedCategories"
            :item="category"
            @remove="handelRemoveCategory(category.id)"
          />
          <FilterbarItem
            v-for="brand in selectedBrands"
            :item="brand"
            @remove="handelRemoveBrand(brand.id)"
          />
        </div>
      </div>

      <p class="px-2 whitespace-nowrap">{{ products?.data.length }} Items</p>
    </div>
  </div>
</template>

<style>
/* hide scroll bar */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>
