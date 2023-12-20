import { Category, BaseResponse } from "~/types/response";
import { ref } from "vue";

const api = "https://joulia.dashboard.hamburgermenu.app/api/v1/categories";

export default function useCategory() {
  const categories = ref<BaseResponse<Category[]> | null>(null);

  // TODO: add error handling
  const fetchCategories = async () => {
    const res = await fetch(api);
    categories.value = await res.json();
  };

  return { categories, fetchCategories };
}
