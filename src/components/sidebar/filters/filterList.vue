<script setup lang="ts">
import minusIcon from "~/assets/icons/minus.svg";
import plusIcon from "~/assets/icons/plus.svg";

import { Brand, Category } from "~/types/response";

import SearchBar from "~/components/common/searchBar.vue";

import { PropType } from "vue/dist/vue.js";
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  list: {
    type: Array as PropType<Category[] | Brand[]>,
  },
});

const emit = defineEmits<{
  select: [checked: boolean, item: Category | Brand];
}>();
const searchQuery = ref("");
const expand = ref(true);

const displayedBrands = computed(() => {
  if (props.list) {
    return props.list.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return null;
});

const handelItemSelect = (e: Event, item: Category | Brand) => {
  const target = e.target as HTMLInputElement;
  emit("select", target.checked, item);
};
</script>

<template>
  <div class="flex w-full flex-col gap-3 border-b-subtitle border-b-[1px] py-5">
    <div class="flex justify-between items-center">
      <h3 class="text-text font-bold text-base">{{ title }}</h3>
      <button @click="expand = !expand">
        <img :src="expand ? minusIcon : plusIcon" alt="expand-button" />
      </button>
    </div>

    <!-- dropdown -->
    <template v-if="expand">
      <SearchBar
        v-model:model-value="searchQuery"
        placeholder="Search by category"
      />

      <div v-if="list" class="flex flex-col gap-3">
        <div v-for="item in displayedBrands" class="flex gap-1">
          <input
            class="w-4"
            type="checkbox"
            @change="(e: Event) => handelItemSelect(e,item)"
          />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
