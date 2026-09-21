<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "公會會務" })

const content = millionasia.getAboutContent().services
</script>

<template>
  <AboutPageShell
    eyebrow="Association Services"
    title="公會會務"
    description="從產業調查、會員權益到市場拓展與人才培訓，支援產業共同發展。"
  >
    <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
      <div>
        <p class="eyebrow">Service Scope</p>
        <h2 class="text-3xl font-black">服務項目</h2>
        <p class="mt-4 leading-8 text-slate-600">彙整會員共同需求，提供產業協調、資訊研究與對外溝通服務。</p>
      </div>
      <ol class="grid gap-x-8 md:grid-cols-2">
        <li v-for="(item, index) in content.items" :key="item" class="grid grid-cols-[42px_1fr] gap-3 border-t border-slate-200 py-5">
          <span class="text-sm font-black text-brand-red">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="font-bold leading-7 text-slate-700">{{ item }}</span>
        </li>
      </ol>
    </div>

    <section class="mt-14 bg-brand-silver px-6 py-8 md:px-10">
      <p class="eyebrow">Outlook</p>
      <h2 class="text-3xl font-black">未來展望</h2>
      <p class="mt-4 max-w-5xl text-lg leading-9 text-slate-700">{{ content.outlook }}</p>
    </section>
  </AboutPageShell>
</template>
