<script setup lang="ts">
import noItemImg from "~/assets/images/emptyBox.png";
import { useProductsStore } from "~/store/useProductsStore";
import ProductGridItem from "./gridItem.vue";

const productsStore = useProductsStore();
</script>

<template>
  <div
    v-if="productsStore.products"
    class="grid grid-cols-2 gap-9 text-xs md:grid-cols-4 md:text-lg"
  >
    <product-grid-item
      v-for="product in productsStore.products.data"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else class="m-auto text-5xl font-semibold">loading....</div>

  <!-- empty container indicator -->
  <div
    v-if="productsStore.products?.data.length === 0"
    class="flex w-full flex-col items-center justify-center"
  >
    <p class="py-10 text-4xl font-semibold">No items in this page</p>
    <img :src="noItemImg" alt="no-item" class="w-52" />
  </div>
</template>
