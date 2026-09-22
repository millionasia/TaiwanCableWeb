<script setup>
import { millionasia } from "~/data/millionasia"

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const item = millionasia.latestNews.find((news) => news.slug === slug)

if (!item) {
  throw createError({ statusCode: 404, statusMessage: "找不到這則最新消息" })
}

useHead({ title: item.title })
</script>

<template>
  <PageHero eyebrow="Latest News" title="最新消息" :description="item.category" />

  <article class="container-page max-w-5xl py-10 sm:py-14">
    <div class="flex flex-wrap items-center gap-3 text-sm">
      <time class="font-black text-brand-dark" :datetime="item.isoDate">{{ item.date }}</time>
      <span class="rounded-full bg-slate-100 px-3 py-1 font-black text-brand-steel">{{ item.category }}</span>
    </div>
    <h1 class="mt-5 text-3xl font-black leading-tight text-brand-ink sm:text-4xl">{{ item.title }}</h1>
    <p class="mt-5 border-l-4 border-brand-red pl-5 text-lg leading-8 text-slate-600">{{ item.text }}</p>

    <div class="mt-8 border-y border-slate-200 py-8">
      <p v-for="paragraph in item.body" :key="paragraph" class="mb-5 text-lg leading-9 text-slate-700 last:mb-0">
        {{ paragraph }}
      </p>
    </div>

    <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
      <p class="text-sm text-slate-500">目前為版型展示用模擬資料，正式內容將由公會資料庫提供。</p>
      <NuxtLink to="/news" class="inline-flex min-h-11 items-center rounded-md border border-brand-dark px-4 py-2 font-black text-brand-dark hover:bg-brand-dark hover:text-white">
        返回最新消息
      </NuxtLink>
    </div>
  </article>
</template>
