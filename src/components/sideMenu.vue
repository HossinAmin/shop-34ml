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
    class="side-menu fixed left-0 top-0 z-50 flex h-full w-full flex-col gap-2 bg-white"
    :class="isMenuOpen ? 'show' : ''"
  >
    <div
      class="flex w-full justify-between border-b-[1px] border-b-subtitle px-5 py-2"
    >
      <h1 class="text-xl font-bold">Filters</h1>

      <IconButton @click="closeMenu" :icon="closeIcon" />
    </div>
    <div class="flex flex-1 flex-col px-5">
      <CategoryFilter />
      <Brand />
    </div>
    <div class="flex w-full justify-center gap-3.5 p-5">
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
