<script setup>
import { millionasia } from "~/data/millionasia"

const brand = millionasia.getBrand()
const ads = millionasia.getAds()
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader :brand="brand" />
    <section class="border-b border-slate-200 bg-slate-50 py-3" aria-label="選單下方廣告">
      <div class="container-page">
        <AdSlot :ad="ads.top" layout="wide" />
      </div>
    </section>
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
