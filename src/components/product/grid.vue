<script setup lang="ts">
import useProducts from "~/composables/useProducts";
import ProductGridItem from "./gridItem.vue";

const { products, fetchProducts } = useProducts();
fetchProducts();
</script>

<template>
  <div
    v-if="products"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9"
  >
    <product-grid-item
      v-for="product in products.data"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
