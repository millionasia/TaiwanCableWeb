export class MillionasiaSiteData {
  constructor() {
    this.brand = {
      name: "臺灣區電線電纜工業同業公會",
      englishName: "Taiwan Electric Wire & Cable Industries Association",
      logo: "/images/logo.jpg"
    }

    this.contact = {
      address: "114 台北市民權東路六段11巷41號3樓",
      phone: "886-2-27930358",
      fax: "886-2-27930113",
      email: "service@taiwancable.org.tw"
    }

    this.navigation = [
      { label: "首頁", to: "/" },
      { label: "關於公會", to: "/about" },
      { label: "會員查詢", to: "/members" },
      { label: "產品分類", to: "/products" },
      { label: "資料中心", to: "/resources" },
      { label: "申請入會", to: "/join" },
      { label: "聯絡我們", to: "/contact" }
    ]

    this.footerNavigation = [
      ...this.navigation,
      { label: "Site Map", to: "/sitemap" }
    ]

    this.ads = {
      top: {
        label: "AD",
        title: "會員品牌曝光專區",
        text: "選單下方橫幅廣告",
        tone: "steel"
      },
      rightRail: [
        { label: "AD", title: "智慧電網材料", text: "右側廣告版位", tone: "steel" },
        { label: "AD", title: "檢測認證服務", text: "會員供應鏈專區", tone: "silver" },
        { label: "AD", title: "設備與材料展", text: "展會合作版位", tone: "dark" },
        { label: "AD", title: "產業顧問服務", text: "第四格廣告版位", tone: "red" }
      ],
      leftMarquee: [
        { label: "AD", title: "導體材料", text: "高純度銅材供應" },
        { label: "AD", title: "線纜設備", text: "智慧製程升級" },
        { label: "AD", title: "檢驗測試", text: "品質認證服務" },
        { label: "AD", title: "工業展會", text: "會員優惠曝光" }
      ],
      noticeRotator: [
        { label: "AD", title: "產業服務推薦", text: "重要通知上方廣告", tone: "steel" },
        { label: "AD", title: "材料檢測與認證", text: "會員專屬曝光版位", tone: "silver" },
        { label: "AD", title: "電纜製程升級", text: "設備商合作廣告", tone: "red" }
      ],
      eventRotator: [
        { label: "AD", title: "活動合作夥伴", text: "活動看板下方廣告", tone: "steel" },
        { label: "AD", title: "線纜產業研討會", text: "報名與品牌曝光", tone: "red" },
        { label: "AD", title: "智慧製造專區", text: "供應鏈合作版位", tone: "dark" }
      ]
    }

    this.home = {
      heroImage: "/images/hero-cable-section.png",
      eyebrow: "Industry Portal",
      title: "臺灣電線電纜產業的會員服務入口",
      lead: "以專業、穩定、可維護的多頁式網站架構，整合會員查詢、產品分類、LME 行情、統計資料、公告與活動。",
      stats: [
        { value: "8", label: "產品分類" },
        { value: "RWD", label: "手機友善" },
        { value: "AD", label: "廣告版位保留" }
      ],
      services: [
        { index: "01", title: "會員查詢", text: "依公司名稱、地區與產品類別搜尋會員。", to: "/members" },
        { index: "02", title: "產品分類", text: "整理裸銅線、電力電纜、通信電纜與特殊線材。", to: "/products" },
        { index: "03", title: "資料中心", text: "LME 行情、產銷統計、公告與活動資料。", to: "/resources" },
        { index: "04", title: "申請入會", text: "提供正式會員與贊助會員申請流程。", to: "/join" }
      ]
    }

    this.notices = [
      { date: "2026.05.01", isoDate: "2026-05-01", title: "公告本會會員名錄資料更新作業", text: "會員基本資料、產品分類與聯絡窗口可於線上填報更新。" },
      { date: "2026.04.22", isoDate: "2026-04-22", title: "電線電纜相關標準與法規宣導說明會", text: "協助會員掌握產品認證、檢驗與市場規範重點。" },
      { date: "2026.04.10", isoDate: "2026-04-10", title: "114 年度產銷統計資料填報提醒", text: "請會員廠商依期限完成資料回覆。" }
    ]

    this.events = [
      { month: "Jun", day: "18", isoDate: "2026-06-18", title: "會員廠參訪與供應鏈交流", text: "桃園製造基地，上午 09:30 報到。" },
      { month: "Jul", day: "09", isoDate: "2026-07-09", title: "低碳製造與材料趨勢講座", text: "線上直播與會後簡報下載。" }
    ]

    this.members = [
      { id: "1001", city: "桃園", category: ["copper", "power"], name: "太平洋電線電纜股份有限公司", english: "Pacific Electric Wire & Cable Co., Ltd.", phone: "03-4202555", address: "桃園市楊梅區快速路五段858號", categoryText: "銅線材、電力電纜" },
      { id: "1002", city: "台北", category: ["copper"], name: "中華電線電纜股份有限公司", english: "China Wire & Cable Co., Ltd.", phone: "02-25993456", address: "台北市中山北路三段58號", categoryText: "銅線材" },
      { id: "1003", city: "台北", category: ["power", "communication"], name: "華新麗華股份有限公司", english: "Walsin Lihwa Corporation", phone: "02-87262211", address: "台北市信義區松智路1號25樓", categoryText: "電力電纜、通信電纜" },
      { id: "1004", city: "高雄", category: ["power"], name: "華榮電線電纜股份有限公司", english: "Hua Eng Wire & Cable Co., Ltd.", phone: "07-2814161", address: "高雄市前金區中正四路170號", categoryText: "電力電纜" },
      { id: "1005", city: "台南", category: ["power"], name: "大亞電線電纜股份有限公司", english: "TA YA ELECTRIC WIRE & Cable Co., Ltd.", phone: "06-5953131", address: "台南市關廟區中山路2段249號", categoryText: "電力電纜" },
      { id: "1006", city: "台北", category: ["communication"], name: "大同股份有限公司", english: "Tatung Co.", phone: "02-25925252", address: "台北市中山北路三段22號", categoryText: "通信電纜" }
    ]

    this.products = [
      { index: "01", title: "裸銅線類", text: "SCR 銅線及銅條、無氧銅線及銅棒、軟硬絞銅線。" },
      { index: "02", title: "電力電纜類", text: "高壓、低壓、PVC、橡膠絕緣及船舶電纜。" },
      { index: "03", title: "一般通信電纜", text: "一般通信線與光纖通信電纜分類查詢。" },
      { index: "04", title: "漆包線及紗包線", text: "馬達、線圈與電子元件使用之磁線材料。" },
      { index: "05", title: "電子線", text: "電子線、電源線與連接用途線材。" },
      { index: "06", title: "鋁電線電纜", text: "鋁導體線材與電纜產品。" },
      { index: "07", title: "特殊線", text: "特殊規格、環境與應用條件線材。" },
      { index: "08", title: "其他", text: "未歸入既有大類之產品與服務。" }
    ]

    this.market = [
      { metal: "Copper", value: "US$/MT 9,860" },
      { metal: "Aluminium", value: "US$/MT 2,540" },
      { metal: "Nickel", value: "US$/MT 19,280" },
      { metal: "Zinc", value: "US$/MT 2,910" }
    ]

    this.downloads = [
      "115年1-2月份 LME 每日行情",
      "114年12月份 LME 每日行情",
      "產銷統計資料彙整"
    ]

    this.membershipSteps = [
      { title: "確認資格", text: "從事電線電纜製造或相關產業服務。" },
      { title: "準備資料", text: "公司登記、工廠登記、產品資料與聯絡窗口。" },
      { title: "送件審查", text: "公會受理後依流程審核與回覆。" },
      { title: "完成入會", text: "完成會費與會員資料建檔。" }
    ]
  }

  getBrand() {
    return this.brand
  }

  getContact() {
    return this.contact
  }

  getNavigation() {
    return this.navigation
  }

  getFooterNavigation() {
    return this.footerNavigation
  }

  getAds() {
    return this.ads
  }

  getMembers() {
    return this.members
  }

  getProducts() {
    return this.products
  }
}

export const millionasia = new MillionasiaSiteData()
