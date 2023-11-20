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
  <div class="relative flex flex-col gap-6">
    <img
      class="object-contain rounded-md"
      :src="product.default_variant.image || noImageIcon"
      :alt="product.title"
    />
    <div>
      <p class="text-lg truncate">{{ product.title }}</p>
      <p class="text-lg font-bold">{{ product.default_variant.price }}</p>
    </div>
    <div
      class="absolute top-2 right-2 w-8 rounded-full bg-white border-[1px] flex justify-center aspect-square"
    >
      <img class="w-5" :src="heartIcon" alt="heart-icon" />
    </div>
  </div>
</template>
