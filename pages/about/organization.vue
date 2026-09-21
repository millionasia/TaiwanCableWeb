<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "組織功能" })

const content = millionasia.getAboutContent().organization
</script>

<template>
  <AboutPageShell
    eyebrow="Organization"
    title="組織功能"
    description="透過會員代表、理監事會與專業委員會分工，推動會務及產業共同議題。"
  >
    <p class="max-w-4xl text-lg leading-9 text-slate-700">{{ content.overview }}</p>

    <section class="mt-10">
      <h2 class="text-3xl font-black">組織架構</h2>
      <div class="mt-6 grid gap-3 md:grid-cols-4">
        <div v-for="(body, index) in content.bodies" :key="body" class="relative border-t-4 border-brand-red bg-slate-100 px-5 py-6">
          <span class="text-xs font-black text-brand-steel">0{{ index + 1 }}</span>
          <h3 class="mt-2 text-xl font-black">{{ body }}</h3>
        </div>
      </div>
    </section>

    <section class="mt-14 border-t border-slate-200 pt-10">
      <div class="grid gap-8 lg:grid-cols-[280px_1fr]">
        <div>
          <p class="eyebrow">Committees</p>
          <h2 class="text-3xl font-black">小組與委員會</h2>
          <p class="mt-3 leading-7 text-slate-600">依業務性質進行專業分工，連結會員實務需求與產業政策。</p>
        </div>
        <ol class="grid gap-x-8 gap-y-0 md:grid-cols-2">
          <li v-for="(committee, index) in content.committees" :key="committee" class="grid grid-cols-[38px_1fr] gap-3 border-b border-slate-200 py-4">
            <span class="font-black text-brand-red">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="font-bold leading-7 text-slate-700">{{ committee }}</span>
          </li>
        </ol>
      </div>
    </section>
  </AboutPageShell>
</template>
