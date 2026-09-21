<script setup>
import { millionasia } from "~/data/millionasia"

defineProps({
  brand: { type: Object, required: true }
})

const route = useRoute()
const isOpen = ref(false)
const navigation = millionasia.getNavigation().filter((item) => item.to !== "/")
const contact = millionasia.getContact()
const navigationIcons = {
  "/about": "building",
  "/council": "landmark",
  "/members": "users",
  "/mainland-offices": "map-pin",
  "/products": "cable",
  "/resources": "library",
  "/join": "user-plus",
  "/contact": "mail"
}

const isCurrent = (to) => {
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
        <a class="hidden md:inline" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        <a :href="`tel:+${contact.phone.replace(/-/g, '')}`">{{ contact.phone }}</a>
        <nav class="flex items-center gap-2 font-black text-white" aria-label="語系選擇">
          <NuxtLink :to="route.path" class="inline-flex items-center gap-1.5" lang="zh-Hant" aria-current="page">
            <NavIcon name="globe" class="h-4 w-4" />
            <span>繁中</span>
          </NuxtLink>
          <span class="text-white/40" aria-hidden="true">|</span>
          <a href="https://www.taiwancable.org.tw/" lang="en">ENG</a>
        </nav>
      </div>
    </div>

    <div class="bg-white">
      <div class="container-page flex min-h-[112px] flex-wrap items-center justify-between gap-x-5 py-3 lg:grid lg:min-h-[154px] lg:grid-cols-[minmax(430px,1fr)_minmax(600px,1.25fr)] lg:py-4">
        <NuxtLink
          to="/"
          class="flex min-w-0 flex-1 items-center gap-4 lg:gap-5"
          aria-label="臺灣區電線電纜工業同業公會首頁"
        >
          <img
            :src="brand.logo"
            :alt="brand.name"
            class="h-[63px] w-[63px] shrink-0 bg-white object-contain sm:h-[72px] sm:w-[72px] lg:h-[86px] lg:w-[86px]"
          >
          <span class="grid min-w-0 gap-1">
            <strong class="text-base leading-tight text-brand-ink sm:text-xl lg:text-2xl">{{ brand.name }}</strong>
            <small class="hidden text-sm font-semibold text-brand-steel sm:block">{{ brand.englishName }}</small>
          </span>
        </NuxtLink>

        <button
          class="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-black text-brand-ink lg:hidden"
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

        <nav
          id="site-nav"
          class="hidden basis-full grid-cols-1 gap-1 border-t border-slate-200 pt-3 lg:grid lg:basis-auto lg:grid-cols-4 lg:border-0 lg:pt-0"
          :class="{ '!grid': isOpen }"
          aria-label="主要導覽"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-[14px] font-black text-slate-700 transition hover:bg-slate-100 hover:text-brand-dark"
            :class="{ 'bg-slate-100 text-brand-dark': isCurrent(item.to) }"
            :aria-current="isCurrent(item.to) ? 'page' : undefined"
          >
            <NavIcon
              :name="navigationIcons[item.to]"
              class="h-5 w-5 shrink-0 text-brand-red"
            />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
