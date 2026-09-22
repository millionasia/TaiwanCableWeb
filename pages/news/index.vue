<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "最新消息" })

const activeCategory = ref("全部")
const categories = millionasia.newsCategories
const news = computed(() => activeCategory.value === "全部"
  ? millionasia.latestNews
  : millionasia.latestNews.filter((item) => item.category === activeCategory.value))
</script>

<template>
  <PageHero
    eyebrow="Latest News"
    title="最新消息"
    description="瀏覽公會公告、金屬月刊、產業動態、法規標準及活動訊息。"
  />

  <div class="container-page py-10 sm:py-14">
    <div class="flex gap-2 overflow-x-auto border-b border-slate-200 pb-4" role="tablist" aria-label="最新消息分類">
      <button
        v-for="category in ['全部', ...categories]"
        :key="category"
        type="button"
        class="min-h-10 shrink-0 rounded-md border px-4 text-sm font-black transition"
        :class="activeCategory === category ? 'border-brand-dark bg-brand-dark text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-brand-dark'"
        role="tab"
        :aria-selected="activeCategory === category"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="divide-y divide-slate-200 border-b border-slate-200">
      <NuxtLink
        v-for="item in news"
        :key="item.slug"
        :to="`/news/${item.slug}`"
        class="group grid gap-3 py-6 transition hover:bg-slate-50 sm:grid-cols-[112px_104px_1fr] sm:px-4"
      >
        <time class="font-black text-brand-dark" :datetime="item.isoDate">{{ item.date }}</time>
        <span class="h-fit w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black text-brand-steel">{{ item.category }}</span>
        <span>
          <strong class="block text-lg group-hover:text-brand-red">{{ item.title }}</strong>
          <span class="mt-1 block leading-7 text-slate-600">{{ item.text }}</span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
