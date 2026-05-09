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

    <div class="container-page flex min-h-[78px] items-center justify-between gap-5">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-3" aria-label="臺灣區電線電纜工業同業公會首頁">
        <img
          :src="brand.logo"
          :alt="brand.name"
          class="h-12 w-12 shrink-0 rounded-full bg-white object-contain"
        >
        <span class="grid min-w-0 gap-0.5">
          <strong class="truncate text-[17px] leading-tight text-brand-ink">{{ brand.name }}</strong>
          <small class="hidden truncate text-xs text-brand-steel md:block">{{ brand.englishName }}</small>
        </span>
      </NuxtLink>

      <button
        class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-black text-brand-ink md:hidden"
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
        class="absolute inset-x-4 top-[78px] hidden rounded-lg border border-slate-200 bg-white p-2 shadow-steel md:static md:flex md:border-0 md:bg-transparent md:p-0 md:shadow-none"
        :class="{ '!grid': isOpen }"
        aria-label="主要導覽"
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-3 py-2 text-sm font-black text-slate-700 hover:bg-slate-100 hover:text-brand-dark"
          :class="{ 'bg-slate-100 text-brand-dark': isCurrent(item.to) }"
          :aria-current="isCurrent(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
