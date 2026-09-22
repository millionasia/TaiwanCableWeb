<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "首頁" })

const home = millionasia.home
const sponsors = millionasia.getSponsors()
const newsCategories = millionasia.newsCategories
const latestNews = millionasia.latestNews
const products = millionasia.getProducts()
const metalPrices = millionasia.getMetalPrices()
const activeCategory = ref("全部")

const productTones = {
  "01": "bg-[#202a34] text-red-100",
  "02": "bg-[#314451] text-sky-100",
  "03": "bg-[#1d4a54] text-cyan-100",
  "04": "bg-[#4b3947] text-rose-100",
  "05": "bg-[#243f3a] text-emerald-100",
  "06": "bg-[#4a4f56] text-zinc-100",
  "07": "bg-[#49343a] text-red-100",
  "08": "bg-[#2c3340] text-indigo-100"
}

const filteredNews = computed(() => {
  const news = activeCategory.value === "全部"
    ? latestNews
    : latestNews.filter((item) => item.category === activeCategory.value)

  return news.slice(0, 10)
})

</script>

<template>
  <section aria-label="首頁主視覺">
    <HeroCarousel :images="home.heroImages">
      <div class="container-page flex min-h-[520px] items-center py-14 md:min-h-[560px] md:py-16">
        <div class="max-w-3xl pb-10 sm:pb-0">
          <h1 class="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl">
            {{ home.title }}
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            {{ home.lead }}
          </p>
        </div>
      </div>
    </HeroCarousel>
  </section>

  <section class="border-y border-slate-300 bg-[#d7e0e5] py-12">
    <div class="container-page grid gap-6 lg:grid-cols-[184px_1fr]">
      <AdRotator
        :ads="sponsors.gold"
        aria-label="黃金贊助會員輪播"
        class="lg:col-start-2 lg:row-start-1"
        desktop-short
      />

      <LeftAdMarquee
        :ads="sponsors.general"
        class="hidden self-start lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:block"
        uniform
      />

      <section class="panel min-w-0 lg:col-start-2 lg:row-start-2">
          <div class="flex items-end justify-between gap-4 border-b border-slate-200 p-5">
            <div>
              <p class="eyebrow">Latest News</p>
              <h2 class="text-3xl font-black">最新消息</h2>
            </div>
            <span class="text-sm font-bold text-slate-500">最多顯示十筆</span>
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
            <article
              v-for="item in filteredNews"
              :key="`${item.isoDate}-${item.title}`"
              class="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[108px_96px_1fr] md:items-start md:gap-4"
            >
              <time class="font-black text-brand-dark" :datetime="item.isoDate">{{ item.date }}</time>
              <span class="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black text-brand-steel">{{ item.category }}</span>
              <div class="min-w-0">
                <h3 class="text-lg font-black">{{ item.title }}</h3>
                <p class="mt-1 text-slate-600">{{ item.text }}</p>
              </div>
            </article>
          </div>
      </section>

      <MobileAdMarquee :ads="sponsors.general" class="lg:hidden" />
    </div>
  </section>

  <section class="bg-[#20262d] py-10 text-white sm:py-14 lg:py-16">
    <div class="container-page">
      <WeeklyMetalTrends :prices="metalPrices" />

      <div class="border-b border-white/15 pb-5 sm:pb-8">
        <div>
          <p class="text-xs font-black uppercase text-red-300">Product Categories</p>
          <h2 class="mt-2 text-3xl font-black sm:text-4xl">產品分類查詢</h2>
        </div>
      </div>

      <div class="mt-5 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <NuxtLink
          v-for="product in products"
          :key="product.index"
          :to="{ path: '/products', query: { category: product.title } }"
          class="group relative min-h-[160px] overflow-hidden rounded-lg border border-white/15 p-4 transition hover:-translate-y-1 hover:border-red-300 hover:shadow-2xl sm:min-h-[190px] sm:p-5 lg:min-h-[218px]"
          :class="productTones[product.index]"
        >
          <ProductCategoryPattern :index="product.index" />
          <span class="relative z-10 flex h-full flex-col">
            <span class="text-sm font-black text-white/70">{{ product.index }}</span>
            <strong class="mt-auto block text-xl text-white">{{ product.title }}</strong>
            <span class="mt-1 block text-xs font-bold uppercase text-white/55">{{ product.english }}</span>
            <span class="mt-3 block text-sm leading-6 text-white/75">{{ product.text }}</span>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
