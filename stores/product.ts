// stores/product.ts
import { defineStore } from "pinia";
import type { Chair } from "~/types/chair";

export const useChairsStore = defineStore("product", () => {
  const chairs = ref<Chair[]>([]);
  const chairsByCategory = ref<Record<string, Chair[]>>({});
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  async function fetchChairs() {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await $fetch<Chair[]>("/api/chairs");
      chairs.value = data ?? [];
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(JSON.stringify(err));
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchChairsByCategory(category: string) {
    try {
      const data = await $fetch<Chair[]>(
        `/api/chairs/category?category=${category}`
      );
      // console.log("API response for category:", category, data);
      chairsByCategory.value[category] = data ?? [];
    } catch (err) {
      console.error("API error:", err);
    return createError({
      statusCode: 500,
      statusMessage: "Failed to fetch chairs",
    });
      chairsByCategory.value[category] = [];
    }
  }

  return {
    chairs,
    chairsByCategory,
    isLoading,
    error,
    fetchChairs,
    fetchChairsByCategory,
  };
});
