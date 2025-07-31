// /composables/useCountOnScroll.ts
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Options for controlling the scroll trigger and tween
 */
interface UseCountOnScrollOptions {
  trigger?: string;
  start?: string;
  once?: boolean;
  duration?: number;
  ease?: string;
}

/**
 * Counts from 0 up to `endValue` when `trigger` enters the viewport.
 */
export function useCountOnScroll(
  targetSelector: string,
  endValue: number,
  options: UseCountOnScrollOptions = {}
): { count: Ref<number> } {
  // Destructure defaults here so we can reference targetSelector
  const {
    trigger = targetSelector,
    start = "top bottom",
    once = true,
    duration = 2,
    ease = "none",
  } = options;

  const count = ref(0);
  let ctx: gsap.Context;

  onMounted(() => {
    ctx = gsap.context(() => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value: endValue,
        duration,
        ease,
        scrollTrigger: {
          trigger,
          start,
          once,
        },
        onUpdate() {
          count.value = Math.floor(obj.value);
        },
      });
    });
  });

  onBeforeUnmount(() => {
    ctx && ctx.revert();
  });

  return { count };
}
