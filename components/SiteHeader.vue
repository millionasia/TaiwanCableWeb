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
  "/members": "users",
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
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        <a :href="`tel:+${contact.phone.replace(/-/g, '')}`">{{ contact.phone }}</a>
      </div>
    </div>

    <div class="bg-white">
      <div class="container-page flex min-h-[88px] flex-wrap items-center justify-between gap-x-5 py-3 lg:grid lg:min-h-[124px] lg:grid-cols-[minmax(330px,1fr)_minmax(520px,1.25fr)] lg:py-4">
        <NuxtLink
          to="/"
          class="flex min-w-0 flex-1 items-center gap-4 lg:gap-5"
          aria-label="臺灣區電線電纜工業同業公會首頁"
        >
          <img
            :src="brand.logo"
            :alt="brand.name"
            class="h-14 w-14 shrink-0 bg-white object-contain sm:h-16 sm:w-16 lg:h-[76px] lg:w-[76px]"
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
          class="hidden basis-full grid-cols-1 gap-1 border-t border-slate-200 pt-3 lg:grid lg:basis-auto lg:grid-cols-3 lg:border-0 lg:pt-0"
          :class="{ '!grid': isOpen }"
          aria-label="主要導覽"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-100 hover:text-brand-dark"
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
