<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "加入公會" })

const application = millionasia.membershipApplication
const submitted = ref(false)
const formData = reactive({
  name: "",
  uid: "",
  owner: "",
  establishedAt: "",
  city: "",
  address: "",
  postalCode: "",
  phone: "",
  fax: "",
  contact: "",
  jobTitle: "",
  website: "",
  email: "",
  capital: "",
  revenue: "",
  businessItems: [],
  employees: "",
  mainProducts: ""
})

const submitMockApplication = () => {
  submitted.value = true
}
</script>

<template>
  <PageHero
    eyebrow="Membership"
    title="加入公會"
    description="依公會既有申請欄位填寫基本資料、營業項目與主要產品。"
  />

  <section class="py-12 sm:py-16">
    <div class="container-page">
      <div class="grid gap-4 md:grid-cols-2">
        <article v-for="(note, index) in application.notes" :key="note.title" class="border-l-4 px-5 py-4" :class="index ? 'border-[#b58a3b] bg-[#fbf8ef]' : 'border-brand-red bg-red-50'">
          <p class="text-xs font-black uppercase text-slate-500">Membership {{ index + 1 }}</p>
          <h2 class="mt-1 text-xl font-black">{{ note.title }}</h2>
          <p class="mt-2 leading-7 text-slate-700">{{ note.text }}</p>
        </article>
      </div>

      <form class="panel mt-8 overflow-hidden" @submit.prevent="submitMockApplication">
        <div class="border-b border-slate-200 bg-brand-ink px-5 py-5 text-white sm:px-7">
          <h2 class="text-2xl font-black">會員入會申請表</h2>
          <p class="mt-1 text-sm text-white/70"><span class="text-red-300">＊</span> 為必要填寫欄位</p>
        </div>

        <table class="block w-full text-left sm:table">
          <tbody class="block divide-y divide-slate-200 sm:table-row-group">
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 公司名稱</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.name" required autocomplete="organization" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="text"></td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 統一編號</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.uid" required inputmode="numeric" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="text"></td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 負責人</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.owner" required autocomplete="name" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="text"></td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 設立時間</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.establishedAt" required class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="date"></td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 縣市別</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4">
                <select v-model="formData.city" required autocomplete="address-level1" class="min-h-12 w-full rounded-md border border-slate-300 bg-white px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10">
                  <option value="" disabled>請選擇縣市</option>
                  <option v-for="city in application.cities" :key="city" :value="city">{{ city }}</option>
                </select>
              </td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 主要地址</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.address" required autocomplete="street-address" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="text"></td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 郵遞區號</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4">
                <div class="flex flex-wrap items-center gap-3">
                  <input v-model="formData.postalCode" required autocomplete="postal-code" class="min-h-12 min-w-0 flex-1 rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="text">
                  <a href="https://www.post.gov.tw/post/internet/Postal/index.jsp?ID=208" target="_blank" rel="noopener noreferrer" class="text-sm font-black text-brand-dark underline underline-offset-4">查詢郵遞區號</a>
                </div>
              </td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 電話</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.phone" required autocomplete="tel" placeholder="例：(02)27930358" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="tel"></td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4">傳真</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.fax" placeholder="例：(02)27930113" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="tel"></td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 聯絡人</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.contact" required autocomplete="name" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="text"></td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4">職稱</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.jobTitle" autocomplete="organization-title" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="text"></td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4">網址</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.website" autocomplete="url" placeholder="https://" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="url"></td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4">E-MAIL</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.email" autocomplete="email" placeholder="name@example.com" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="email"></td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 資本額</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.capital" required min="0" inputmode="numeric" placeholder="例：50000000" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="number"></td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 營業額</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.revenue" required min="0" inputmode="numeric" placeholder="例：50000000" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="number"></td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 營業項目</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4">
                <fieldset class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <legend class="sr-only">選擇營業項目</legend>
                  <label v-for="item in application.businessItems" :key="item" class="flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700">
                    <input v-model="formData.businessItems" :value="item" class="h-4 w-4 accent-brand-red" type="checkbox">
                    <span>{{ item }}</span>
                  </label>
                </fieldset>
              </td>
            </tr>
            <tr class="grid bg-white sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4"><span class="text-brand-red">＊</span> 員工人數</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><input v-model="formData.employees" required min="0" inputmode="numeric" class="min-h-12 w-full rounded-md border border-slate-300 px-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" type="number"></td>
            </tr>
            <tr class="grid bg-slate-50 sm:table-row">
              <th class="px-5 pb-2 pt-5 align-top text-sm font-black text-slate-700 sm:w-48 sm:px-6 sm:py-4">主要產品</th>
              <td class="px-5 pb-5 sm:px-6 sm:py-4"><textarea v-model="formData.mainProducts" class="min-h-32 w-full rounded-md border border-slate-300 p-3 focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-red-900/10" rows="5"></textarea></td>
            </tr>
          </tbody>
        </table>

        <div class="border-t border-slate-200 bg-white px-5 py-6 sm:px-7">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <p class="max-w-2xl text-sm leading-6 text-slate-500">目前為申請表版型展示，尚未連線至公會送件資料庫，按下按鈕不會傳送資料。</p>
            <button class="inline-flex min-h-12 items-center rounded-md bg-brand-dark px-6 font-black text-white transition hover:bg-brand-red" type="submit">
              送出申請
            </button>
          </div>
          <p v-if="submitted" class="mt-4 border-l-4 border-[#2e6b57] bg-emerald-50 px-4 py-3 font-bold text-emerald-900" role="status">
            表格驗證完成；目前為 Mock 畫面，資料未送出。
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
