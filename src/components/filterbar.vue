<script setup lang="ts">
import filterIcon from "~/assets/icons/filter.svg";

import PrimaryButton from "./common/primaryButton.vue";

import useProducts from "~/composables/useProducts";
import FilterbarItem from "./filterbarItem.vue";
import useCategory from "~/composables/useCategory";
import useBrand from "~/composables/useBrand";

const { products } = useProducts();
const { selectedCategories } = useCategory();
const { selectedBrands } = useBrand();

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
  <div class="flex w-full items-center">
    <PrimaryButton
      text="Hide Filters"
      :pre-icon="filterIcon"
      class="mx-4 bg-transparent !border-black text-black px-7"
    />
    <!-- list -->
    <div class="max-w-[45%] overflow-x-auto scrollbar-hidden">
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

    <p class="px-2">{{ products?.data.length }} Items</p>
  </div>
</template>

<style>
/* hide scroll bar */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>
