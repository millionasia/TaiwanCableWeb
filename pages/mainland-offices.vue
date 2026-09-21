<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "會員大陸通訊處" })
useSeoMeta({
  description: "臺灣區電線電纜工業同業公會會員大陸及海外通訊處資料查詢。"
})

const keyword = ref("")
const offices = millionasia.getMainlandOffices()

const filteredOffices = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  if (!query) return offices

  return offices.filter((item) => {
    const text = [
      item.id,
      item.member,
      ...item.offices.flatMap((office) => [office.name, office.address])
    ].join(" ").toLowerCase()

    return text.includes(query)
  })
})
</script>

<template>
  <PageHero
    eyebrow="Mainland Offices"
    title="會員大陸通訊處"
    description="依會員公司查詢其大陸及海外據點名稱與通訊地址。"
  />

  <section class="bg-[#f7f9fa] py-12 md:py-16">
    <div class="container-page">
      <div class="mb-6 grid gap-4 border-b border-slate-300 pb-6 md:grid-cols-[1fr_auto] md:items-end">
        <label class="grid max-w-2xl gap-2">
          <span class="text-sm font-black">搜尋會員、據點或地址</span>
          <span class="relative">
            <NavIcon name="search" class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              v-model="keyword"
              type="search"
              class="min-h-12 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-4 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10"
              placeholder="例如：東莞、蘇州、公司名稱"
            >
          </span>
        </label>
        <strong class="text-sm text-brand-dark">{{ filteredOffices.length }} 家會員</strong>
      </div>

      <p class="mb-6 border-l-4 border-brand-red bg-white px-4 py-3 text-sm leading-6 text-slate-600">
        本頁依公會原網站資料整理；據點與地址可能異動，聯繫前請再向公會或會員公司確認。
      </p>

      <div class="grid gap-4">
        <article v-for="item in filteredOffices" :key="item.id" class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <header class="flex flex-col gap-1 border-b border-slate-200 bg-[#e7ecef] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 class="text-lg font-black">{{ item.member }}</h2>
            <span class="text-sm font-black text-brand-dark">會員編號 {{ item.id }}</span>
          </header>
          <div class="divide-y divide-slate-200">
            <div v-for="office in item.offices" :key="`${office.name}-${office.address}`" class="grid gap-2 px-5 py-4 md:grid-cols-[minmax(240px,.8fr)_1.4fr] md:gap-6">
              <h3 class="font-black text-slate-900">{{ office.name }}</h3>
              <address class="not-italic leading-7 text-slate-600">{{ office.address }}</address>
            </div>
          </div>
        </article>
      </div>

      <p v-if="filteredOffices.length === 0" class="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
        查無符合條件的通訊處資料。
      </p>
    </div>
  </section>
</template>
