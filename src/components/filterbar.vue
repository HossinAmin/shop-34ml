<script setup lang="ts">
import filterIcon from "~/assets/icons/filter.svg";

import PrimaryButton from "./common/primaryButton.vue";

import useProducts from "~/composables/useProducts";
import FilterbarItem from "./filterbarItem.vue";
import useCategory from "~/composables/useCategory";

const { products } = useProducts();
const { selectedCategories } = useCategory();

const handelRemoveItem = (id: string) => {
  selectedCategories.value = selectedCategories.value.filter(
    (item) => item.id !== id
  );
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
        v-for="item in selectedCategories"
        :item="item"
        @remove="handelRemoveItem(item.id)"
      />
    </div>

    <p class="px-2">{{ products?.data.length }} Items</p>
  </div>
</template>
