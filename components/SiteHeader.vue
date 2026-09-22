<script setup>
import { millionasia } from "~/data/millionasia"

defineProps({
  brand: { type: Object, required: true },
  platinumSponsors: { type: Array, required: true }
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
  "/statistics": "bar-chart",
  "/metals": "chart",
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
      <div class="container-page flex min-h-9 items-center justify-between gap-3 whitespace-nowrap">
        <button
          class="grid h-9 w-9 shrink-0 place-items-center text-white xl:hidden"
          type="button"
          :aria-label="isOpen ? '關閉主要選單' : '開啟主要選單'"
          :aria-expanded="isOpen"
          aria-controls="site-nav"
          @click="isOpen = !isOpen"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <div class="ml-auto flex items-center gap-3 md:gap-4">
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
    </div>

    <div class="bg-white">
      <div class="container-page flex min-h-[68px] flex-wrap items-center gap-x-4 py-2 xl:grid xl:min-h-[96px] xl:grid-cols-[minmax(360px,0.95fr)_minmax(0,2fr)]">
        <NuxtLink
          to="/"
          class="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:gap-4"
          aria-label="臺灣區電線電纜工業同業公會首頁"
        >
          <img
            :src="brand.logo"
            :alt="brand.name"
            class="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 xl:h-16 xl:w-16"
          >
          <span class="grid min-w-0 gap-0.5">
            <strong class="whitespace-nowrap text-[13px] leading-tight text-brand-ink sm:text-lg xl:text-xl">{{ brand.name }}</strong>
            <small class="hidden text-xs font-semibold text-brand-steel xl:block">{{ brand.englishName }}</small>
          </span>
        </NuxtLink>

        <nav
          id="site-nav"
          class="hidden basis-full grid-cols-1 gap-1 border-t border-slate-200 pt-3 xl:grid xl:basis-auto xl:grid-cols-5 xl:border-0 xl:pt-0"
          :class="{ '!grid': isOpen }"
          aria-label="主要導覽"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="flex min-h-10 items-center gap-1 whitespace-nowrap rounded-lg px-1 py-1.5 text-[16px] font-black text-slate-700 transition hover:bg-slate-100 hover:text-brand-dark"
            :class="{ 'bg-slate-100 text-brand-dark': isCurrent(item.to) }"
            :aria-current="isCurrent(item.to) ? 'page' : undefined"
          >
            <NavIcon
              :name="navigationIcons[item.to]"
              class="h-3.5 w-3.5 shrink-0 text-brand-red"
            />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>

    <section class="border-t border-slate-300 bg-[#e3e8ec] py-2" aria-label="白金贊助會員">
      <div class="container-page">
        <AdRotator :ads="platinumSponsors" aria-label="白金贊助會員輪播" compact />
      </div>
    </section>
  </header>
</template>
