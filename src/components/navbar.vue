<script setup lang="ts">
import heartIcon from "~/assets/icons/heart.svg";
import cartIcon from "~/assets/icons/cart.svg";
import accountIcon from "~/assets/icons/account.svg";

const headerButtons = [
  {
    text: "Account",
    icon: accountIcon,
  },
  {
    text: "Whish List",
    icon: heartIcon,
  },
  {
    text: "Cart",
    icon: cartIcon,
  },
];
</script>

<template>
  <div class="w-full flex justify-between">
    <p class="text-3xl font-bold">LOGO</p>
    <div class="flex gap-3">
      <div
        v-for="headerButton in headerButtons"
        class="flex gap-2 items-center"
      >
        <img
          class="w-6 aspect-square"
          :src="headerButton.icon"
          :alt="headerButton.text"
        />
        <p>{{ headerButton.text }}</p>
      </div>
    </div>
  </div>
</template>
