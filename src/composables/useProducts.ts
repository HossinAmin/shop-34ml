import { BaseResponse, Product } from "~/types/response";

import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

import useCategory from "./useCategory";
import useBrand from "./useBrand";

import { buildApiUrl } from "~/utils/apiBuild";

const api = "https://joulia.dashboard.hamburgermenu.app/api/v1/products";
const products = ref<BaseResponse<Product[]> | null>(null);

export default function useProduct() {
  const route = useRoute();
  const { selectedCategories } = useCategory();
  const { selectedBrands } = useBrand();

  // TODO: add error handling
  const fetchProducts = async (customAPI?: string) => {
    products.value = null;

    const res = await fetch(customAPI || api);
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
    console.log(customAPI);
    fetchProducts(customAPI);
  });

  return { products, fetchProducts };
}
