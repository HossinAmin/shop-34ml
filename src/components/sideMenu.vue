<script setup lang="ts">
import menuIcon from "~/assets/icons/menu.svg";
import closeIcon from "~/assets/icons/close.svg";

import IconButton from "~/components/common/iconButton.vue";
import CategoryFilter from "./sidebar/filters/category.vue";
import Brand from "./sidebar/filters/brand.vue";

import PrimaryButton from "~/components/common/primaryButton.vue";

import { ref } from "vue";
import { useProductsStore } from "~/store/useProductsStore";
import { useSelectedBrandsStore } from "~/store/useSelectedBrandsStore";
import { useSelectedCategoriesStore } from "~/store/useSelectedCategoriesStore";

const isMenuOpen = ref(false);

const productsStore = useProductsStore();
const selectedCategoriesStore = useSelectedCategoriesStore();
const selectedBrandsStore = useSelectedBrandsStore();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const clearAllFilters = () => {
  selectedBrandsStore.selectedBrands = [];
  selectedCategoriesStore.selectedCategories = [];
};
</script>

<template>
  <IconButton class="lg:hidden" @click="toggleMenu" :icon="menuIcon" />
  <div
    class="side-menu fixed top-0 left-0 w-full h-full bg-white flex flex-col gap-2 z-50"
    :class="isMenuOpen ? 'show' : ''"
  >
    <div
      class="flex justify-between w-full border-b-subtitle px-5 py-2 border-b-[1px]"
    >
      <h1 class="font-bold text-xl">Filters</h1>

      <IconButton @click="closeMenu" :icon="closeIcon" />
    </div>
    <div class="flex flex-col px-5 flex-1">
      <CategoryFilter />
      <Brand />
    </div>
    <div class="flex justify-center w-full p-5 gap-3.5">
      <PrimaryButton
        @click="clearAllFilters"
        class="bg-transparent !text-primary"
        text="Clear All"
      />
      <PrimaryButton
        @click="closeMenu"
        class="flex-1"
        :text="`View All ${productsStore.productsCount || 0} Items`"
      />
    </div>
  </div>
</template>

<style scoped>
.side-menu {
  transition: transform 0.5s;
  transform: translateX(-100%);
}

.side-menu.show {
  transform: translateX(0);
}
</style>
