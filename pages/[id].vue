<template>
  <div class="s-product">
    <div v-if="chair" class="chair mt-16 text-primary bg-background">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" align="center">
            <v-img
              :src="chair.image_url"
              style="width: 300px; height: 300px"
              rounded="xl"
              class="prod-img"
              contain
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>{{ chair.title }}</h2>
            <v-rating
              :model-value="chair.rating"
              color="amber"
              readonly
            ></v-rating>
            <h2>Description:</h2>
            <p class="text-text mb-4">{{ chair.description }}</p>
            <h2>Dimensions:</h2>
            <p class="text-text mb-4">{{ chair.dimensions }}</p>
            <h2>Price:</h2>
            <p class="text-text mb-4">{{ chair.price_usd }} $</p>
            <h2>Weight:</h2>
            <p class="text-text mb-4">{{ chair.weight_kg }} Kg</p>
            <v-btn
              to="/"
              variant="outlined"
              color="secondary"
              width="200px"
              class="mt-5 d-block mx-auto py-2"
              >back</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script setup>
//Fetching product data by its id
import { useRoute } from "vue-router";
const route = useRoute();
const chair = ref(null);
onMounted(async () => {
  const data = await $fetch(`api/chairs/${route.params.id}`, { baseURL: "/" });
  chair.value = data;

  //SEO
  useSeoMeta({
    description: chair.value.description,
    keywords: `${chair.value.category}, ${chair.value.title}, plastic, chair, furniture`,
    ogTitle: chair.value.title,
    ogImage: chair.value.image_url,
    ogDescription: chair.value.description,
    twitterTitle: chair.value.title,
    twitterImage: chair.value.image_url,
  });
});
</script>
<style scoped>
.prod-img {
  border: 1px solid yellow;
  transition: all 1s linear;
  animation: rotate 5s infinite;
}
@keyframes rotate {
  0%,
  100% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(15deg);
  }
  75% {
    transform: rotateY(-15deg);
  }
}
</style>
