<script setup>
import { millionasia } from "~/data/millionasia"

const brand = millionasia.getBrand()
const sponsors = millionasia.getSponsors()
const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader :brand="brand" :platinum-sponsors="sponsors.platinum" />
    <main v-if="route.path === '/'">
      <slot />
    </main>
    <SiteAdvertisingBand v-else :sponsors="sponsors">
      <main>
        <slot />
      </main>
    </SiteAdvertisingBand>
    <SiteFooter />
  </div>
</template>
