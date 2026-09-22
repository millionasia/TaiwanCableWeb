<script setup>
defineProps({
  sponsors: { type: Object, required: true }
})
</script>

<template>
  <section class="border-b border-slate-300 bg-[#d7e0e5] py-8" aria-label="功能頁主要內容">
    <div class="container-page grid gap-5 lg:grid-cols-[184px_minmax(0,1fr)]">
      <AdRotator
        :ads="sponsors.gold"
        aria-label="黃金贊助會員輪播"
        class="lg:col-start-2 lg:row-start-1"
      />

      <LeftAdMarquee
        :ads="sponsors.general"
        class="hidden self-start lg:sticky lg:top-56 lg:col-start-1 lg:row-start-2 lg:block"
        compact
      />

      <div class="page-content-shell min-w-0 lg:col-start-2 lg:row-start-2">
        <slot />
      </div>

      <MobileAdMarquee :ads="sponsors.general" class="lg:hidden" />
    </div>
  </section>
</template>
