<script setup lang="ts">
import menuIcon from "~/assets/icons/menu.svg";

import IconButton from "~/components/common/iconButton.vue";

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
    class="w-full flex lg:justify-center gap-10 lg:bg-surface border-b-subtitle border-b-[1px] py-3 px-5"
  >
    <button
      v-for="button in linkButtons"
      class="font-bold hidden lg:inline-block"
    >
      {{ button }}
    </button>

    <!-- mobile view -->
    <IconButton class="lg-hidden" :icon="menuIcon" />
  </div>
</template>
