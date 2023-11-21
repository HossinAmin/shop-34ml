<script setup lang="ts">
import heartIcon from "~/assets/icons/heart.svg";
import cartIcon from "~/assets/icons/cart.svg";
import accountIcon from "~/assets/icons/account.svg";

import iconButton from "~/components/common/iconButton.vue";

const headerButtons = [
  {
    text: "Account",
    icon: accountIcon,
  },
  {
    text: "Wishlist",
    icon: heartIcon,
  },
  {
    text: "Cart",
    icon: cartIcon,
  },
];
</script>

<template>
  <div class="w-full flex justify-between md:px-14 px-5 py-4">
    <p class="logo-text">LOGO</p>
    <div class="flex gap-2 md:gap-6">
      <iconButton
        v-for="headerButton in headerButtons"
        :text="headerButton.text"
        :icon="headerButton.icon"
      />
    </div>
  </div>
</template>

<style scoped>
.logo-text {
  @apply text-[20px] md:text-[25px] font-bold;
}
</style>
