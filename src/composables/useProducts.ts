import { BaseResponse, Product } from "~/types/response";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import useCategory from "./useCategory";

const api = "https://joulia.dashboard.hamburgermenu.app/api/v1/products";
const products = ref<BaseResponse<Product[]> | null>(null);
export default function useBrand() {
  const route = useRoute();
  // const { selectedCategories } = useCategory();

  // TODO: add error handling
  const fetchProducts = async (customAPI?: string) => {
    products.value = null;

    const res = await fetch(customAPI || api);
    const data = await res.json();

    products.value = data;
  };

  watchEffect(() => {
    fetchProducts(`${api}?page=${route.query.page}`);
  });

  return { products, fetchProducts };
}
