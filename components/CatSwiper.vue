<template>
  <div class="products">
    <div v-for="(swiperEl, index) in swipers" :key="index">
      <SectionTitle :title="swiperEl.title" />
      <ProductSwiper :category="swiperEl.category" />
    </div>
  </div>
</template>
<script setup>
const swipers = [
  {
    title: "Monoblock Chairs",
    category: "Monoblock",
  },
  {
    title: "Armrest Chairs",
    category: "Armrest",
  },
  {
    title: "Rattan Chairs",
    category: "Rattan-style",
  },
  {
    title: "Study Chairs",
    category: "Study",
  },
  {
    title: "Cafeteria Chairs",
    category: "Cafeteria",
  },
];
</script>
