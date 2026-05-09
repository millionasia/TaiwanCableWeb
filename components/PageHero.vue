<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<template>
  <section class="bg-gradient-to-br from-brand-ink to-slate-700 py-14 text-white">
    <div class="container-page">
      <p class="mb-2 text-xs font-black uppercase tracking-normal text-red-200">{{ eyebrow }}</p>
      <h1 class="max-w-3xl text-4xl font-black leading-tight md:text-6xl">{{ title }}</h1>
      <p class="mt-5 max-w-3xl text-lg text-white/75">{{ description }}</p>
    </div>
  </section>
</template>
