<script setup>
import { millionasia } from "~/data/millionasia"

const route = useRoute()
const navigation = millionasia.getNavigation()
const fallbackLabels = {
  "/sitemap": "網站地圖",
  "/news": "最新消息"
}

const toPath = (to) => typeof to === "string" ? to : to.path

const activeGroup = computed(() => navigation.find((item) => {
  return route.path === toPath(item.to) || item.children.some((child) => route.path === toPath(child.to))
}))

const activeChild = computed(() => {
  if (!activeGroup.value) return null
  const metalId = Array.isArray(route.query.metal) ? route.query.metal[0] : route.query.metal

  return activeGroup.value.children.find((child) => {
    if (route.path !== toPath(child.to)) return false
    if (typeof child.to === "string" || !child.to.query?.metal) return true
    return (metalId || "copper") === child.to.query.metal
  }) || null
})

const crumbs = computed(() => {
  const items = [{ label: "首頁", to: "/" }]

  if (!activeGroup.value) {
    if (route.path.startsWith("/news/")) {
      const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
      const news = millionasia.latestNews.find((item) => item.slug === slug)
      items.push({ label: "最新消息", to: "/news" })
      items.push({ label: news?.title || "消息內容" })
      return items
    }

    items.push({ label: fallbackLabels[route.path] || "目前頁面" })
    return items
  }

  if (activeChild.value) {
    items.push({ label: activeGroup.value.label, to: activeGroup.value.to })
    items.push({ label: activeChild.value.label })
    return items
  }

  items.push({ label: activeGroup.value.label })
  return items
})
</script>

<template>
  <nav class="border-b border-slate-200 bg-white px-4 py-3 text-sm" aria-label="麵包屑">
    <ol class="flex flex-wrap items-center gap-2">
      <li v-for="(crumb, index) in crumbs" :key="`${crumb.label}-${index}`" class="flex items-center gap-2">
        <svg v-if="index" class="h-3.5 w-3.5 text-slate-400" viewBox="0 0 20 20" aria-hidden="true">
          <path d="m7 4 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <NuxtLink v-if="crumb.to" :to="crumb.to" class="font-bold text-slate-600 hover:text-brand-dark">
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="font-black text-brand-dark" aria-current="page">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>
