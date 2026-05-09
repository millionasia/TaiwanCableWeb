<script setup>
import { millionasia } from "~/data/millionasia"

const brand = millionasia.getBrand()
const contact = millionasia.getContact()
const footerNavigation = millionasia.getFooterNavigation()
</script>

<template>
  <footer class="bg-brand-ink py-12 text-white/75">
    <div class="container-page grid gap-8 md:grid-cols-[1fr_.9fr]">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-3">
        <img :src="brand.logo" :alt="brand.name" class="h-12 w-12 rounded-full bg-white object-contain">
        <span class="grid">
          <strong class="text-white">{{ brand.name }}</strong>
          <small class="text-white/70">{{ brand.englishName }}</small>
        </span>
      </NuxtLink>

      <address class="grid gap-2 not-italic">
        <span>地址：{{ contact.address }}</span>
        <a class="text-white" :href="`tel:+${contact.phone.replace(/-/g, '')}`">電話：{{ contact.phone }}</a>
        <span>傳真：{{ contact.fax }}</span>
        <a class="text-white" :href="`mailto:${contact.email}`">Email：{{ contact.email }}</a>
      </address>
    </div>

    <div class="container-page mt-8 flex flex-col gap-5 border-t border-white/15 pt-5 text-sm md:flex-row md:items-start md:justify-between">
      <nav class="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer SEO 導覽">
        <NuxtLink v-for="item in footerNavigation" :key="item.to" :to="item.to" class="font-black text-white">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <span>米亞科技設計</span>
    </div>
  </footer>
</template>
