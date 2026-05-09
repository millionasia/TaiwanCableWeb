<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "資料中心" })
const market = millionasia.market
const downloads = millionasia.downloads
</script>

<template>
  <PageHero
    eyebrow="Data Center"
    title="資料中心"
    description="集中呈現 LME 銅價、產業文件、標準規範與會員常用下載資料。"
  />
  <section class="py-16">
    <div class="container-page grid gap-6 lg:grid-cols-[1fr_300px]">
      <div class="grid gap-5">
        <section class="panel">
          <div class="flex items-center justify-between border-b border-slate-200 p-5">
            <h2 class="text-3xl font-black">LME 參考行情</h2>
            <span class="text-sm font-black text-slate-500">模擬資料</span>
          </div>
          <dl>
            <div v-for="item in market" :key="item.metal" class="flex items-center justify-between border-b border-slate-200 p-5 last:border-b-0">
              <dt class="font-black text-slate-600">{{ item.metal }}</dt>
              <dd class="font-black">{{ item.value }}</dd>
            </div>
          </dl>
        </section>

        <section class="panel">
          <div class="flex items-center justify-between border-b border-slate-200 p-5">
            <h2 class="text-3xl font-black">常用下載</h2>
            <NuxtLink to="#" class="font-black text-brand-dark underline decoration-2 underline-offset-4">全部資料</NuxtLink>
          </div>
          <div>
            <NuxtLink v-for="download in downloads" :key="download" to="#" class="flex items-center justify-between border-b border-slate-200 p-5 font-black last:border-b-0 hover:bg-slate-50">
              <span>{{ download }}</span>
              <span aria-hidden="true">下載</span>
            </NuxtLink>
          </div>
        </section>
      </div>
      <AdRail />
    </div>
  </section>
</template>
