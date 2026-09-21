<script setup>
import { millionasia } from "~/data/millionasia"

defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})

const route = useRoute()
const sections = millionasia.getAboutSections()
</script>

<template>
  <PageHero :eyebrow="eyebrow" :title="title" :description="description" />

  <nav class="border-b border-slate-200 bg-white" aria-label="關於公會章節">
    <div class="container-page flex gap-1 overflow-x-auto py-3">
      <NuxtLink
        v-for="section in sections"
        :key="section.to"
        :to="section.to"
        class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md px-4 text-sm font-black transition"
        :class="route.path === section.to ? 'bg-brand-ink text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-brand-dark'"
        :aria-current="route.path === section.to ? 'page' : undefined"
      >
        <NavIcon :name="section.icon" class="h-4 w-4" />
        {{ section.label }}
      </NuxtLink>
    </div>
  </nav>

  <section class="py-12 md:py-16">
    <div class="container-page">
      <slot />
    </div>
  </section>
</template>
