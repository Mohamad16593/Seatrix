<template>
  <div ref="containerRef" :class="['slide-word', customClass]">
    <span v-for="(word, index) in words" :key="index" class="word">
      {{ word }}
    </span>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
});

const containerRef = ref(null);

const words = computed(() => props.text.split(" "));
onMounted(() => {
  gsap.from(containerRef.value.children, {
    x: 100,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: containerRef.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
</script>
<style scoped>
.slide-word {
  display: inline-block;

  line-height: 1.6;
}
.word {
  display: inline-block;
  margin-right: 0.35em;
  white-space: nowrap;
}
</style>
