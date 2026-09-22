<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "金屬統計資料" })

const statistics = millionasia.getMetalStatistics()
const activeCategory = ref("全部資料")
const keyword = ref("")

const filteredRecords = computed(() => {
  const query = keyword.value.trim().toLowerCase()

  return statistics.records.filter((record) => {
    const categoryMatched = activeCategory.value === "全部資料" || record.category === activeCategory.value
    const keywordMatched = !query || `${record.title} ${record.category}`.toLowerCase().includes(query)
    return categoryMatched && keywordMatched
  })
})
</script>

<template>
  <PageHero
    eyebrow="Metal Statistics"
    title="金屬統計資料"
    description="查詢 LME 每日行情、金屬月刊、產銷統計及歷史價格走勢圖。"
  />

  <section class="bg-white py-10 md:py-12">
    <div class="container-page">
      <div class="mb-5 grid gap-3 md:grid-cols-[220px_1fr]">
        <label class="grid gap-1.5 text-sm font-black text-slate-700">
          資料類別
          <select v-model="activeCategory" class="min-h-11 rounded-md border border-slate-300 bg-white px-3 font-normal">
            <option v-for="category in statistics.categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </label>

        <label class="grid gap-1.5 text-sm font-black text-slate-700">
          關鍵字
          <span class="relative">
            <NavIcon name="search" class="pointer-events-none absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <input
              v-model="keyword"
              type="search"
              class="min-h-11 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 font-normal"
              placeholder="搜尋資料名稱"
            >
          </span>
        </label>
      </div>

      <section class="panel" aria-labelledby="statistics-list-title">
        <header class="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 p-5">
          <div>
            <p class="eyebrow">Downloads</p>
            <h2 id="statistics-list-title" class="text-2xl font-black">統計資料列表</h2>
          </div>
          <span class="text-sm text-slate-500">共 {{ filteredRecords.length }} 筆｜模擬資料</span>
        </header>

        <div v-if="filteredRecords.length" class="divide-y divide-slate-200">
          <article
            v-for="record in filteredRecords"
            :key="`${record.date}-${record.title}`"
            class="grid gap-3 p-5 md:grid-cols-[108px_120px_1fr_auto] md:items-center"
          >
            <time class="font-black text-brand-dark">{{ record.date }}</time>
            <span class="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black text-brand-steel">
              {{ record.category }}
            </span>
            <div class="min-w-0">
              <h3 class="font-black text-brand-ink">{{ record.title }}</h3>
              <p class="mt-1 text-sm text-slate-500">{{ record.format }} 格式</p>
            </div>
            <NuxtLink
              to="#"
              class="inline-flex min-h-10 w-fit items-center justify-center rounded-md bg-brand-ink px-4 text-sm font-black text-white transition hover:bg-brand-dark"
            >
              下載
            </NuxtLink>
          </article>
        </div>

        <p v-else class="p-8 text-center text-slate-500">找不到符合條件的資料。</p>
      </section>
    </div>
  </section>
</template>
