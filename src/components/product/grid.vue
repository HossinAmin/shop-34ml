<script setup lang="ts">
import useProducts from "~/composables/useProducts";
import ProductGridItem from "./gridItem.vue";

const { products, fetchProducts } = useProducts();
fetchProducts();
</script>

<template>
  <div v-if="products" class="flex flex-wrap gap-9 justify-center">
    <product-grid-item v-for="product in products.data" :product="product" />
  </div>
</template>
