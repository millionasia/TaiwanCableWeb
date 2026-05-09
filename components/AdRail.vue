<script setup>
import { millionasia } from "~/data/millionasia"

const props = defineProps({
  ads: { type: Array, default: null }
})

const railAds = computed(() => props.ads || millionasia.getAds().rightRail)
</script>

<template>
  <aside class="grid gap-3 lg:sticky lg:top-32" aria-label="右側廣告">
    <AdSlot v-for="ad in railAds" :key="ad.title" :ad="ad" />
  </aside>
</template>
