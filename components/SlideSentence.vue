<template>
  <div ref="containerRef" :class="['slide-sentences', customClass]">
    <div
      v-for="(sentence, index) in sentences"
      :key="index"
      class="sentence"
      style="text-wrap: wrap"
    >
      {{ sentence }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  text: { type: String, required: true },
  customClass: { type: String, default: "" },
});

const containerRef = ref(null);

// 🧠 Split the full text by punctuation that ends a sentence.
const sentences = computed(
  () =>
    props.text
      .match(/[^.!?]+[.!?]*/g)
      ?.map((s) => s.trim())
      .filter(Boolean) || []
);

onMounted(() => {
  gsap.from(containerRef.value.children, {
    x: 100,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.4,
    scrollTrigger: {
      trigger: containerRef.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
</script>
