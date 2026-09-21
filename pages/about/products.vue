<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "公會產品類別" })

const products = millionasia.getProducts()
</script>

<template>
  <AboutPageShell
    eyebrow="Product Categories"
    title="產品類別"
    description="依原公會分類架構，整理八大類線纜產品與主要子分類。"
  >
    <div class="grid gap-4 md:grid-cols-2">
      <article v-for="product in products" :key="product.index" class="relative min-h-[230px] overflow-hidden rounded-lg bg-brand-graphite p-6 text-white">
        <ProductCategoryPattern :index="product.index" class="text-white" />
        <div class="relative z-10">
          <span class="text-sm font-black text-red-300">{{ product.index }}</span>
          <h2 class="mt-2 text-2xl font-black">{{ product.title }}</h2>
          <p class="mt-1 text-sm font-bold uppercase text-white/55">{{ product.english }}</p>
          <ul class="mt-5 grid gap-2 text-sm text-white/80">
            <li v-for="item in product.items" :key="item" class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
              {{ item }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </AboutPageShell>
</template>
