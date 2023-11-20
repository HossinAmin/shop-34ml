import { BaseResponse, Product } from "~/types/response";
import { ref } from "vue";

const api = "https://joulia.dashboard.hamburgermenu.app/api/v1/products?page=0";

export default function useBrand() {
  const products = ref<BaseResponse<Product[]> | null>(null);

  // TODO: add error handling
  const fetchProducts = async () => {
    const res = await fetch(api);
    const data = await res.json();
    products.value = data;
  };

  return { products, fetchProducts };
}
