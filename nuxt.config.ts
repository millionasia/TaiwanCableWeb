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
          content: "臺灣區電線電纜工業同業公會新版 RWD 網站，整合公會資訊、會員廠商查詢、產品分類、金屬行情與入會服務。"
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
