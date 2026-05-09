<script setup>
import { millionasia } from "~/data/millionasia"

useHead({ title: "聯絡我們" })
const contact = millionasia.getContact()
</script>

<template>
  <PageHero
    eyebrow="Contact"
    title="聯絡我們"
    description="提供公會地址、電話、傳真與 Email，方便會員與產業夥伴聯繫。"
  />
  <section class="py-16">
    <div class="container-page grid gap-6 lg:grid-cols-[1fr_300px]">
      <article class="panel p-7">
        <h2 class="text-3xl font-black">公會聯絡資訊</h2>
        <dl class="mt-6 grid gap-4">
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <dt class="font-black text-slate-600">地址</dt>
            <dd class="mt-1 font-black">{{ contact.address }}</dd>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <dt class="font-black text-slate-600">電話</dt>
            <dd class="mt-1 font-black"><a :href="`tel:+${contact.phone.replace(/-/g, '')}`">{{ contact.phone }}</a></dd>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <dt class="font-black text-slate-600">傳真</dt>
            <dd class="mt-1 font-black">{{ contact.fax }}</dd>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <dt class="font-black text-slate-600">Email</dt>
            <dd class="mt-1 font-black"><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></dd>
          </div>
        </dl>
      </article>
      <AdRail />
    </div>
  </section>
</template>
