<script setup>
import { millionasia } from "~/data/millionasia"

const brand = millionasia.getBrand()
const ads = millionasia.getAds()
const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader :brand="brand" />
    <section class="border-b border-slate-300 bg-[#e3e8ec] py-3" aria-label="選單下方廣告">
      <div class="container-page">
        <AdSlot :ad="ads.top" layout="wide" />
      </div>
    </section>
    <SiteAdvertisingBand v-if="route.path !== '/'" :ads="ads" />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
