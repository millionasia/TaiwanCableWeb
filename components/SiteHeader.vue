<script setup>
import { millionasia } from "~/data/millionasia"

defineProps({
  brand: { type: Object, required: true },
  platinumSponsors: { type: Array, required: true }
})

const route = useRoute()
const isOpen = ref(false)
const navigation = millionasia.getNavigation()
const contact = millionasia.getContact()
const visitorCount = "6102564"

const toPath = (to) => typeof to === "string" ? to : to.path

const isChildCurrent = (child) => {
  if (route.path !== toPath(child.to)) return false
  const requestedMetal = typeof child.to === "object" ? child.to.query?.metal : undefined
  if (!requestedMetal) return true
  return (route.query.metal || "copper") === requestedMetal
}

const isCurrent = (item) => {
  return route.path === toPath(item.to) || item.children.some((child) => route.path === toPath(child.to))
}

watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="bg-brand-graphite text-xs text-white/80">
      <div class="container-page flex min-h-9 items-center gap-2 whitespace-nowrap">
        <button
          class="grid h-9 w-9 shrink-0 place-items-center text-white xl:hidden"
          type="button"
          :aria-label="isOpen ? '關閉主要選單' : '開啟主要選單'"
          :aria-expanded="isOpen"
          aria-controls="site-nav-mobile"
          @click="isOpen = !isOpen"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <strong class="inline-flex shrink-0 items-center gap-1 font-black text-white">
          <span>參觀人數：</span>
          <span class="text-[13px]">{{ visitorCount }}</span>
        </strong>

        <div class="ml-auto flex items-center gap-3 md:gap-4">
          <span class="hidden md:inline">{{ contact.address }}</span>
          <a class="hidden md:inline" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          <a :href="`tel:+${contact.phone.replace(/-/g, '')}`">{{ contact.phone }}</a>
          <nav class="flex items-center gap-2 font-black text-white" aria-label="語系選擇">
            <NuxtLink :to="route.fullPath" class="inline-flex items-center gap-1.5" lang="zh-Hant" aria-current="page">
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
      <div class="container-page flex min-h-[68px] flex-wrap items-center gap-x-4 py-2 xl:grid xl:min-h-[96px] xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
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
            <strong class="whitespace-nowrap text-[13px] leading-tight text-brand-ink sm:text-lg xl:text-[25px]">{{ brand.name }}</strong>
            <small class="hidden text-sm font-semibold text-brand-steel xl:block">{{ brand.englishName }}</small>
          </span>
        </NuxtLink>

        <nav class="hidden items-center gap-1 xl:grid xl:w-fit xl:grid-cols-[repeat(3,max-content)] xl:justify-self-start" aria-label="主要導覽">
          <div v-for="item in navigation" :key="item.label" class="group relative">
            <NuxtLink
              :to="item.to"
              class="flex min-h-11 items-center justify-start gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[16px] font-black text-slate-700 transition hover:bg-slate-100 hover:text-brand-dark"
              :class="{ 'bg-slate-100 text-brand-dark': isCurrent(item) }"
              :aria-current="isCurrent(item) ? 'page' : undefined"
            >
              <NavIcon :name="item.icon" class="h-4 w-4 shrink-0 text-brand-red" />
              <span>{{ item.label }}</span>
              <svg v-if="item.children.length" class="h-3.5 w-3.5 text-slate-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </NuxtLink>

            <div
              v-if="item.children.length"
              class="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 border border-slate-200 bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="flex min-h-10 items-center border-l-2 border-transparent px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-brand-red hover:bg-slate-50 hover:text-brand-dark"
                :class="{ 'border-brand-red bg-slate-50 text-brand-dark': isChildCurrent(child) }"
                :aria-current="isChildCurrent(child) ? 'page' : undefined"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </nav>

        <nav
          id="site-nav-mobile"
          class="basis-full border-t border-slate-200 pt-3 xl:hidden"
          :class="isOpen ? 'grid' : 'hidden'"
          aria-label="行動版主要導覽"
        >
          <section v-for="item in navigation" :key="item.label" class="border-b border-slate-100 py-2 last:border-b-0">
            <NuxtLink
              :to="item.to"
              class="flex min-h-10 items-center gap-2 px-2 text-base font-black text-slate-800"
              :class="{ 'text-brand-dark': isCurrent(item) }"
            >
              <NavIcon :name="item.icon" class="h-4 w-4 shrink-0 text-brand-red" />
              {{ item.label }}
            </NuxtLink>
            <div v-if="item.children.length" class="grid grid-cols-2 gap-1 pb-1 pl-8 pr-2">
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="flex min-h-9 items-center rounded-md px-2 text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-brand-dark"
                :class="{ 'bg-slate-100 text-brand-dark': isChildCurrent(child) }"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </section>
        </nav>
      </div>
    </div>

    <section class="border-t border-slate-300 bg-[#e3e8ec] py-2" aria-label="白金贊助會員">
      <div class="container-page">
        <AdRotator
          :ads="platinumSponsors"
          aria-label="白金贊助會員輪播"
          class="xl:!min-h-[112px]"
          compact
        />
      </div>
    </section>
  </header>
</template>
