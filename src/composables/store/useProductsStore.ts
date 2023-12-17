import { defineStore } from "pinia";
import { ref } from "vue";
import { BaseResponse, Product } from "~/types/response";

export const useProductsStore = defineStore("products-store", () => {
  const products = ref<BaseResponse<Product[]> | null>(null);

  // TODO: add error handling
  const fetchProducts = async (customAPI: string) => {
    products.value = null;

    const res = await fetch(customAPI);
    const data = await res.json();

    products.value = data;
  };

  return { products, fetchProducts };
});
