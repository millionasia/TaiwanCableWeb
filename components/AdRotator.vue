<script setup>
defineProps({
  ads: { type: Array, required: true },
  ariaLabel: { type: String, required: true }
})
</script>

<template>
  <div class="ad-rotator relative min-h-[112px]" :aria-label="ariaLabel">
    <div v-for="ad in ads" :key="ad.title" class="ad-rotator-item absolute inset-0">
      <AdSlot :ad="ad" />
    </div>
  </div>
</template>
