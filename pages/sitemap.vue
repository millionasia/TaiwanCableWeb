<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "Site Map" })
const links = millionasia.getFooterNavigation()
</script>

<template>
  <PageHero
    eyebrow="Site Map"
    title="網站導覽"
    description="整理網站主要分頁，作為 footer navigation 的延伸入口，也協助搜尋引擎理解網站架構。"
  />
  <section class="py-16">
    <div class="container-page grid gap-6 lg:grid-cols-[1fr_300px]">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="grid min-h-24 content-center rounded-lg border border-slate-200 bg-white p-6 text-xl font-black shadow-sm hover:bg-slate-50">
          {{ link.label }}
        </NuxtLink>
      </div>
      <AdRail />
    </div>
  </section>
</template>
