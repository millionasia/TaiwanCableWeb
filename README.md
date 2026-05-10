# 臺灣區電線電纜工業同業公會網站改版

這是臺灣區電線電纜工業同業公會網站的 Nuxt 3 + Tailwind CSS 改版專案。目標是將原本非 RWD 的網站重構為現代化、多頁式、可維護的公會網站，同時保留公會重視的廣告版位營收配置。

## 技術架構

- Nuxt.js 3
- Vue 3
- Tailwind CSS
- Mock data：`data/millionasia.js`
- Static assets：`public/images`

## 專案重點

- 多頁式網站，不採一頁式設計
- RWD 響應式版面
- 保留公會 LOGO 原色
- 首頁使用實體電線電纜剖面風格主視覺
- 保留廣告營收版位：
  - 選單下方橫幅廣告
  - 首頁左側自下而上跑馬廣告
  - 首頁重要通知上方輪播廣告
  - 首頁活動看板下方輪播廣告
  - 右側四個廣告版位
- Footer 提供 SEO navigation 與 Site Map
- Footer 保留「米亞科技設計」

## 常用指令

安裝套件：

```bash
corepack pnpm install
```

啟動開發伺服器：

```bash
corepack pnpm dev
```

目前 `dev` script 固定使用：

```bash
nuxt dev --host 127.0.0.1 --port 3001
```

本機開發網址：

```text
http://127.0.0.1:3001/
```

正式建置：

```bash
corepack pnpm build
```

預覽正式建置結果：

```bash
corepack pnpm preview
```

部署到 Vercel：

```bash
corepack pnpm dlx vercel deploy --prod
```

## 主要目錄

```text
components/        共用元件，例如 Header、Footer、廣告版位
data/              Mock data，集中於 millionasia.js
layouts/           Nuxt layout
pages/             多頁式路由頁面
public/images/     LOGO 與首頁主視覺圖片
assets/css/        Tailwind 入口與自訂樣式
```

## Mock Data

目前所有網站資料先集中在：

```text
data/millionasia.js
```

未來若串接 CMS 或後台 API，可優先從此檔案的資料結構進行替換。

## 已部署網址

Vercel production：

```text
https://https-www-taiwancable-org-tw-rwd.vercel.app
```

GitHub repository：

```text
git@github.com:millionasia/TaiwanCableWeb.git
```
