<script setup>
defineProps({
  ads: { type: Array, required: true }
})
</script>

<template>
  <aside class="mobile-ad-marquee overflow-hidden" aria-label="一般贊助會員跑馬">
    <div class="mobile-ad-marquee-track flex w-max">
      <div
        v-for="group in 2"
        :key="group"
        class="flex shrink-0 gap-3 pr-3"
        :aria-hidden="group === 2"
      >
        <NuxtLink
          v-for="ad in ads"
          :key="`${group}-${ad.title}`"
          to="#"
          class="grid min-h-28 w-[46vw] min-w-[150px] max-w-[220px] content-center gap-1 rounded-lg bg-gradient-to-br from-brand-graphite to-slate-600 p-4 text-white even:from-brand-red even:to-brand-graphite"
          :tabindex="group === 2 ? -1 : undefined"
        >
          <span class="w-fit rounded-full bg-[#d1a34f] px-2 py-0.5 text-[11px] font-black text-brand-ink">{{ ad.label }}</span>
          <strong class="text-base leading-tight">{{ ad.title }}</strong>
          <small class="font-bold text-white/75">{{ ad.text }}</small>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
