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

    <nav class="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-6" aria-label="章程章節">
      <a
        v-for="(section, index) in content.sections"
        :key="section.title"
        :href="`#charter-${index + 1}`"
        class="rounded-md border border-slate-300 px-3 py-2 text-sm font-black text-slate-700 hover:border-brand-dark hover:text-brand-dark"
      >
        {{ section.title }}
      </a>
    </nav>

    <div class="mt-10 grid gap-14">
      <section v-for="(section, sectionIndex) in content.sections" :id="`charter-${sectionIndex + 1}`" :key="section.title" class="scroll-mt-64">
        <div class="border-b-2 border-brand-ink pb-4">
          <p class="eyebrow">Chapter {{ sectionIndex + 1 }}</p>
          <h2 class="mt-1 text-3xl font-black">{{ section.title }}</h2>
        </div>
        <div class="divide-y divide-slate-200">
          <article v-for="article in section.articles" :key="article.number" class="grid gap-3 py-6 md:grid-cols-[112px_1fr] md:gap-7">
            <h3 class="font-black text-brand-dark">{{ article.number }}</h3>
            <div class="grid gap-3 leading-8 text-slate-700">
              <p v-for="paragraph in article.paragraphs" :key="paragraph">{{ paragraph }}</p>
              <ol v-if="article.items" class="grid gap-2 pl-6">
                <li v-for="(item, index) in article.items" :key="item" class="list-decimal pl-1">
                  {{ item }}
                </li>
              </ol>
              <p v-if="article.closing">{{ article.closing }}</p>
            </div>
          </article>
        </div>
      </section>
    </div>

    <p class="mt-8 text-sm text-slate-500">正式適用內容以公會公告及主管機關最新核備版本為準。</p>
  </AboutPageShell>
</template>
