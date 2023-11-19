<script setup lang="ts">
import breadcrum from "./components/breadcrum.vue";
import navbar from "./components/navbar.vue";
import topbar from "./components/topbar.vue";
</script>

<template>
  <div class="w-screen flex flex-col">
    <topbar />
    <navbar />
    <breadcrum />
  </div>
</template>
