<template>
  <div>
    <v-app-bar
      app
      calss=" text-text"
      class="my-2"
      style="backdrop-filter: blur(30px); background-color: transparent"
      elevation="0"
    >
      <div
        class="d-flex mx-10 flex-row w-100 align-center justify-space-between"
      >
        <div class="d-flex align-center justify-center">
          <v-img class="logo" src="/logo.svg" width="70" height="70" />
          <p class="company-title text-primary">Seatronix</p>
        </div>

        <div class="actions">
          <v-btn icon @click="toggleTheme">
            <v-icon color="primary">{{
              isDark ? "mdi-weather-sunny" : "mdi-weather-night"
            }}</v-icon>
          </v-btn>
          <v-btn icon @click="showSearch = !showSearch">
            <v-icon color="primary">mdi-magnify</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-dialog v-model="showSearch" max-width="600">
      <v-card class="pa-10 bg-background">
        <v-card-title>
          <v-text-field
            v-model="query"
            variant="outlined"
            class="bg-background text-primary"
            label="Type a chair name for seach..."
            prepend-inner-icon="mdi-magnify"
            hide-details
            dense
            autofocus
            @input="handleSearch"
          />
        </v-card-title>

        <v-card-text>
          <v-list v-if="results.length" class="search-results bg-background">
            <v-list-item
              class="text-primary"
              v-for="chair in results"
              :key="chair._id"
              @click="goToChair(chair._id)"
            >
              <v-list-item-title>{{ chair.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ chair.category }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <div v-else class="text-center text-primary">
            <p>No results found.</p>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn text color="primary" @click="showSearch = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
//for theme
import { useTheme } from "vuetify";
const theme = useTheme();
const isDark = computed(() => theme.global.name.value === "dark");

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? "light" : "dark";
};

//for searching
import { useRouter } from "vue-router";
import type { Chair } from "~/types/chair";
const showSearch = ref(false);
const query = ref("");
const results = ref<Chair[]>([]);
const router = useRouter();

//Trim search keyword
const handleSearch = async () => {
  if (!query.value.trim()) {
    results.value = [];
    return;
  }

  //fetch searching results
  try {
    const data = await $fetch<Chair[]>(
      `http://localhost:3000/api/chairs/search`, //it shold be edited when deploy
      {
        params: { title: query.value },
      }
    );
    results.value = data;
  } catch (err) {
    console.error("Search error:", err);
  }
};

//Go to chair page on click
const goToChair = (id: string) => {
  showSearch.value = false;
  query.value = "";
  results.value = [];
  router.push(`/${id}`);
};
</script>
<style scoped>
.company-title {
  font-weight: bold;
  font-size: 25px;
}
.logo {
  transform: translate(15px, 1px);
}
</style>
