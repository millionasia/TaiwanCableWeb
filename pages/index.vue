<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "首頁" })

const home = millionasia.home
const ads = millionasia.getAds()
const newsCategories = millionasia.newsCategories
const latestNews = millionasia.latestNews
const products = millionasia.getProducts()
const activeCategory = ref("全部")
const productKeyword = ref("")

const filteredNews = computed(() => {
  const news = activeCategory.value === "全部"
    ? latestNews
    : latestNews.filter((item) => item.category === activeCategory.value)

  return news.slice(0, 6)
})

const filteredProducts = computed(() => {
  const keyword = productKeyword.value.trim().toLocaleLowerCase("zh-TW")
  if (!keyword) return products

  return products.filter((product) => {
    return `${product.title} ${product.text}`.toLocaleLowerCase("zh-TW").includes(keyword)
  })
})
</script>

<template>
  <section aria-label="首頁主視覺">
    <HeroCarousel :images="home.heroImages">
      <div class="container-page flex min-h-[520px] items-center py-14 md:min-h-[560px] md:py-16">
        <div class="max-w-3xl pb-10 sm:pb-0">
          <h1 class="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
            {{ home.title }}
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            {{ home.lead }}
          </p>
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

  <section class="relative overflow-hidden bg-brand-ink py-16 text-white">
    <img src="/images/hero-cable-lab.png" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30" aria-hidden="true">
    <div class="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/90 to-black/60" aria-hidden="true" />

    <div class="container-page relative z-10">
      <div class="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
        <div>
          <p class="text-xs font-black uppercase text-red-300">Product Search</p>
          <h2 class="mt-2 text-4xl font-black">產品分類查詢</h2>
          <p class="mt-4 leading-7 text-white/75">輸入產品名稱或用途，快速篩選公會會員主要產品類別。</p>

          <label for="product-search" class="sr-only">搜尋產品分類</label>
          <div class="mt-6 flex min-h-12 items-center gap-3 rounded-lg border border-white/25 bg-black/35 px-4 backdrop-blur-sm focus-within:border-white">
            <NavIcon name="search" class="h-5 w-5 shrink-0 text-red-300" />
            <input
              id="product-search"
              v-model="productKeyword"
              type="search"
              placeholder="例如：高壓電纜、銅線、電子線"
              class="min-w-0 flex-1 bg-transparent py-3 text-white outline-none placeholder:text-white/50"
            >
          </div>
        </div>

        <div class="grid gap-3 sm:grid-cols-2">
          <NuxtLink
            v-for="product in filteredProducts"
            :key="product.index"
            :to="{ path: '/products', query: { category: product.title } }"
            class="group flex min-h-[112px] gap-4 rounded-lg border border-white/20 bg-black/35 p-4 backdrop-blur-sm transition hover:border-red-300 hover:bg-black/55"
          >
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-red text-sm font-black text-white">{{ product.index }}</span>
            <span class="min-w-0">
              <strong class="text-lg text-white group-hover:text-red-200">{{ product.title }}</strong>
              <span class="mt-1 block text-sm leading-6 text-white/65">{{ product.text }}</span>
            </span>
          </NuxtLink>

          <p v-if="filteredProducts.length === 0" class="rounded-lg border border-white/20 bg-black/35 p-5 text-white/75 sm:col-span-2">
            找不到符合「{{ productKeyword }}」的產品分類。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
