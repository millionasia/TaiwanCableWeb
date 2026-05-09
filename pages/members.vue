<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "會員查詢" })

const keyword = ref("")
const city = ref("")
const category = ref("")
const members = millionasia.getMembers()

const filteredMembers = computed(() => {
  const searchText = keyword.value.trim().toLowerCase()
  return members.filter((member) => {
    const text = `${member.id} ${member.name} ${member.english} ${member.phone} ${member.address} ${member.categoryText}`.toLowerCase()
    const matchesKeyword = !searchText || text.includes(searchText)
    const matchesCity = !city.value || member.city === city.value
    const matchesCategory = !category.value || member.category.includes(category.value)
    return matchesKeyword && matchesCity && matchesCategory
  })
})

const resetFilters = () => {
  keyword.value = ""
  city.value = ""
  category.value = ""
}
</script>

<template>
  <PageHero
    eyebrow="Member Directory"
    title="會員查詢"
    description="提供會員廠商查詢、地區篩選與產品分類檢索，協助訪客快速找到合作對象。"
  />
  <section class="py-16">
    <div class="container-page grid gap-6 lg:grid-cols-[1fr_300px]">
      <div class="grid gap-5">
        <form class="panel grid gap-4 p-5 md:grid-cols-[1fr_200px] md:items-end" role="search">
          <label class="grid gap-2">
            <span class="text-sm font-black">公司名稱或關鍵字</span>
            <input v-model="keyword" class="min-h-12 rounded-lg border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="search" placeholder="輸入公司、產品、電話或地址">
          </label>
          <label class="grid gap-2">
            <span class="text-sm font-black">地區</span>
            <select v-model="city" class="min-h-12 rounded-lg border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10">
              <option value="">全部地區</option>
              <option value="台北">台北</option>
              <option value="桃園">桃園</option>
              <option value="台南">台南</option>
              <option value="高雄">高雄</option>
            </select>
          </label>
          <fieldset class="flex flex-wrap gap-2 md:col-span-2">
            <legend class="mb-2 w-full text-sm font-black">產品類別</legend>
            <label v-for="option in [{ label: '全部', value: '' }, { label: '電力電纜', value: 'power' }, { label: '通訊電纜', value: 'communication' }, { label: '銅線材', value: 'copper' }]" :key="option.label">
              <input v-model="category" class="peer sr-only" type="radio" name="category" :value="option.value">
              <span class="inline-flex min-h-10 cursor-pointer items-center rounded-full border border-slate-300 px-4 text-sm font-black peer-checked:border-brand-dark peer-checked:bg-brand-dark peer-checked:text-white">
                {{ option.label }}
              </span>
            </label>
            <button class="ml-auto inline-flex min-h-10 items-center rounded-lg border border-slate-300 px-4 font-black" type="button" @click="resetFilters">
              清除篩選
            </button>
          </fieldset>
        </form>

        <section class="panel">
          <div class="flex items-center justify-between border-b border-slate-200 p-5">
            <h2 class="text-3xl font-black">查詢結果</h2>
            <strong>{{ filteredMembers.length }} 筆資料</strong>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-[760px] table-auto border-collapse text-left text-sm md:w-full">
              <thead class="bg-slate-50 text-slate-600">
                <tr>
                  <th class="border-b border-slate-200 p-4">編號</th>
                  <th class="border-b border-slate-200 p-4">公司名稱</th>
                  <th class="border-b border-slate-200 p-4">電話</th>
                  <th class="border-b border-slate-200 p-4">地址</th>
                  <th class="border-b border-slate-200 p-4">類別</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="member in filteredMembers" :key="member.id">
                  <td class="border-b border-slate-200 p-4">{{ member.id }}</td>
                  <td class="border-b border-slate-200 p-4">
                    <strong class="block">{{ member.name }}</strong>
                    <span class="text-slate-500">{{ member.english }}</span>
                  </td>
                  <td class="border-b border-slate-200 p-4">{{ member.phone }}</td>
                  <td class="border-b border-slate-200 p-4">{{ member.address }}</td>
                  <td class="border-b border-slate-200 p-4">{{ member.categoryText }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-if="filteredMembers.length === 0" class="p-6 text-slate-600">沒有符合篩選條件的資料。</p>
        </section>
      </div>
      <AdRail />
    </div>
  </section>
</template>
