import { Brand, BaseResponse } from "~/types/response";
import { ref } from "vue";

const api = "https://joulia.dashboard.hamburgermenu.app/api/v1/brands";

const selectedBrands = ref<Brand[]>([]);

export default function useBrand() {
  const brands = ref<BaseResponse<Brand[]> | null>(null);

  // TODO: add error handling
  const fetchBrands = async () => {
    let res = await fetch(api);
    brands.value = await res.json();
  };

  return { brands, selectedBrands, fetchBrands };
}
