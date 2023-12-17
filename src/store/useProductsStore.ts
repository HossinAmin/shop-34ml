import { BaseResponse, Product } from "~/types/response";

import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

import useCategory from "~/composables/useCategory";
import useBrand from "~/composables/useBrand";

import { buildApiUrl } from "~/utils/apiBuild";

const api = "https://joulia.dashboard.hamburgermenu.app/api/v1/products";

export const useProductsStore = defineStore("products-store", () => {
  const products = ref<BaseResponse<Product[]> | null>(null);
  const productsCount = computed(() => products.value?.data.length);

  const route = useRoute();
  const { selectedCategories } = useCategory();
  const { selectedBrands } = useBrand();

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
      "filter[categories]": selectedCategories.value.map(
        (category) => category.id
      ),
      "filter[brands]": selectedBrands.value.map((brand) => brand.id),
    };

    const customAPI = buildApiUrl(api, params);
    fetchProducts(customAPI);
  });

  return { products, productsCount, fetchProducts };
});
