<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "會員廠商分類查詢" })
const products = millionasia.getProducts()

const productTones = {
  "01": "bg-[#202a34] text-red-100",
  "02": "bg-[#314451] text-sky-100",
  "03": "bg-[#1d4a54] text-cyan-100",
  "04": "bg-[#4b3947] text-rose-100",
  "05": "bg-[#243f3a] text-emerald-100",
  "06": "bg-[#4a4f56] text-zinc-100",
  "07": "bg-[#49343a] text-red-100",
  "08": "bg-[#2c3340] text-indigo-100"
}
</script>

<template>
  <PageHero
    eyebrow="Product Category"
    title="會員廠商分類查詢"
    description="依八大產品類別瀏覽會員主要產品，協助採購單位與產業夥伴快速找到合適供應商。"
  />
  <section class="py-16">
    <div class="container-page">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="product in products"
          :key="product.index"
          class="relative min-h-[218px] overflow-hidden rounded-lg border border-white/15 p-5 shadow-steel"
          :class="productTones[product.index]"
        >
          <ProductCategoryPattern :index="product.index" />
          <span class="relative z-10 flex h-full flex-col">
            <span class="text-sm font-black text-white/70">{{ product.index }}</span>
            <strong class="mt-auto block text-xl text-white">{{ product.title }}</strong>
            <span class="mt-1 block text-xs font-bold uppercase text-white/55">{{ product.english }}</span>
            <span class="mt-3 block text-sm leading-6 text-white/75">{{ product.text }}</span>
          </span>
        </article>
      </div>
    </div>
  </section>
</template>
