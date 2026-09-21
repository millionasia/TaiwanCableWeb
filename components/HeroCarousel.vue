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
    class="relative aspect-[16/10] overflow-hidden rounded-lg bg-brand-ink shadow-steel"
    aria-label="電線電纜產業主視覺輪播"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <img
      v-for="(image, index) in images"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
      :class="index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'"
    >

    <button
      type="button"
      class="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white transition hover:bg-brand-red focus:outline-none focus:ring-4 focus:ring-white/60"
      aria-label="上一張主視覺"
      @click="showSlide(activeIndex - 1)"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </button>

    <button
      type="button"
      class="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white transition hover:bg-brand-red focus:outline-none focus:ring-4 focus:ring-white/60"
      aria-label="下一張主視覺"
      @click="showSlide(activeIndex + 1)"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </button>

    <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2" aria-label="選擇主視覺">
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
