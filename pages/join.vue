<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "入會服務" })
const steps = millionasia.membershipSteps
</script>

<template>
  <PageHero
    eyebrow="Membership"
    title="入會服務"
    description="協助有意加入公會的廠商理解申請條件、資料準備與審查流程。"
  />
  <section class="py-16">
    <div class="container-page grid gap-6 lg:grid-cols-[1fr_300px]">
      <article class="panel p-7">
        <h2 class="text-3xl font-black">入會流程</h2>
        <ol class="mt-6 grid gap-4">
          <li v-for="(step, index) in steps" :key="step.title" class="grid grid-cols-[44px_1fr] gap-x-4 gap-y-1 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <span class="row-span-2 grid h-10 w-10 place-items-center rounded-full bg-brand-dark font-black text-white">{{ index + 1 }}</span>
            <strong class="text-lg">{{ step.title }}</strong>
            <span class="text-slate-600">{{ step.text }}</span>
          </li>
        </ol>
        <NuxtLink to="/contact" class="mt-6 inline-flex min-h-12 items-center rounded-lg bg-brand-dark px-5 font-black text-white hover:bg-brand-red">
          聯絡公會窗口
        </NuxtLink>
      </article>
      <AdRail />
    </div>
  </section>
</template>
