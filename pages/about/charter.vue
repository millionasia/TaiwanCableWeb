<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "公會章程" })

const content = millionasia.getAboutContent().charter
</script>

<template>
  <AboutPageShell
    eyebrow="Charter"
    title="公會章程"
    description="整理公會宗旨、法定任務、會員制度、組織職權、會議及會計規範。"
  >
    <div class="border-l-4 border-brand-red bg-slate-50 px-6 py-5">
      <p class="font-black text-brand-ink">{{ content.purpose }}</p>
      <p class="mt-2 text-sm leading-6 text-slate-500">{{ content.reference }}</p>
    </div>

    <div class="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
      <section>
        <h2 class="text-3xl font-black">章程架構</h2>
        <div class="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          <article v-for="chapter in content.chapters" :key="chapter.title" class="grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
            <div>
              <h3 class="text-lg font-black">{{ chapter.title }}</h3>
              <p class="mt-1 text-sm font-bold text-brand-dark">{{ chapter.range }}</p>
            </div>
            <p class="leading-7 text-slate-600">{{ chapter.text }}</p>
          </article>
        </div>
      </section>

      <aside class="rounded-lg bg-brand-ink p-6 text-white">
        <p class="text-xs font-black uppercase text-red-300">Article 9</p>
        <h2 class="mt-2 text-2xl font-black">法定任務重點</h2>
        <ol class="mt-5 grid gap-3">
          <li v-for="(task, index) in content.tasks" :key="task" class="grid grid-cols-[30px_1fr] gap-2 text-sm leading-6 text-white/75">
            <span class="font-black text-red-300">{{ index + 1 }}</span>
            <span>{{ task }}</span>
          </li>
        </ol>
      </aside>
    </div>

    <p class="mt-8 text-sm text-slate-500">正式適用內容以公會公告及主管機關最新核備版本為準。</p>
  </AboutPageShell>
</template>
