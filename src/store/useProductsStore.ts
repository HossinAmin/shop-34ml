import { BaseResponse, Product } from "~/types/response";

import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

import { buildApiUrl } from "~/utils/apiBuild";
import { useSelectedBrandsStore } from "./useSelectedBrandsStore";
import { useSelectedCategoriesStore } from "./useSelectedCategoriesStore";

const api = "https://joulia.dashboard.hamburgermenu.app/api/v1/products";

export const useProductsStore = defineStore("products-store", () => {
  const products = ref<BaseResponse<Product[]> | null>(null);
  const productsCount = computed(() => products.value?.data.length);

  const route = useRoute();
  const selectedCategoriesStore = useSelectedCategoriesStore();
  const selectedBrandsStore = useSelectedBrandsStore();
  // TODO: add error handling
  const fetchProducts = async (customAPI: string) => {
    products.value = null;

    const res = await fetch(customAPI);
    const data = await res.json();

    products.value = data;
  };

  // watches call queries and re-fetch products from server
  watchEffect(() => {
    const params = {
      page: route.query.page,
      "filter[categories]": selectedCategoriesStore.selectedCategories.map(
        (category) => category.id,
      ),
      "filter[brands]": selectedBrandsStore.selectedBrands.map(
        (brand) => brand.id,
      ),
    };

    const customAPI = buildApiUrl(api, params);
    fetchProducts(customAPI);
  });

  return { products, productsCount, fetchProducts };
});
