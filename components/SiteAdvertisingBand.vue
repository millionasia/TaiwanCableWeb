<script setup>
defineProps({
  ads: { type: Object, required: true }
})
</script>

<template>
  <section class="border-b border-slate-300 bg-[#f1f4f5] py-8" aria-label="全站廣告專區">
    <div class="container-page grid gap-5 lg:grid-cols-[184px_1fr]">
      <LeftAdMarquee :ads="ads.leftMarquee" compact />
      <AdRotator :ads="ads.newsRotator" aria-label="全站中央廣告輪播" fill />
    </div>
  </section>
</template>
