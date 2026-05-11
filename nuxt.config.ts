export default defineNuxtConfig({
  compatibilityDate: "2026-05-09",
  modules: ["@nuxtjs/tailwindcss", "@vercel/analytics"],
  css: ["~/assets/css/tailwind.css"],
  app: {
    head: {
      htmlAttrs: { lang: "zh-Hant" },
      titleTemplate: "%s｜臺灣區電線電纜工業同業公會",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "臺灣區電線電纜工業同業公會新版 RWD 網站，整合會員查詢、產品分類、資料中心、入會服務與廣告版位。"
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts"
  }
})
