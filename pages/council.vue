<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "公會理監事" })
useSeoMeta({
  description: "臺灣區電線電纜工業同業公會本屆理監事名錄。"
})

const council = millionasia.getCouncil()
</script>

<template>
  <PageHero
    eyebrow="Council"
    title="本屆理監事"
    description="查閱本屆理事、監事及候補理監事名錄。"
  />

  <section class="bg-[#f7f9fa] py-12 md:py-16">
    <div class="container-page">
      <section class="panel" aria-labelledby="current-council-heading">
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
    </div>
  </section>
</template>
