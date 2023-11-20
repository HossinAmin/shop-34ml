<script setup lang="ts">
import breadcrum from "./components/breadcrum.vue";
import navbar from "./components/navbar.vue";
import topbar from "./components/topbar.vue";
import sidebar from "./components/sidebar/index.vue";
import ProductsGrid from "./components/product/grid.vue";
</script>

<template>
  <div class="w-full flex flex-col">
    <topbar />
    <navbar />
    <breadcrum />
    <main class="flex px-9 gap-5">
      <sidebar />
      <products-grid />
    </main>
  </div>
</template>
