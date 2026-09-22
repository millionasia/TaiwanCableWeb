<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "倫敦金屬價格" })

const prices = millionasia.getMetalPrices()
const route = useRoute()
const router = useRouter()
const metalIds = prices.metals.map((metal) => metal.id)
const requestedMetalId = Array.isArray(route.query.metal) ? route.query.metal[0] : route.query.metal
const activeMetalId = ref(metalIds.includes(requestedMetalId) ? requestedMetalId : prices.metals[0].id)
const activePeriod = ref("30")
const customStart = ref("2026-08-01")
const customEnd = ref("2026-09-18")
const verificationChecked = ref(false)
const queryStatus = ref("")

const periodOptions = [
  { value: "30", label: "30 天" },
  { value: "60", label: "60 天" },
  { value: "90", label: "90 天" },
  { value: "120", label: "120 天" },
  { value: "custom", label: "自訂" }
]

const activeMetal = computed(() => prices.metals.find((metal) => metal.id === activeMetalId.value) || prices.metals[0])

const selectMetal = (metalId) => {
  activeMetalId.value = metalId
  router.replace({ query: { ...route.query, metal: metalId } })
}

const customDays = computed(() => {
  const start = new Date(`${customStart.value}T00:00:00`)
  const end = new Date(`${customEnd.value}T00:00:00`)
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0
  return Math.floor((end.getTime() - start.getTime()) / 86400000) + 1
})

const customRangeError = computed(() => {
  if (customDays.value < 1) return "結束日期不得早於開始日期。"
  if (customDays.value > 180) return "自訂查詢最多 180 天。"
  return ""
})

const chartPoints = computed(() => {
  const values = activeMetal.value.values
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  return values.map((value, index) => {
    const x = 24 + (index / (values.length - 1)) * 712
    const y = 210 - ((value - min) / range) * 160
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(" ")
})

const canQuery = computed(() => {
  return activePeriod.value !== "custom" || (!customRangeError.value && verificationChecked.value)
})

const submitQuery = () => {
  if (!canQuery.value) return
  queryStatus.value = activePeriod.value === "custom"
    ? `已套用 ${customDays.value} 天的示意查詢區間。`
    : `已切換為最近 ${activePeriod.value} 天的示意資料。`
}

watch([activePeriod, activeMetalId], () => {
  queryStatus.value = ""
})

watch(() => route.query.metal, (metalId) => {
  const nextMetalId = Array.isArray(metalId) ? metalId[0] : metalId
  if (metalIds.includes(nextMetalId)) activeMetalId.value = nextMetalId
})
</script>

<template>
  <PageHero
    eyebrow="London Metal Exchange"
    title="倫敦金屬價格"
    description="依金屬種類與指定天數檢視價格摘要、歷史資料及走勢圖。"
  />

  <section class="bg-white py-10 md:py-12">
    <div class="container-page grid gap-6">
      <section aria-labelledby="metal-selector-title">
        <div class="mb-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p class="eyebrow">Market Selector</p>
            <h2 id="metal-selector-title" class="text-2xl font-black">行情類別</h2>
          </div>
          <span class="text-sm text-slate-500">更新時間 {{ prices.updatedAt }}｜模擬資料</span>
        </div>

        <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6" role="tablist" aria-label="金屬行情類別">
          <button
            v-for="metal in prices.metals"
            :key="metal.id"
            type="button"
            class="min-h-14 rounded-md border px-3 text-left transition"
            :class="activeMetalId === metal.id ? 'border-brand-dark bg-brand-dark text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-brand-dark'"
            role="tab"
            :aria-selected="activeMetalId === metal.id"
            @click="selectMetal(metal.id)"
          >
            <strong class="block">{{ metal.label }}</strong>
            <small :class="activeMetalId === metal.id ? 'text-white/65' : 'text-slate-500'">{{ metal.english }}</small>
          </button>
        </div>
      </section>

      <section class="panel" aria-labelledby="trend-title">
        <header class="grid gap-4 border-b border-slate-200 p-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p class="text-sm font-black text-brand-dark">{{ activeMetal.english }}</p>
            <h2 id="trend-title" class="mt-1 text-3xl font-black">{{ activeMetal.label }}價走勢圖</h2>
            <p class="mt-2 text-sm text-slate-500">單位：{{ activeMetal.unit }}</p>
          </div>
          <div class="md:text-right">
            <strong class="block text-3xl text-brand-ink">{{ activeMetal.latest }}</strong>
            <span class="text-sm font-black" :class="activeMetal.change.startsWith('+') ? 'text-emerald-700' : 'text-rose-700'">
              {{ activeMetal.change }}
            </span>
          </div>
        </header>

        <div class="border-b border-slate-200 bg-slate-50 p-4">
          <div class="flex flex-wrap gap-2" aria-label="行情天數">
            <button
              v-for="period in periodOptions"
              :key="period.value"
              type="button"
              class="min-h-10 rounded-md border px-4 text-sm font-black transition"
              :class="activePeriod === period.value ? 'border-brand-dark bg-brand-dark text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-brand-dark'"
              @click="activePeriod = period.value"
            >
              {{ period.label }}
            </button>
          </div>

          <form v-if="activePeriod === 'custom'" class="mt-4 grid gap-4 rounded-md border border-slate-300 bg-white p-4" @submit.prevent="submitQuery">
            <div class="grid gap-3 sm:grid-cols-2">
              <label class="grid gap-1.5 text-sm font-black text-slate-700">
                開始日期
                <input v-model="customStart" type="date" class="min-h-11 rounded-md border border-slate-300 px-3 font-normal">
              </label>
              <label class="grid gap-1.5 text-sm font-black text-slate-700">
                結束日期
                <input v-model="customEnd" type="date" class="min-h-11 rounded-md border border-slate-300 px-3 font-normal">
              </label>
            </div>

            <p class="text-sm" :class="customRangeError ? 'font-black text-rose-700' : 'text-slate-500'">
              {{ customRangeError || `查詢區間共 ${customDays} 天，最多可查詢 180 天。` }}
            </p>

            <div class="flex flex-wrap items-center justify-between gap-4 rounded-md border border-dashed border-slate-400 bg-slate-50 p-4">
              <label class="flex min-h-11 cursor-pointer items-center gap-3 font-black text-brand-ink">
                <input v-model="verificationChecked" type="checkbox" class="h-5 w-5 accent-brand-dark">
                <span>我不是機器人</span>
              </label>
              <span class="text-xs text-slate-500">防機器人驗證介面預留</span>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                class="min-h-11 rounded-md bg-brand-red px-5 font-black text-white transition enabled:hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                :disabled="!canQuery"
              >
                查詢走勢
              </button>
              <span v-if="queryStatus" class="text-sm font-black text-emerald-700" role="status">{{ queryStatus }}</span>
            </div>
          </form>
        </div>

        <div class="overflow-x-auto p-4 md:p-6">
          <svg class="h-auto min-w-[680px]" viewBox="0 0 760 240" role="img" :aria-label="`${activeMetal.label}價模擬走勢圖`">
            <g stroke="#d9e0e5" stroke-width="1">
              <line v-for="y in [50, 90, 130, 170, 210]" :key="y" x1="24" :y1="y" x2="736" :y2="y" />
            </g>
            <polyline
              :points="chartPoints"
              fill="none"
              :stroke="activeMetal.tone"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </section>

      <section class="panel" aria-labelledby="daily-price-title">
        <header class="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 p-5">
          <div>
            <p class="eyebrow">Daily Prices</p>
            <h2 id="daily-price-title" class="text-2xl font-black">每日行情</h2>
          </div>
          <span class="text-sm text-slate-500">顯示最近 10 筆模擬資料</span>
        </header>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[760px] border-collapse text-sm">
            <thead class="bg-slate-100 text-left text-slate-600">
              <tr>
                <th class="p-4">日期</th>
                <th class="p-4">銅</th>
                <th class="p-4">鋁</th>
                <th class="p-4">鎳</th>
                <th class="p-4">錫</th>
                <th class="p-4">鉛</th>
                <th class="p-4">美元匯率</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in prices.table" :key="row.date" class="border-t border-slate-200">
                <td class="p-4 font-black text-brand-dark">{{ row.date }}</td>
                <td class="p-4">{{ row.copper }}</td>
                <td class="p-4">{{ row.aluminium }}</td>
                <td class="p-4">{{ row.nickel }}</td>
                <td class="p-4">{{ row.tin }}</td>
                <td class="p-4">{{ row.lead }}</td>
                <td class="p-4">{{ row.usd }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </section>
</template>
