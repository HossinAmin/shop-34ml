<script setup lang="ts">
import SideMenu from "~/components/sideMenu.vue";

const linkButtons = [
  "Grocery",
  "Electronics",
  "Clothing",
  "Furniture",
  "Toys & Video games",
  "Baby",
  "Beauty",
  "Personal Car",
  "Pets",
  "Sports",
  "Stationery",
  "Brands",
];
</script>

<template>
  <div
    class="flex w-full gap-10 border-b-[1px] border-b-subtitle px-5 pb-3 lg:justify-center lg:bg-surface lg:py-3"
  >
    <button
      v-for="button in linkButtons"
      class="hidden font-bold lg:inline-block"
    >
      {{ button }}
    </button>

    <!-- mobile view -->
    <SideMenu />
  </div>
</template>
