<template>
  <div>
    <AppPreloader v-if="loading" />
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Seatronix",
  ogTitle: "Seatronix",
  description:
    "Welcom to Seatronix ,You'll find amazing plastic chairs here, we're not the only ,but definitely we're the best",
  ogDescription:
    "Welcom to Seatronix ,You'll find amazing plastic chairs here, we're not the only ,but definitely we're the best",
});

const loading = ref(true);
onMounted(() => {
  setTimeout(() => (loading.value = false), 2000);
});
</script>
<style>
.v-main {
  --v-layout-top: 0px !important ;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
