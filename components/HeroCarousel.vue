<script setup>
const props = defineProps({
  images: { type: Array, required: true }
})

const activeIndex = ref(0)
const isPaused = ref(false)
let timer

const showSlide = (index) => {
  activeIndex.value = (index + props.images.length) % props.images.length
}

const startTimer = () => {
  timer = window.setInterval(() => {
    if (!isPaused.value) showSlide(activeIndex.value + 1)
  }, 5000)
}

onMounted(startTimer)
onBeforeUnmount(() => window.clearInterval(timer))
</script>

<template>
  <figure
    class="relative min-h-[520px] overflow-hidden bg-brand-ink md:min-h-[560px]"
    aria-label="電線電纜產業主視覺輪播"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <img
      v-for="(image, index) in images"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      class="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
      :class="index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'"
    >

    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" aria-hidden="true" />
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent" aria-hidden="true" />

    <div class="relative z-10">
      <slot />
    </div>

    <div class="absolute bottom-5 right-5 z-20 flex gap-2">
      <button
        type="button"
        class="grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-brand-red focus:outline-none focus:ring-4 focus:ring-white/60"
        aria-label="上一張主視覺"
        @click="showSlide(activeIndex - 1)"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </button>

      <button
        type="button"
        class="grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-brand-red focus:outline-none focus:ring-4 focus:ring-white/60"
        aria-label="下一張主視覺"
        @click="showSlide(activeIndex + 1)"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </button>
    </div>

    <div class="absolute bottom-7 left-5 z-20 flex gap-2" aria-label="選擇主視覺">
      <button
        v-for="(image, index) in images"
        :key="`dot-${image.src}`"
        type="button"
        class="h-2.5 w-2.5 rounded-full border border-white transition"
        :class="index === activeIndex ? 'bg-white' : 'bg-black/40'"
        :aria-label="`顯示第 ${index + 1} 張主視覺`"
        :aria-current="index === activeIndex ? 'true' : undefined"
        @click="showSlide(index)"
      />
    </div>
  </figure>
</template>
