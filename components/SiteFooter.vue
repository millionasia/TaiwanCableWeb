<script setup>
import { millionasia } from "~/data/millionasia"

const brand = millionasia.getBrand()
const contact = millionasia.getContact()
const navigation = millionasia.getNavigation()
</script>

<template>
  <footer class="bg-brand-ink pt-12 text-white/75">
    <div class="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_.9fr_1fr]">
      <NuxtLink to="/" class="flex min-w-0 items-start gap-4" aria-label="回到首頁">
        <img :src="brand.logo" :alt="brand.name" class="h-16 w-16 shrink-0 object-contain">
        <span class="grid gap-1">
          <span class="text-white">{{ brand.name }}</span>
          <small class="text-white/70">{{ brand.englishName }}</small>
        </span>
      </NuxtLink>

      <address class="grid gap-2 not-italic">
        <span>地址：{{ contact.address }}</span>
        <a class="text-white" :href="`tel:+${contact.phone.replace(/-/g, '')}`">電話：{{ contact.phone }}</a>
        <span>傳真：{{ contact.fax }}</span>
        <a class="text-white" :href="`mailto:${contact.email}`">Email：{{ contact.email }}</a>
      </address>

      <nav class="grid content-start grid-cols-2 gap-x-5 gap-y-5 text-sm" aria-label="Footer 功能導覽">
        <section v-for="item in navigation" :key="item.label" class="grid content-start gap-2">
          <NuxtLink :to="item.to" class="font-normal text-white hover:text-red-200">{{ item.label }}</NuxtLink>
          <NuxtLink
            v-for="child in item.children"
            :key="child.label"
            :to="child.to"
            class="font-normal text-white/65 hover:text-red-200"
          >
            {{ child.label }}
          </NuxtLink>
        </section>
        <NuxtLink to="/sitemap" class="self-start font-normal text-white hover:text-red-200">網站地圖</NuxtLink>
      </nav>
    </div>

    <div class="mt-10 border-t border-white/15">
      <div class="container-page flex flex-col gap-3 py-5 text-sm md:flex-row md:items-center md:justify-between">
        <span>Copyright © 2026 臺灣區電線電纜工業同業公會</span>
        <span>
          Powered by
          <a class="mx-1 font-normal text-white hover:text-red-200" href="https://www.millionasia.com/product.jsp">AgileWeb</a>
          AI-Driven Website Builder
        </span>
      </div>
    </div>
  </footer>
</template>
