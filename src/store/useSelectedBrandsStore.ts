import { defineStore } from "pinia";
import { Brand } from "~/types/response";

export const useSelectedBrandsStore = defineStore("selected-brands-store", {
  state: () => ({
    selectedBrands: [] as Brand[],
  }),
  getters: {
    selectedBrandsLength: (state) => state.selectedBrands.length,
  },
  actions: {
    addBrand(brand: Brand) {
      this.selectedBrands.push(brand);
    },
    removeBrand(brand: Brand) {
      this.selectedBrands = this.selectedBrands.filter(
        (item) => item.id !== brand.id,
      );
    },
  },
});
