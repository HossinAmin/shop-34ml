<script setup lang="ts">
import noItemImg from "~/assets/images/emptyBox.png";
import useProducts from "~/composables/useProducts";
import ProductGridItem from "./gridItem.vue";

const { products } = useProducts();
</script>

<template>
  <div v-if="products" class="grid md:grid-cols-2 lg:grid-cols-4 gap-9">
    <product-grid-item
      v-for="product in products.data"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else class="text-9xl font-bold m-auto">loading....</div>

  <div
    v-if="products?.data.length === 0"
    class="w-full flex flex-col justify-center items-center"
  >
    <p class="text-4xl font-semibold py-10">No items in this page</p>
    <img :src="noItemImg" alt="no-item" class="w-52" />
  </div>
</template>
