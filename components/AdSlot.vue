<script setup>
const props = defineProps({
  ad: { type: Object, required: true },
  layout: { type: String, default: "block" }
})

const toneClass = computed(() => {
  const map = {
    red: "from-brand-red to-brand-graphite",
    silver: "from-slate-500 to-brand-graphite",
    dark: "from-brand-ink to-slate-700",
    steel: "from-brand-graphite to-slate-700"
  }
  return map[props.ad.tone] || map.steel
})
</script>

<template>
  <NuxtLink
    to="#"
    class="ad-surface min-h-[104px] bg-gradient-to-br"
    :class="[toneClass, layout === 'wide' ? 'grid md:min-h-[86px] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-4' : 'grid']"
  >
    <span class="relative z-10 w-fit rounded-full bg-[#d1a34f] px-2 py-0.5 text-[11px] font-black text-brand-ink">{{ ad.label }}</span>
    <strong class="relative z-10 text-xl leading-tight">{{ ad.title }}</strong>
    <small class="relative z-10 text-sm font-black text-white/75" :class="{ 'md:justify-self-end': layout === 'wide' }">{{ ad.text }}</small>
  </NuxtLink>
</template>
