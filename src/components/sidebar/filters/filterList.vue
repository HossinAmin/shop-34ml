<script setup lang="ts">
import SearchBar from "~/components/common/searchBar.vue";
import { PropType } from "vue/dist/vue.js";
import { ref, computed, defineProps } from "vue";
import { Brand, Category } from "~/types/response";

const props = defineProps({
  title: {
    type: String,
  },
  list: {
    type: Array as PropType<Category[] | Brand[]>,
  },
});

const searchQuery = ref("");

const displayedBrands = computed(() => {
  if (props.list) {
    return props.list.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return null;
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-text font-bold text-base">{{ title }}</h3>
    <SearchBar
      v-model:model-value="searchQuery"
      placeholder="Search by category"
    />
    <div v-if="list" class="flex flex-col gap-3">
      <!-- item -->
      <div v-for="item in displayedBrands" class="flex gap-1">
        <input class="w-4" type="checkbox" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
