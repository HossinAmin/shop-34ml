<script setup lang="ts">
import breadcrum from "./components/breadcrum.vue";
import navbar from "./components/navbar.vue";
import topbar from "./components/topbar.vue";
import sidebar from "./components/sidebar/index.vue";
import ProductGrid from "./components/product/grid.vue";
</script>

<template>
  <div class="w-screen flex flex-col">
    <topbar />
    <navbar />
    <breadcrum />
    <main class="flex">
      <sidebar />
      <ProductGrid />
    </main>
  </div>
</template>
