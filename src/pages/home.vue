<script setup lang="ts">
import breadcrum from "~/components/header/breadcrum.vue";
import navbar from "~/components/header/navbar.vue";
import topbar from "~/components/header/topbar.vue";
import sidebar from "~/components/sidebar/index.vue";
import ProductsGrid from "~/components/product/grid.vue";
import paginationButtonsGroup from "~/components/pagination/buttonsGroup.vue";
import filterbar from "~/components/filterbar.vue";
</script>

<template>
  <div class="w-full flex flex-col">
    <topbar />
    <navbar />
    <breadcrum />
    <main class="flex w-full md:px-9 px-5 gap-5 min-h-[75rem]">
      <sidebar />
      <div class="flex flex-col py-20 w-full">
        <filterbar />
        <products-grid />
      </div>
    </main>
    <footer class="py-8">
      <pagination-buttons-group />
    </footer>
  </div>
</template>
