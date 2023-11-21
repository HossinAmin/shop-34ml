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
      active ? 'bg-black text-white border-black' : ''
    }`"
  >
    <img v-if="iconSrc" :src="iconSrc" alt="button-key" />
    <p v-if="text">{{ text }}</p>
  </button>
</template>

<style>
.text-button {
  @apply flex justify-center items-center px-4 aspect-square rounded-md border-subtitle border-[1px] hover:opacity-50;
}
.disabled-button {
  @apply cursor-not-allowed opacity-50;
}
</style>
