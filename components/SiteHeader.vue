<script setup>
import { millionasia } from "~/data/millionasia"

defineProps({
  brand: { type: Object, required: true }
})

const route = useRoute()
const isOpen = ref(false)
const navigation = millionasia.getNavigation()
const contact = millionasia.getContact()

const isCurrent = (to) => {
  if (to === "/") return route.path === "/"
  return route.path.startsWith(to)
}

watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="bg-brand-graphite text-xs text-white/80">
      <div class="container-page flex min-h-9 items-center justify-end gap-4 whitespace-nowrap">
        <span class="hidden md:inline">{{ contact.address }}</span>
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        <a :href="`tel:+${contact.phone.replace(/-/g, '')}`">{{ contact.phone }}</a>
      </div>
    </div>

    <div class="border-b border-slate-200 bg-white">
      <div class="container-page flex min-h-[88px] items-center justify-between gap-5 py-3 md:min-h-[104px]">
        <NuxtLink
          to="/"
          class="flex min-w-0 flex-1 items-center gap-4 md:gap-5"
          aria-label="臺灣區電線電纜工業同業公會首頁"
        >
        <img
          :src="brand.logo"
          :alt="brand.name"
          class="h-14 w-14 shrink-0 bg-white object-contain md:h-[72px] md:w-[72px]"
        >
        <span class="grid min-w-0 gap-1">
          <strong class="text-base leading-tight text-brand-ink sm:text-xl md:text-2xl">{{ brand.name }}</strong>
          <small class="hidden text-sm font-semibold text-brand-steel sm:block md:text-base">{{ brand.englishName }}</small>
        </span>
        </NuxtLink>

        <button
          class="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-black text-brand-ink md:hidden"
          type="button"
          :aria-expanded="isOpen"
          aria-controls="site-nav"
          @click="isOpen = !isOpen"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          選單
        </button>
      </div>
    </div>

    <div class="bg-slate-50">
      <nav
        id="site-nav"
        class="container-page hidden gap-1 py-2 md:flex md:min-h-[54px] md:items-center"
        :class="{ '!grid': isOpen }"
        aria-label="主要導覽"
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-4 py-2.5 text-sm font-black text-slate-700 hover:bg-white hover:text-brand-dark"
          :class="{ 'bg-white text-brand-dark shadow-sm': isCurrent(item.to) }"
          :aria-current="isCurrent(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
