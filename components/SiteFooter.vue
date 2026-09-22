<script setup>
import { millionasia } from "~/data/millionasia"

const brand = millionasia.getBrand()
const contact = millionasia.getContact()
const navigation = millionasia.getFooterNavigation()
</script>

<template>
  <footer class="bg-brand-ink pt-5 text-sm font-normal text-white/75 sm:pt-7">
    <div class="container-page grid gap-4 lg:grid-cols-[1fr_1.45fr] lg:items-center">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-3" aria-label="回到首頁">
        <img :src="brand.logo" :alt="brand.name" class="h-12 w-12 shrink-0 object-contain">
        <span class="grid gap-0.5">
          <span class="font-normal text-white">{{ brand.name }}</span>
          <small class="font-normal text-white/65">{{ brand.englishName }}</small>
        </span>
      </NuxtLink>

      <address class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs not-italic sm:gap-x-6 sm:text-sm">
        <span class="col-span-2">地址：{{ contact.address }}</span>
        <a class="font-normal text-white hover:text-red-200" :href="`tel:+${contact.phone.replace(/-/g, '')}`">電話：{{ contact.phone }}</a>
        <span>傳真：{{ contact.fax }}</span>
        <a class="col-span-2 font-normal text-white hover:text-red-200" :href="`mailto:${contact.email}`">Email：{{ contact.email }}</a>
      </address>
    </div>

    <nav class="container-page mt-4 grid grid-cols-3 gap-x-3 gap-y-1 border-t border-white/15 py-3 text-xs leading-5 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:py-4 sm:text-sm" aria-label="Footer 功能導覽">
      <NuxtLink
        v-for="item in navigation"
        :key="item.label"
        :to="item.to"
        class="font-normal text-white/70 hover:text-red-200"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <div class="border-t border-white/15">
      <div class="container-page flex flex-col gap-2 py-4 text-xs md:flex-row md:items-center md:justify-between">
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
