<template>
  <ClientOnly>
    <div>
      <Swiper
        class="py-5 bg-background"
        :modules="[Autoplay]"
        :slides-per-view="1"
        :space-between="10"
        :breakpoints="breakpoints"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :speed="5000"
        :loop="true"
      >
        <SwiperSlide
          v-for="chair in chairs"
          :key="chair._id"
          class="product-slide"
        >
          <v-card
            width="300px"
            height="450px"
            class="bg-background pa-5"
            rounded="xl"
            style="box-shadow: 0px 4px 12px #ffb300"
          >
            <div class="w-100 bg-background">
              <v-img
                :src="chair.image_url"
                width="100%"
                height="250px"
                contain
              />
            </div>
            <v-card-title class="text-h8 text-center text-primary">{{
              chair.title
            }}</v-card-title>
            <v-card-text
              class="text-center text-primary"
              style="height: 50px"
              >{{ chair.description }}</v-card-text
            >
            <v-card-actions>
              <v-btn
                color="primary"
                class="mx-auto my-5 font-weight-bold"
                variant="outlined"
                @click="goToChair(chair._id)"
                >See product</v-btn
              >
            </v-card-actions>
          </v-card>
        </SwiperSlide>
      </Swiper>
    </div>
  </ClientOnly>
</template>

<script setup>
//swiper configuration
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
  import ScrollTrigger from "gsap/ScrollTrigger";

//store config
import { useChairsStore } from "~/stores/product";

const props = defineProps({
  category: String,
});

const store = useChairsStore();
onMounted(async () => {
  await store.fetchChairsByCategory(props.category);
  ScrollTrigger.refresh();
});

const chairs = computed(() => store.chairsByCategory[props.category] || []);
const isLoading = computed(() => store.isLoading);

const breakpoints = {
  640: { slidesPerView: 1, spaceBetween: 20 },
  768: { slidesPerView: 2, spaceBetween: 30 },
  1024: { slidesPerView: 3, spaceBetween: 40 },
};

import { useRouter } from "vue-router";
const router = useRouter();

function goToChair(id) {
  router.push(`/${id}`);
}
</script>
