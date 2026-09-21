<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "首頁" })

const home = millionasia.home
const ads = millionasia.getAds()
const newsCategories = millionasia.newsCategories
const latestNews = millionasia.latestNews
const activeCategory = ref("全部")

const filteredNews = computed(() => {
  const news = activeCategory.value === "全部"
    ? latestNews
    : latestNews.filter((item) => item.category === activeCategory.value)

  return news.slice(0, 6)
})
</script>

<template>
  <section aria-label="首頁主視覺">
    <HeroCarousel :images="home.heroImages">
      <div class="container-page flex min-h-[520px] items-center py-14 md:min-h-[560px] md:py-16">
        <div class="max-w-3xl pb-10 sm:pb-0">
          <p class="text-xs font-black uppercase text-red-300">{{ home.eyebrow }}</p>
          <h1 class="mt-3 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
          {{ home.title }}
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            {{ home.lead }}
          </p>
          <div class="mt-7 flex flex-wrap gap-3">
            <NuxtLink to="/members" class="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-red px-5 font-black text-white hover:bg-red-700">
              會員查詢
            </NuxtLink>
            <NuxtLink to="/resources" class="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 bg-black/30 px-5 font-black text-white backdrop-blur-sm hover:bg-white hover:text-brand-ink">
              資料中心
            </NuxtLink>
          </div>
        </div>
      </div>
    </HeroCarousel>
  </section>

  <section class="border-y border-slate-200 bg-brand-silver py-12">
    <div class="container-page grid gap-6 lg:grid-cols-[184px_1fr]">
      <LeftAdMarquee :ads="ads.leftMarquee" />

      <div class="grid gap-5">
        <AdRotator :ads="ads.newsRotator" aria-label="最新消息上方廣告輪播" />

        <section class="panel">
          <div class="flex items-end justify-between gap-4 border-b border-slate-200 p-5">
            <div>
              <p class="eyebrow">Latest News</p>
              <h2 class="text-3xl font-black">最新消息</h2>
            </div>
            <NuxtLink to="/resources" class="font-black text-brand-dark underline decoration-2 underline-offset-4">
              查看全部
            </NuxtLink>
          </div>

          <div class="flex gap-2 overflow-x-auto border-b border-slate-200 bg-slate-50 p-4" role="tablist" aria-label="最新消息分類">
            <button
              v-for="category in ['全部', ...newsCategories]"
              :key="category"
              type="button"
              class="min-h-10 shrink-0 rounded-lg border px-4 text-sm font-black transition"
              :class="activeCategory === category ? 'border-brand-dark bg-brand-dark text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-brand-dark'"
              role="tab"
              :aria-selected="activeCategory === category"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>

          <div class="grid">
            <NuxtLink
              v-for="item in filteredNews"
              :key="`${item.isoDate}-${item.title}`"
              to="/resources"
              class="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[108px_96px_1fr] md:items-start md:gap-4 hover:bg-slate-50"
            >
              <time class="font-black text-brand-dark" :datetime="item.isoDate">{{ item.date }}</time>
              <span class="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black text-brand-steel">{{ item.category }}</span>
              <div class="min-w-0">
                <h3 class="text-lg font-black">{{ item.title }}</h3>
                <p class="mt-1 text-slate-600">{{ item.text }}</p>
              </div>
            </NuxtLink>
          </div>
        </section>

      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="container-page">
      <p class="eyebrow">Main Services</p>
      <h2 class="text-4xl font-black">主要服務</h2>
      <div class="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink v-for="service in home.services" :key="service.title" :to="service.to" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50">
          <span class="grid h-11 w-11 place-items-center rounded-full bg-brand-ink font-black text-white">{{ service.index }}</span>
          <h3 class="mt-7 text-xl font-black">{{ service.title }}</h3>
          <p class="mt-2 text-slate-600">{{ service.text }}</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
