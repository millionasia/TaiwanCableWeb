<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "網站地圖" })
const navigation = millionasia.getNavigation()
</script>

<template>
  <PageHero
    eyebrow="網站地圖"
    title="網站導覽"
    description="整理網站主要分頁，作為 footer navigation 的延伸入口，也協助搜尋引擎理解網站架構。"
  />
  <section class="py-16">
    <div class="container-page">
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <section v-for="item in navigation" :key="item.label" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <NuxtLink :to="item.to" class="text-xl font-black text-brand-ink hover:text-brand-dark">
            {{ item.label }}
          </NuxtLink>
          <ul v-if="item.children.length" class="mt-4 grid gap-2 border-t border-slate-200 pt-4">
            <li v-for="child in item.children" :key="child.label">
              <NuxtLink :to="child.to" class="inline-flex min-h-9 items-center text-slate-600 hover:text-brand-dark">
                {{ child.label }}
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
