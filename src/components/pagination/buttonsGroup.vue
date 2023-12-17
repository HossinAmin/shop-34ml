<script setup lang="ts">
import { computed, ref } from "vue";
import leftArrow from "~/assets/icons/left-arrow.svg";
import rightArrow from "~/assets/icons/right-arrow.svg";
import { useRoute, useRouter } from "vue-router";
import { useProductsStore } from "~/store/useProductsStore";
import TextButton from "../common/textButton.vue";

const router = useRouter();
const route = useRoute();
const productsStore = useProductsStore();

const currentPage = ref(Number(route.query.page) || 1);

const totalPages = computed(() => {
  return productsStore.products?.pagination.total || 3;
});

const displayedPages = computed(() => {
  return Array.from({ length: 3 }, (_, index) => currentPage.value + index);
});

const goToPage = (pageNum: number) => {
  currentPage.value = pageNum;
  router.replace({ path: "/", query: { page: currentPage.value } });
};

const prevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value!) {
    goToPage(currentPage.value + 1);
  }
};
</script>

<template>
  <div class="flex items-center justify-center gap-2 mr-2">
    <text-button
      @click="prevPage"
      :disable="currentPage === 1"
      :icon-src="leftArrow"
    />

    <text-button
      v-for="pageNumber in displayedPages"
      :key="pageNumber"
      :active="currentPage === pageNumber"
      @click="goToPage(pageNumber)"
      :text="pageNumber.toString()"
    />

    <text-button
      @click="nextPage"
      :disable="currentPage === totalPages"
      :icon-src="rightArrow"
    />
  </div>
</template>
