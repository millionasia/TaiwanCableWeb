<script setup>
const props = defineProps({
  ads: { type: Array, required: true },
  ariaLabel: { type: String, required: true },
  fill: { type: Boolean, default: false },
  compact: { type: Boolean, default: false }
})

const activeIndex = ref(0)
const isPaused = ref(false)
let timer

const activeAd = computed(() => props.ads[activeIndex.value] || props.ads[0])

const showAd = (index) => {
  activeIndex.value = index
}

onMounted(() => {
  if (props.ads.length > 1) {
    timer = window.setInterval(() => {
      if (!isPaused.value) {
        activeIndex.value = (activeIndex.value + 1) % props.ads.length
      }
    }, 4200)
  }
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
})
</script>

<template>
  <div
    class="ad-rotator relative min-h-[112px] overflow-hidden rounded-lg"
    :class="{ 'lg:min-h-[280px]': fill, '!min-h-[66px]': compact }"
    :aria-label="ariaLabel"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @focusin="isPaused = true"
    @focusout="isPaused = false"
  >
    <Transition name="sponsor-flip" mode="out-in">
      <AdSlot
        v-if="activeAd"
        :key="activeAd.title"
        :ad="activeAd"
        :layout="compact ? 'compact' : fill ? 'fill' : 'block'"
      />
    </Transition>

    <div v-if="ads.length > 1" class="absolute bottom-2 right-2 z-20 flex gap-1.5" aria-label="選擇贊助會員">
      <button
        v-for="(ad, index) in ads"
        :key="ad.title"
        type="button"
        class="h-2.5 w-2.5 rounded-full border border-white/80 transition"
        :class="activeIndex === index ? 'bg-white' : 'bg-white/25 hover:bg-white/60'"
        :aria-label="`顯示第 ${index + 1} 則贊助會員`"
        :aria-pressed="activeIndex === index"
        @click="showAd(index)"
      />
    </div>
  </div>
</template>
