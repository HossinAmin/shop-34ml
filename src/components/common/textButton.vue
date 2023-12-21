<script setup lang="ts">
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  iconSrc: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <button
    class="text-button"
    :class="`${disable ? 'disabled-button' : ''}${
      active ? 'border-black bg-black text-white' : ''
    }`"
  >
    <img v-if="iconSrc" :src="iconSrc" alt="button-key" />
    <p v-if="text">{{ text }}</p>
  </button>
</template>

<style>
.text-button {
  @apply flex aspect-square w-8 items-center justify-center rounded-md border-[1px] border-subtitle hover:opacity-50 md:w-10;
}
.disabled-button {
  @apply cursor-not-allowed opacity-50;
}
</style>
