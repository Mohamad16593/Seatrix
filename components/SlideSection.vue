<template>
  <section ref="sectionRef" :class="['slide-in-section', customClass]">
    <slot />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

const props = defineProps({
  customClass: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  gsap.from(sectionRef.value, {
    x: 200,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });
});
</script>

<style scoped>
.slide-in-section {
  will-change: transform, opacity;
}
</style>
