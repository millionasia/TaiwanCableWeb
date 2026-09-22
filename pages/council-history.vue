<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "歷屆理監事" })
useSeoMeta({
  description: "臺灣區電線電纜工業同業公會歷屆理監事名錄版型，目前展示第一屆資料。"
})

const council = millionasia.getCouncil()
</script>

<template>
  <PageHero
    eyebrow="Past Councils"
    title="歷屆理監事"
    description="依屆次查閱歷屆理事與監事名錄，目前以第一屆呈現名錄版型。"
  />

  <section class="bg-[#f7f9fa] py-12 md:py-16">
    <div class="container-page grid gap-6">
      <nav class="flex gap-2 overflow-x-auto pb-1" aria-label="歷屆理監事屆次">
        <button
          v-for="term in council.history"
          :key="term.term"
          type="button"
          class="min-h-10 shrink-0 rounded-md border px-4 text-sm font-black"
          :class="term.term === 1 ? 'border-brand-dark bg-brand-dark text-white' : 'cursor-not-allowed border-slate-300 bg-white text-slate-400'"
          :disabled="term.term !== 1"
          :aria-current="term.term === 1 ? 'page' : undefined"
        >
          第 {{ term.term }} 屆
        </button>
      </nav>

      <section class="panel" aria-labelledby="first-council-heading">
        <header class="grid gap-3 border-b border-slate-200 p-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p class="eyebrow">Council Directory</p>
            <h2 id="first-council-heading" class="text-3xl font-black">{{ council.firstTerm.term }}理監事名錄</h2>
          </div>
          <span class="text-sm font-black text-brand-dark">{{ council.firstTerm.period }}</span>
        </header>

        <div class="border-b border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
          本頁為版型展示，目前只展開第一屆。標示「資料待補」的歷史名錄內容，將於正式史料確認後更新。
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-[640px] table-auto border-collapse text-left text-sm md:w-full">
            <thead class="bg-[#e7ecef] text-slate-700">
              <tr>
                <th class="border-b border-slate-300 p-4">職別</th>
                <th class="border-b border-slate-300 p-4">姓名</th>
                <th class="border-b border-slate-300 p-4">所屬公司</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person in council.firstTerm.members" :key="person.role" class="odd:bg-white even:bg-slate-50/70">
                <td class="border-b border-slate-200 p-4 font-black text-brand-dark">{{ person.role }}</td>
                <td class="border-b border-slate-200 p-4" :class="person.name === '資料待補' ? 'text-slate-400' : 'font-black'">{{ person.name }}</td>
                <td class="border-b border-slate-200 p-4" :class="person.company === '資料待補' ? 'text-slate-400' : ''">{{ person.company }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </section>
</template>
