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
  <div class="flex items-center w-[80%]">
    <PrimaryButton
      class="mx-4 bg-transparent text-black !border-black"
      :pre-icon="filterIcon"
      text="Filters"
    />

    <div class="flex gap-2">
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

    <p class="px-2">{{ products?.data.length }} Items</p>
  </div>
</template>
