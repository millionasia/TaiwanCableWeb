<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "產品分類" })
const products = millionasia.getProducts()
</script>

<template>
  <PageHero
    eyebrow="Product Category"
    title="產品分類"
    description="整理會員主要產品類型，協助採購單位與產業夥伴快速找到合適供應商。"
  />
  <section class="py-16">
    <div class="container-page grid gap-6 lg:grid-cols-[1fr_300px]">
      <div class="grid gap-4 md:grid-cols-2">
        <article v-for="product in products" :key="product.index" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <span class="grid h-11 w-11 place-items-center rounded-full bg-brand-ink font-black text-white">{{ product.index }}</span>
          <h2 class="mt-7 text-2xl font-black">{{ product.title }}</h2>
          <p class="mt-2 text-slate-600">{{ product.text }}</p>
        </article>
      </div>
      <AdRail />
    </div>
  </section>
</template>
