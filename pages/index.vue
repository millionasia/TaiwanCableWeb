<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "首頁" })

const home = millionasia.home
const ads = millionasia.getAds()
const notices = millionasia.notices
const events = millionasia.events
</script>

<template>
  <section class="bg-gradient-to-b from-white to-slate-50 py-12 md:py-16">
    <div class="container-page grid items-center gap-10 lg:grid-cols-[1fr_520px]">
      <div class="order-2 lg:order-1">
        <p class="eyebrow">{{ home.eyebrow }}</p>
        <h1 class="max-w-3xl text-4xl font-black leading-tight text-brand-ink md:text-6xl">
          {{ home.title }}
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          {{ home.lead }}
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <NuxtLink to="/members" class="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-dark px-5 font-black text-white hover:bg-brand-red">
            會員查詢
          </NuxtLink>
          <NuxtLink to="/resources" class="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 font-black text-brand-ink hover:border-slate-400">
            資料中心
          </NuxtLink>
        </div>
        <dl class="mt-8 grid gap-3 sm:grid-cols-3">
          <div v-for="stat in home.stats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-4">
            <dt class="text-2xl font-black text-brand-dark">{{ stat.value }}</dt>
            <dd class="font-black text-brand-steel">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <figure class="order-1 lg:order-2">
        <img :src="home.heroImage" alt="冷冽專業風格的實體電線電纜剖面照片" class="aspect-[16/10] w-full rounded-lg object-cover shadow-steel">
      </figure>
    </div>
  </section>

  <section class="border-y border-slate-200 bg-brand-silver py-12">
    <div class="container-page grid gap-6 lg:grid-cols-[184px_1fr_300px]">
      <LeftAdMarquee :ads="ads.leftMarquee" />

      <div class="grid gap-5">
        <AdRotator :ads="ads.noticeRotator" aria-label="重要通知上方廣告輪播" />

        <section class="panel">
          <div class="flex items-end justify-between gap-4 border-b border-slate-200 p-5">
            <div>
              <p class="eyebrow">Important Notice</p>
              <h2 class="text-3xl font-black">重要通知</h2>
            </div>
            <NuxtLink to="/resources" class="font-black text-brand-dark underline decoration-2 underline-offset-4">
              查看通知
            </NuxtLink>
          </div>
          <div class="grid">
            <NuxtLink v-for="notice in notices" :key="notice.title" to="/resources" class="grid gap-1 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[110px_1fr] md:gap-x-5 hover:bg-slate-50">
              <time class="font-black text-brand-dark" :datetime="notice.isoDate">{{ notice.date }}</time>
              <strong class="text-lg">{{ notice.title }}</strong>
              <span class="text-slate-600 md:col-start-2">{{ notice.text }}</span>
            </NuxtLink>
          </div>
        </section>

        <section class="panel">
          <div class="flex items-end justify-between gap-4 border-b border-slate-200 p-5">
            <div>
              <p class="eyebrow">Event Board</p>
              <h2 class="text-3xl font-black">活動看板</h2>
            </div>
            <NuxtLink to="/resources" class="font-black text-brand-dark underline decoration-2 underline-offset-4">
              查看活動
            </NuxtLink>
          </div>
          <div class="grid md:grid-cols-2">
            <NuxtLink v-for="event in events" :key="event.title" to="/resources" class="grid grid-cols-[72px_1fr] gap-4 border-b border-slate-200 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 hover:bg-slate-50">
              <time class="grid h-20 w-16 place-items-center content-center rounded-lg bg-brand-ink text-white" :datetime="event.isoDate">
                <span class="text-xs font-black uppercase">{{ event.month }}</span>
                <strong class="text-3xl leading-none">{{ event.day }}</strong>
              </time>
              <div>
                <h3 class="text-lg font-black">{{ event.title }}</h3>
                <p class="mt-1 text-slate-600">{{ event.text }}</p>
              </div>
            </NuxtLink>
          </div>
        </section>

        <AdRotator :ads="ads.eventRotator" aria-label="活動看板下方廣告輪播" />
      </div>

      <AdRail />
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
