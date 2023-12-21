<script setup lang="ts">
import heartIcon from "~/assets/icons/heart.svg";
import noImageIcon from "~/assets/icons/no-image.svg";

import { Product } from "~/types/response";
import { PropType } from "vue";

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>

<template>
  <div class="relative flex flex-col justify-between gap-6">
    <div class="rounded-md">
      <img
        :src="product.default_variant.image || noImageIcon"
        :alt="product.title"
      />
    </div>
    <div>
      <p class="truncate">{{ product.title }}</p>
      <p class="font-bold">{{ product.default_variant.price }}</p>
    </div>
    <div
      class="absolute right-2 top-2 flex aspect-square w-6 items-center justify-center rounded-full border-[1px] bg-white p-1 md:w-9"
    >
      <img :src="heartIcon" alt="heart-icon" />
    </div>
  </div>
</template>
