<script setup>
defineProps({
  ads: { type: Array, required: true },
  ariaLabel: { type: String, required: true },
  fill: { type: Boolean, default: false }
})
</script>

<template>
  <div class="ad-rotator relative min-h-[112px]" :class="{ 'lg:min-h-[280px]': fill }" :aria-label="ariaLabel">
    <div v-for="ad in ads" :key="ad.title" class="ad-rotator-item absolute inset-0">
      <AdSlot :ad="ad" :layout="fill ? 'fill' : 'block'" />
    </div>
  </div>
</template>
