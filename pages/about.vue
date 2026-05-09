<script setup>
useHead({ title: "關於公會" })
</script>

<template>
  <PageHero
    eyebrow="About Association"
    title="關於公會"
    description="整合會員服務、產業資訊與公會公告，建立清楚、專業且符合現代瀏覽需求的產業入口。"
  />
  <section class="py-16">
    <div class="container-page grid gap-6 lg:grid-cols-[1fr_300px]">
      <article class="panel p-7">
        <h2 class="text-3xl font-black">公會定位</h2>
        <p class="mt-4 text-lg leading-8 text-slate-700">
          臺灣區電線電纜工業同業公會作為產業共同服務平台，整合會員名錄、產品分類、行情資料與產業活動資訊，協助外界快速認識台灣電線電纜供應鏈。
        </p>
        <div class="mt-7 grid gap-4 md:grid-cols-3">
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <strong>會員服務</strong>
            <p class="mt-2 text-slate-600">提供會員查詢、入會資訊與公會聯繫管道。</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <strong>產業資料</strong>
            <p class="mt-2 text-slate-600">整合行情、標準、法規與下載資訊。</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <strong>活動公告</strong>
            <p class="mt-2 text-slate-600">發布會議、課程與產業交流活動。</p>
          </div>
        </div>
      </article>
      <AdRail />
    </div>
  </section>
</template>
