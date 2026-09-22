<script setup>
const rawMaterials = ["電解銅板進口商", "PE／XLPE 材料進口商", "PVC／PE 粒料製造商"]
const materialProcessors = ["銅條熔煉廠", "裸銅線加工廠"]
const manufacturers = ["電子線製造業", "漆包線製造業", "電力線製造業", "通信線／光纜製造業", "建築線製造業"]
const channels = ["裁組線加工廠", "電子線經銷代理商", "漆包線經銷代理商", "電力線經銷代理商", "通信線／光纜經銷代理商", "建築線經銷代理商"]
const applications = [
  "家電製造業",
  "電腦資訊業",
  "電子器材業",
  "馬達、變壓器製造業",
  "電扇及家電製造業",
  "電子線圈製造業",
  "電力公司",
  "電力工程公司",
  "電信事業",
  "電信工程公司",
  "通信器材業",
  "水電及營建工程"
]
</script>

<template>
  <figure>
    <div class="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50">
      <div
        class="grid min-w-[1240px] grid-cols-[180px_44px_180px_44px_200px_44px_190px_44px_300px] items-stretch p-6"
        role="img"
        aria-labelledby="industry-structure-title industry-structure-desc"
      >
        <div class="sr-only">
          <h2 id="industry-structure-title">臺灣電線電纜產業結構</h2>
          <p id="industry-structure-desc">從原料供應、材料加工、線纜製造、通路到終端應用的五階段產業供應鏈。</p>
        </div>

        <section class="grid grid-rows-[auto_1fr] border-t-4 border-brand-red bg-white p-4 shadow-sm">
          <header class="border-b border-slate-200 pb-3">
            <span class="text-xs font-black text-brand-red">01</span>
            <h3 class="mt-1 text-xl font-black">原料供應</h3>
          </header>
          <div class="grid content-center gap-3 py-4">
            <div v-for="item in rawMaterials" :key="item" class="grid min-h-16 place-items-center rounded-md border border-slate-300 bg-slate-50 px-3 text-center text-sm font-black leading-6">
              {{ item }}
            </div>
          </div>
        </section>

        <div class="flex items-center px-2" aria-hidden="true">
          <span class="h-0.5 flex-1 bg-slate-400" />
          <span class="border-y-[6px] border-l-[9px] border-y-transparent border-l-slate-500" />
        </div>

        <section class="grid grid-rows-[auto_1fr] border-t-4 border-brand-steel bg-white p-4 shadow-sm">
          <header class="border-b border-slate-200 pb-3">
            <span class="text-xs font-black text-brand-steel">02</span>
            <h3 class="mt-1 text-xl font-black">材料加工</h3>
          </header>
          <div class="grid content-center gap-3 py-4">
            <div v-for="item in materialProcessors" :key="item" class="grid min-h-20 place-items-center rounded-md bg-brand-red px-3 text-center font-black leading-6 text-white">
              {{ item }}
            </div>
          </div>
        </section>

        <div class="flex items-center px-2" aria-hidden="true">
          <span class="h-0.5 flex-1 bg-slate-400" />
          <span class="border-y-[6px] border-l-[9px] border-y-transparent border-l-slate-500" />
        </div>

        <section class="grid grid-rows-[auto_1fr] border-t-4 border-brand-ink bg-white p-4 shadow-sm">
          <header class="border-b border-slate-200 pb-3">
            <span class="text-xs font-black text-brand-steel">03</span>
            <h3 class="mt-1 text-xl font-black">線纜製造</h3>
          </header>
          <div class="grid content-center gap-3 py-4">
            <div v-for="item in manufacturers" :key="item" class="grid min-h-14 place-items-center rounded-md bg-brand-graphite px-3 text-center text-sm font-black leading-6 text-white">
              {{ item }}
            </div>
          </div>
        </section>

        <div class="flex items-center px-2" aria-hidden="true">
          <span class="h-0.5 flex-1 bg-slate-400" />
          <span class="border-y-[6px] border-l-[9px] border-y-transparent border-l-slate-500" />
        </div>

        <section class="grid grid-rows-[auto_1fr] border-t-4 border-[#b58a3b] bg-white p-4 shadow-sm">
          <header class="border-b border-slate-200 pb-3">
            <span class="text-xs font-black text-[#8a651f]">04</span>
            <h3 class="mt-1 text-xl font-black">通路服務</h3>
          </header>
          <div class="grid content-center gap-2.5 py-4">
            <div v-for="item in channels" :key="item" class="grid min-h-12 place-items-center rounded-md border border-[#d7c498] bg-[#fbf8ef] px-2 text-center text-xs font-black leading-5 text-slate-800">
              {{ item }}
            </div>
          </div>
        </section>

        <div class="flex items-center px-2" aria-hidden="true">
          <span class="h-0.5 flex-1 bg-slate-400" />
          <span class="border-y-[6px] border-l-[9px] border-y-transparent border-l-slate-500" />
        </div>

        <section class="grid grid-rows-[auto_1fr] border-t-4 border-[#2e6b57] bg-white p-4 shadow-sm">
          <header class="border-b border-slate-200 pb-3">
            <span class="text-xs font-black text-[#2e6b57]">05</span>
            <h3 class="mt-1 text-xl font-black">終端應用</h3>
          </header>
          <div class="grid grid-cols-2 content-center gap-2.5 py-4">
            <div v-for="item in applications" :key="item" class="grid min-h-14 place-items-center rounded-md border border-emerald-900/20 bg-emerald-50 px-2 text-center text-xs font-black leading-5 text-slate-800">
              {{ item }}
            </div>
          </div>
        </section>
      </div>
    </div>
    <figcaption class="mt-3 text-sm leading-6 text-slate-500">
      依原公會網站產業結構資訊，以 CSS Grid 重新繪製；手機可左右滑動查看完整供應鏈。
    </figcaption>
  </figure>
</template>
