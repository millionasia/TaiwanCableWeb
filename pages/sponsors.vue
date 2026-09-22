<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "贊助會員查詢" })

const sponsors = millionasia.getSponsors()
const keyword = ref("")
const tier = ref("")
const tiers = [
  { value: "platinum", label: "白金贊助會員" },
  { value: "gold", label: "黃金贊助會員" },
  { value: "general", label: "一般贊助會員" }
]

const sponsorRecords = tiers.flatMap((item) => sponsors[item.value].map((sponsor, index) => ({
  ...sponsor,
  id: `${item.value}-${index + 1}`,
  tier: item.value,
  tierLabel: item.label
})))

const filteredSponsors = computed(() => {
  const searchText = keyword.value.trim().toLowerCase()
  return sponsorRecords.filter((sponsor) => {
    const matchesTier = !tier.value || sponsor.tier === tier.value
    const matchesKeyword = !searchText || `${sponsor.title} ${sponsor.text} ${sponsor.tierLabel}`.toLowerCase().includes(searchText)
    return matchesTier && matchesKeyword
  })
})
</script>

<template>
  <PageHero
    eyebrow="Sponsor Directory"
    title="贊助會員查詢"
    description="依贊助級別與關鍵字查詢白金、黃金及一般贊助會員。"
  />

  <section class="bg-[#f7f9fa] py-12 md:py-16">
    <div class="container-page grid gap-6">
      <form class="panel grid gap-4 p-5 md:grid-cols-[1fr_220px] md:items-end" role="search" @submit.prevent>
        <label class="grid gap-2">
          <span class="text-sm font-black">會員名稱或服務關鍵字</span>
          <input v-model="keyword" class="min-h-12 rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="search" placeholder="輸入贊助會員或服務內容">
        </label>
        <label class="grid gap-2">
          <span class="text-sm font-black">贊助級別</span>
          <select v-model="tier" class="min-h-12 rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10">
            <option value="">全部級別</option>
            <option v-for="item in tiers" :key="item.value" :value="item.value">{{ item.label }}</option>
          </select>
        </label>
      </form>

      <div class="flex items-center justify-between gap-4 border-b border-slate-300 pb-4">
        <h2 class="text-2xl font-black">查詢結果</h2>
        <strong class="text-brand-dark">{{ filteredSponsors.length }} 筆示意資料</strong>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article v-for="sponsor in filteredSponsors" :key="sponsor.id" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <span class="text-xs font-black text-brand-red">{{ sponsor.tierLabel }}</span>
          <h3 class="mt-2 text-xl font-black">{{ sponsor.title }}</h3>
          <p class="mt-3 leading-7 text-slate-600">{{ sponsor.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
