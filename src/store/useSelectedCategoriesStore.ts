import { defineStore } from "pinia";
import { Category } from "~/types/response";

export const useSelectedCategoriesStore = defineStore("selected-categories", {
  state: () => ({
    selectedCategories: [] as Category[],
  }),
  getters: {
    selectedCategoriesLength: (state) => state.selectedCategories.length,
  },
  actions: {
    addCategory(category: Category) {
      this.selectedCategories.push(category);
    },
    removeCategory(category: Category) {
      this.selectedCategories = this.selectedCategories.filter(
        (item) => item.id !== category.id,
      );
    },
  },
});
