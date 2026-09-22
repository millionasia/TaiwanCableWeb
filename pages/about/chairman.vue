<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "理事長的話" })

const message = millionasia.getAboutContent().introduction.chairmanMessage
</script>

<template>
  <AboutPageShell
    eyebrow="Chairman's Message"
    title="理事長的話"
    description="凝聚產業共識，面對市場、技術與國際競爭環境的共同挑戰。"
  >
    <article class="mx-auto max-w-5xl">
      <header class="border-b-2 border-brand-ink pb-7">
        <p class="eyebrow">Industry Perspective</p>
        <h2 class="mt-2 text-3xl font-black leading-tight text-brand-ink sm:text-4xl">{{ message.title }}</h2>
        <p class="mt-5 text-lg font-black text-brand-dark">{{ message.greeting }}</p>
      </header>

      <div class="mt-8 grid gap-5 text-lg leading-9 text-slate-700">
        <p v-for="paragraph in message.opening" :key="paragraph">{{ paragraph }}</p>
      </div>

      <section class="mt-10 border-y border-slate-200 bg-slate-50 px-5 py-7 sm:px-8">
        <h2 class="text-2xl font-black">產業面臨的挑戰</h2>
        <ol class="mt-5 grid gap-4 pl-6 leading-8 text-slate-700">
          <li v-for="challenge in message.challenges" :key="challenge" class="list-decimal pl-2">
            {{ challenge }}
          </li>
        </ol>
      </section>

      <div class="mt-10 grid gap-5 text-lg leading-9 text-slate-700">
        <p v-for="paragraph in message.discussion" :key="paragraph">{{ paragraph }}</p>
      </div>

      <section class="mt-10 grid gap-8">
        <article v-for="strategy in message.strategies" :key="strategy.title" class="border-l-4 border-brand-red pl-5 sm:pl-7">
          <h2 class="text-2xl font-black text-brand-ink">{{ strategy.title }}</h2>
          <p class="mt-4 text-lg leading-9 text-slate-700">{{ strategy.text }}</p>
        </article>
      </section>

      <section class="mt-10 bg-brand-silver px-5 py-8 sm:px-8">
        <h2 class="text-2xl font-black">需要政府協助的事項</h2>
        <p class="mt-4 text-lg leading-9 text-slate-700">{{ message.governmentIntro }}</p>
        <ol class="mt-5 grid gap-4 pl-6 leading-8 text-slate-700">
          <li v-for="request in message.governmentRequests" :key="request" class="list-decimal pl-2">
            {{ request }}
          </li>
        </ol>
      </section>

      <p class="mt-10 border-t border-slate-200 pt-8 text-lg leading-9 text-slate-700">{{ message.closing }}</p>
    </article>
  </AboutPageShell>
</template>
