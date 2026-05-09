<script setup>
const props = defineProps({
  ads: { type: Array, required: true }
})

const duplicatedAds = computed(() => [...props.ads, ...props.ads])
</script>

<template>
  <aside class="ad-marquee overflow-hidden rounded-lg border border-slate-200 bg-white shadow-steel lg:sticky lg:top-32" aria-label="左側廣告跑馬">
    <div class="relative h-60 overflow-hidden lg:h-[520px]">
      <div class="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-white to-white/0" />
      <div class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-white to-white/0" />
      <div class="ad-marquee-track grid gap-3 p-3">
        <NuxtLink
          v-for="(ad, index) in duplicatedAds"
          :key="`${ad.title}-${index}`"
          to="#"
          class="grid min-h-32 content-center gap-1 rounded-lg bg-gradient-to-br from-brand-graphite to-slate-600 p-4 text-white even:from-brand-red even:to-brand-graphite"
        >
          <span class="w-fit rounded-full bg-[#d1a34f] px-2 py-0.5 text-[11px] font-black text-brand-ink">{{ ad.label }}</span>
          <strong class="text-lg leading-tight">{{ ad.title }}</strong>
          <small class="font-black text-white/75">{{ ad.text }}</small>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
