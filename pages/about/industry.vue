<script setup>
useHead({ title: "產業結構" })
</script>

<template>
  <AboutPageShell
    eyebrow="Industry Structure"
    title="產業結構"
    description="從銅材與絕緣材料、線纜製造、通路到終端應用，掌握完整產業供應鏈。"
  >
    <div class="flex flex-col gap-3 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="eyebrow">Supply Chain</p>
        <h2 class="text-3xl font-black">電線電纜產業供應鏈</h2>
      </div>
      <p class="max-w-xl leading-7 text-slate-600">以原圖資訊為基礎，重新整理材料、製造、通路與應用端的關係。</p>
    </div>
    <div class="mt-8">
      <IndustryStructure />
    </div>
  </AboutPageShell>
</template>
