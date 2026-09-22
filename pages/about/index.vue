<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "公會簡介" })

const content = millionasia.getAboutContent().introduction
</script>

<template>
  <AboutPageShell
    eyebrow="About Association"
    title="公會簡介"
    description="認識公會的服務定位、標誌意涵與臺灣電線電纜產業發展歷程。"
  >
    <section class="mb-12 border-y border-slate-200 bg-slate-50 px-5 py-8 sm:px-8">
      <p class="eyebrow">Chairman's Message</p>
      <h2 class="mt-2 text-3xl font-black">理事長的話</h2>
      <h3 class="mt-3 text-xl font-black text-brand-dark">{{ content.chairmanMessage.title }}</h3>
      <p class="mt-5 text-lg font-black text-brand-dark">{{ content.chairmanMessage.greeting }}</p>
      <p v-for="paragraph in content.chairmanMessage.opening" :key="paragraph" class="mt-4 leading-8 text-slate-700">
        {{ paragraph }}
      </p>

      <details open class="group mt-6 border-t border-slate-200 pt-5">
        <summary class="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-black text-brand-dark">
          完整理事長致詞
          <span class="text-xl transition group-open:rotate-45" aria-hidden="true">＋</span>
        </summary>
        <div class="mt-5 grid gap-5 leading-8 text-slate-700">
          <p v-for="paragraph in content.chairmanMessage.challenges" :key="paragraph">{{ paragraph }}</p>
          <p v-for="paragraph in content.chairmanMessage.discussion" :key="paragraph">{{ paragraph }}</p>
          <section v-for="strategy in content.chairmanMessage.strategies" :key="strategy.title" class="border-l-4 border-brand-red pl-5">
            <h3 class="text-lg font-black text-brand-ink">{{ strategy.title }}</h3>
            <p class="mt-2">{{ strategy.text }}</p>
          </section>
          <p>{{ content.chairmanMessage.governmentIntro }}</p>
          <ol class="grid gap-3 pl-6">
            <li v-for="(request, index) in content.chairmanMessage.governmentRequests" :key="request" class="list-decimal pl-1">
              {{ request }}
            </li>
          </ol>
          <p>{{ content.chairmanMessage.closing }}</p>
        </div>
      </details>
    </section>

    <div class="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
      <article>
        <p v-for="paragraph in content.overview" :key="paragraph" class="mb-5 text-lg leading-9 text-slate-700">
          {{ paragraph }}
        </p>

        <section class="mt-10 border-t border-slate-200 pt-8">
          <p class="eyebrow">History</p>
          <h2 class="text-3xl font-black">產業沿革</h2>
          <ol class="mt-7 grid gap-0 border-l-2 border-slate-200 pl-6">
            <li v-for="(item, index) in content.history" :key="item.title" class="relative pb-8 last:pb-0">
              <span class="absolute -left-[33px] top-1 grid h-4 w-4 place-items-center rounded-full bg-brand-red ring-4 ring-white" />
              <p class="text-xs font-black text-brand-dark">0{{ index + 1 }}</p>
              <h3 class="mt-1 text-xl font-black">{{ item.title }}</h3>
              <p class="mt-2 leading-7 text-slate-600">{{ item.text }}</p>
            </li>
          </ol>
        </section>
      </article>

      <aside class="grid gap-6">
        <section class="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div class="flex items-center gap-4">
            <img src="/images/logo.svg" alt="公會標誌" class="h-20 w-20 object-contain">
            <div>
              <p class="eyebrow">Identity</p>
              <h2 class="text-2xl font-black">公會標誌</h2>
            </div>
          </div>
          <p v-for="paragraph in content.logoMeaning" :key="paragraph" class="mt-4 leading-7 text-slate-600">
            {{ paragraph }}
          </p>
        </section>

        <section class="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <h2 class="border-b border-slate-200 bg-brand-ink px-5 py-4 text-lg font-black text-white">聯絡資料</h2>
          <dl class="divide-y divide-slate-200">
            <div v-for="item in content.profile" :key="item[0]" class="grid gap-1 px-5 py-4 sm:grid-cols-[86px_1fr]">
              <dt class="font-black text-slate-500">{{ item[0] }}</dt>
              <dd class="font-semibold text-slate-800">{{ item[1] }}</dd>
            </div>
          </dl>
        </section>
      </aside>
    </div>
  </AboutPageShell>
</template>
