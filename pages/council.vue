<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "公會理監事" })
useSeoMeta({
  description: "臺灣區電線電纜工業同業公會本屆理監事名錄與歷屆理事長資料。"
})

const council = millionasia.getCouncil()
const activeView = ref("current")
</script>

<template>
  <PageHero
    eyebrow="Council"
    title="公會理監事"
    description="查閱本屆理監事名錄及歷屆理事長資料。"
  />

  <section class="bg-[#f7f9fa] py-12 md:py-16">
    <div class="container-page">
      <div class="mb-8 flex w-full max-w-md rounded-lg border border-slate-300 bg-white p-1" role="tablist" aria-label="理監事資料類別">
        <button
          v-for="tab in [{ value: 'current', label: '本屆理監事' }, { value: 'history', label: '歷屆理事長' }]"
          :key="tab.value"
          type="button"
          class="min-h-11 flex-1 rounded-md px-4 text-sm font-black transition"
          :class="activeView === tab.value ? 'bg-brand-ink text-white' : 'text-slate-600 hover:bg-slate-100'"
          role="tab"
          :aria-selected="activeView === tab.value"
          @click="activeView = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>

      <section v-if="activeView === 'current'" class="panel" aria-labelledby="current-council-heading">
        <div class="flex flex-col gap-2 border-b border-slate-200 p-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="eyebrow">Current Council</p>
            <h2 id="current-council-heading" class="text-3xl font-black">本屆理監事</h2>
          </div>
          <strong class="text-sm text-brand-dark">{{ council.currentTerm }}</strong>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-[720px] table-auto border-collapse text-left text-sm md:w-full">
            <thead class="bg-[#e7ecef] text-slate-700">
              <tr>
                <th class="border-b border-slate-300 p-4">職別</th>
                <th class="border-b border-slate-300 p-4">姓名</th>
                <th class="border-b border-slate-300 p-4">性別</th>
                <th class="border-b border-slate-300 p-4">所屬公司</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person in council.current" :key="`${person.role}-${person.name}`" class="odd:bg-white even:bg-slate-50/70">
                <td class="border-b border-slate-200 p-4 font-black text-brand-dark">{{ person.role }}</td>
                <td class="border-b border-slate-200 p-4 font-black">{{ person.name }}</td>
                <td class="border-b border-slate-200 p-4">{{ person.gender }}</td>
                <td class="border-b border-slate-200 p-4">{{ person.company }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section v-else aria-labelledby="history-council-heading">
        <div class="mb-6 border-b border-slate-300 pb-5">
          <p class="eyebrow">Past Chairpersons</p>
          <h2 id="history-council-heading" class="text-3xl font-black">歷屆理事長</h2>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in [...council.history].reverse()" :key="item.term" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <span class="text-sm font-black text-brand-red">第 {{ item.term }} 屆</span>
            <h3 class="mt-2 text-2xl font-black">{{ item.chair }}</h3>
            <p class="mt-1 leading-7 text-slate-600">{{ item.company }}</p>
            <p class="mt-4 min-h-6 text-sm font-bold text-brand-steel">{{ item.period || '原始資料未列任期' }}</p>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>
