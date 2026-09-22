<script setup>
const props = defineProps({
  prices: { type: Object, required: true }
})

const metals = computed(() => props.prices.metals.filter((metal) => metal.id !== "usd").slice(0, 5))
const recentRows = computed(() => props.prices.table.slice(0, 7).reverse())

const valuesFor = (metalId) => {
  return recentRows.value.map((row) => Number(String(row[metalId]).replace(/,/g, "")))
}

const pointsFor = (metalId) => {
  const values = valuesFor(metalId)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  return values.map((value, index) => {
    const x = 5 + (index / (values.length - 1)) * 230
    const y = 67 - ((value - min) / range) * 58
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(" ")
}

const changeFor = (metalId) => {
  const values = valuesFor(metalId)
  const change = ((values.at(-1) - values[0]) / values[0]) * 100
  return `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`
}

const shortDate = (date) => date.slice(5).replace(".", "/")
</script>

<template>
  <section class="mb-8 border-b border-white/15 pb-8" aria-labelledby="weekly-metal-title">
    <div class="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p class="text-xs font-black uppercase text-red-300">7-Day Metal Trends</p>
        <h2 id="weekly-metal-title" class="mt-2 text-2xl font-black sm:text-3xl">銅鋁鎳錫鉛最近七日走勢</h2>
      </div>
      <NuxtLink to="/metals" class="text-sm font-black text-white underline decoration-2 underline-offset-4">
        查看完整行情
      </NuxtLink>
    </div>

    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <article
        v-for="metal in metals"
        :key="metal.id"
        class="min-w-0 rounded-lg border border-white/15 bg-white/[0.04] p-4"
      >
        <div class="flex items-start justify-between gap-2">
          <div>
            <h3 class="text-lg font-black">{{ metal.label }}</h3>
            <p class="text-xs text-white/55">{{ metal.english }}</p>
          </div>
          <span class="text-right text-xs font-black text-white/75">
            {{ metal.latest }}
            <small class="block font-normal text-white/45">{{ metal.unit }}</small>
          </span>
        </div>

        <svg class="mt-4 h-auto w-full" viewBox="0 0 240 76" role="img" :aria-label="`${metal.label}最近七日模擬走勢`">
          <g stroke="rgba(255,255,255,0.12)" stroke-width="1">
            <line x1="5" y1="10" x2="235" y2="10" />
            <line x1="5" y1="38" x2="235" y2="38" />
            <line x1="5" y1="67" x2="235" y2="67" />
          </g>
          <polyline
            :points="pointsFor(metal.id)"
            fill="none"
            :stroke="metal.tone"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="mt-2 flex items-center justify-between text-xs text-white/50">
          <span>{{ shortDate(recentRows[0].date) }}</span>
          <strong :class="changeFor(metal.id).startsWith('+') ? 'text-emerald-300' : 'text-rose-300'">
            {{ changeFor(metal.id) }}
          </strong>
          <span>{{ shortDate(recentRows.at(-1).date) }}</span>
        </div>
      </article>
    </div>
    <p class="mt-3 text-xs text-white/40">走勢與價格為介面模擬資料。</p>
  </section>
</template>
